import { useRef, useEffect } from "react";
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import model from "assets/planet/planet.obj";
import texture from "assets/planet/planet_palette.png";

var modelLoaded = false;

function Planet() {
  const ref = useRef();

  useEffect(() => {
    var world;
    var width, height;
    var controls;

    var isMouseDown = false;

    const pivot = new THREE.Group();
    const moon = new THREE.Group();
    const rings = new THREE.Group();

    const current = ref.current;
    const manager = new THREE.LoadingManager();

    const scene = new THREE.Scene();
    width = ref.current.clientWidth; // or window.innerWidth;
    height = ref.current.clientHeight; // = window.innerHeight for full screen
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 100);

    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    ref.current.appendChild(renderer.domElement);

    // add light

    scene.fog = new THREE.Fog(0xa0a0a0, 1, 100);
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x222222, 1);
    hemiLight.position.set(0, 0, -5);

    const hemiLight2 = new THREE.HemisphereLight(0xeeeeee, 0x222222, 1);
    hemiLight2.position.set(0, 0, 5);
    // scene.add(hemiLight);
    camera.add(hemiLight);
    camera.add(hemiLight2);
    // const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
    // scene.add(hemiLightHelper);

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(0, 0, -50);
    dirLight.castShadow = true;
    dirLight.shadow.camera.right = 100;
    dirLight.shadow.camera.left = -100;
    dirLight.shadow.camera.top = 100;
    dirLight.shadow.camera.bottom = -100;
    // dirLight.lookAt = new Vector3();
    // scene.add(dirLight);
    camera.add(dirLight);
    scene.add(camera);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.y = 5;
    camera.add(pointLight);

    // renderer.domElement.style.display = "none";

    // add to show light helper
    // const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
    // scene.add(dirLightHelper);

    // load model
    const loader = new OBJLoader(manager);
    const textureLoader = new THREE.TextureLoader(manager);

    loader.load(model, function (object) {
      world = object;
      // console.log(world);

      textureLoader.load(texture, (texture) => {

        world.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.map = texture;
            child.material.needsUpdate = true;
            child.material.side = THREE.DoubleSide;
          }
        });
        var box = new THREE.Box3().setFromObject(world);
        box.getCenter(world.position); // this re-sets the mesh position
        world.position.multiplyScalar(-1);
  
        while (world.children.length > 0) {
          let child = world.children[0];
          box.getCenter(child.position); // this re-sets the mesh position
          child.position.multiplyScalar(-1);
          if (
            child.name === "Icosphere.001_Icosphere.005" ||
            child.name.includes("Moon")
          ) {
            moon.add(child);
          } else if (child.name.includes("Ring")) {
            rings.add(child);
          } else if (child.name.includes("atmosphere_atmosphere_X")) {
            child.material.opacity = 0.1;
            child.material.transparent = true;
            pivot.add(child);
          } else pivot.add(child);
        }
  
        // console.log(rings);
  
        scene.add(pivot);
        camera.add(rings);
        rings.position.z = -4;
        rings.rotation.y = 20;
        camera.add(moon);
        moon.position.z = -4;
        moon.rotation.y = -2.5;
        moon.rotation.x = -5;
  
        //renderer.compile(scene,camera);
        modelLoaded = true;
        render();
        afterLoad();
      });

      // setTimeout(() => {
      // }, 2500);
      // renderer.domElement.style.display = "block";
    });

    // manager.onLoad = () => {
    const afterLoad = function() {
      // console.log("loaded");

      window.addEventListener("resize", handleResize);
      current.addEventListener("touchstart", onMouseDown, false);
      current.addEventListener("touchend", onMouseUp, false);
      current.addEventListener("mousedown", onMouseDown);
      current.addEventListener("mouseup", onMouseUp);
      animate();
    };

    controls = new TrackballControls(camera, renderer.domElement);

    controls.rotateSpeed = 2;
    controls.noPan = true;
    controls.noZoom = true;
    controls.update();

    const doc = document.getElementById('planet_model');
    function isScrolledIntoView(el) {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;
  
      // Only completely visible elements return true:
      // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
      var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      // Partially visible elements return true:
      //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    }

    // animate
    const animate = function () {
      if (!isMouseDown) {
        pivot.rotation.y += 0.002;
        // moon.rotation.x -= 0.2;
        // moon.rotation.y -= 0.2;
      }
      requestAnimationFrame(animate);
      if(isScrolledIntoView(doc) && modelLoaded){
        moon.rotation.z -= 0.002;
        rings.rotation.y += 0.001;
        controls.update();
        render();
      }
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = ref.current.clientWidth;
      height = ref.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      render();
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    return () => {
      // Callback to cleanup three js, cancel animationFrame, etc

      window.removeEventListener("resize", handleResize);
      current.removeEventListener("touchstart", onMouseDown);
      current.removeEventListener("touchend", onMouseUp);
      current.removeEventListener("mousedown", onMouseDown);
      current.removeEventListener("mouseup", onMouseUp);
      current.removeChild(renderer.domElement);

      scene.remove(pivot);
      scene.remove(rings);
      scene.remove(moon);
      scene.remove(hemiLight);
      scene.remove(hemiLight2);
      scene.remove(dirLight);
    };
  }, []);

  return <div className="planet" ref={ref} />;
}

export default Planet;
