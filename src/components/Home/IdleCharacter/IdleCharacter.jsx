import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import rumblerModel from "assets/home/characters/rumbler_yellow_idle.gltf";
// import rumblerModel from "assets/home/characters/rumbler_boxer_cleaned.glb";
import rumblerModel from "assets/home/characters/rumbler_boxer_no_tex.glb";
// import rumblerModel from "assets/home/characters/rumbler_boxer_all512.glb";

//1024x1024 textures
import bodyTex from "assets/home/characters/boxer_textures/SportsSet_YellowRumbler_BaseColor_01.png"
import sportsTex from "assets/home/characters/boxer_textures/SportSet_BaseColor.jpg"
import projectorHoloColorTex from "assets/home/characters/boxer_textures/hologram_projection_tex.png"
import projectorHoloEmissionTex from "assets/home/characters/boxer_textures/hologram_projection_tex.001.png"
import boxerTex from "assets/home/characters/boxer_textures/BoxerSet_BaseColor.png"

//512x512 textures
// import bodyTex from "assets/home/characters/boxer_textures/SportsSet_YellowRumbler_BaseColor_01_512.png"
// import sportsTex from "assets/home/characters/boxer_textures/SportSet_BaseColor_512.png"
// import projectorHoloColorTex from "assets/home/characters/boxer_textures/hologram_projection_tex_512.png"
// import projectorHoloEmissionTex from "assets/home/characters/boxer_textures/hologram_projection_tex_512.001.png"
// import boxerTex from "assets/home/characters/boxer_textures/BoxerSet_BaseColor_512.png"
import "./idle.scss";
import { MathUtils } from "three";

var modelLoaded = false;

function IdleCharacter() {
  const ref = useRef();

  useEffect(() => {
    let mixers = [];
    var mixer;

    let camera;

    const manager = new THREE.LoadingManager();
    const clock = new THREE.Clock();

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);

    let scene;
    let rumbler;

    const current = ref.current;

    let width = current.clientWidth; // or window.innerWidth;
    let height = current.clientHeight; // = window.innerHeight for full screen
    camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);

    const init = () => {
      scene = new THREE.Scene();
      // camera.position.set(0, 2.8, 8);
      camera.position.set(0, 3.4, 8);
      // camera.rotation.set(MathUtils.degToRad(10),0,0);
      camera.rotation.set(MathUtils.degToRad(0), 0, 0);
      //   camera.position.multiplyScalar(30);

      //   camera.rotation.set(50, 0, 0);

      renderer.shadowMap.enabled = true;
      // renderer.outputEncoding = THREE.sRGBEncoding;
      // renderer.setClearColor(0xffffff, 0);
      // scene.background = new THREE.Color(0x999999);

      // scene.background = new THREE.Color().setHSL(0.6, 0, 1);
      renderer.setSize(width, height);
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      current.appendChild(renderer.domElement);

      // add light
      // scene.fog = new THREE.Fog(0xa0a0a0, 1, 2000);
      scene.fog = new THREE.Fog(scene.background, 1, 200);
      const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1);
      scene.add(hemiLight);

      const amblight = new THREE.AmbientLight(0x080820, 0.5);
      scene.add(amblight);

      // add to show light helper
      /*const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
      scene.add(hemiLightHelper);
      */

      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.toneMappingExposure = 1.6;
      renderer.shadowMap.enabled = true;

      //Blue rim light
      const dirLight = new THREE.DirectionalLight(0x2fcaf5, 5);
      //dirLight.color.setHSL(0.1, 1, 0.95);
      // dirLight.position.multiplyScalar(30);

      const d = 200;
      dirLight.position.set(1.5, -0.2, -2.5);
      // dirLight.position.multiplyScalar(1000);

      dirLight.castShadow = true;

      dirLight.shadow.camera.top = d;
      dirLight.shadow.camera.bottom = -d;
      dirLight.shadow.camera.left = -d;
      dirLight.shadow.camera.right = d;
      // dirLight.shadow.camera.near = 0.1;
      // dirLight.shadow.camera.far = 100;

      dirLight.shadow.camera.far = 35000;
      dirLight.shadow.bias = -0.0001;
      scene.add(dirLight);

      //red rim light
      const dirlight2 = new THREE.DirectionalLight(0xed2f2f, 5);
      // dirlight2.position.multiplyScalar(30);

      dirlight2.position.set(-1.5, -0.1, -0.5);
      // dirlight2.position.multiplyScalar(1000);

      dirlight2.castShadow = true;
      dirlight2.shadow.camera.top = d;
      dirlight2.shadow.camera.bottom = -d;
      dirlight2.shadow.camera.left = -d;
      dirlight2.shadow.camera.right = d;

      dirlight2.shadow.camera.far = 35000;
      dirlight2.shadow.bias = -0.0001;
      scene.add(dirlight2);

      //White top light
      const dirlight3 = new THREE.DirectionalLight(0xffffff, 4);
      // dirlight3.position.multiplyScalar(30);

      dirlight3.position.set(-2.5, 15, 4);
      // dirlight3.position.multiplyScalar(1000);

      dirlight3.castShadow = true;
      dirlight3.shadow.camera.top = d;
      dirlight3.shadow.camera.bottom = -d;
      dirlight3.shadow.camera.left = -d;
      dirlight3.shadow.camera.right = d;

      dirlight3.shadow.camera.far = 35000;
      dirlight3.shadow.bias = -0.0001;
      scene.add(dirlight3);

      const dirLightTarget = new THREE.Object3D();
      dirLightTarget.position.set(0, 0, 0);
      scene.add(dirLightTarget);

      dirLight.target = dirLightTarget;
      dirlight2.target = dirLightTarget;
      dirlight3.target = dirLightTarget;

      renderer.domElement.style.display = "none";

      // add to show light helper
      // const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
      // scene.add(dirLightHelper);

      // load model
      const loader = new GLTFLoader(manager);

      loader.load(rumblerModel, function (object) {
        rumbler = object.scene;
        rumbler.position.set(0, 0.6, 0);
        rumbler.scale.set(10, 10, 10);
        rumbler.rotation.set(0, MathUtils.degToRad(0), 0);
        // console.log("IdleCharacter loaded");

        mixer = new THREE.AnimationMixer(rumbler);
        const action = mixer.clipAction(object.animations[0]);
        action.play();
        mixers.push(mixer);

        const texmanager = new THREE.LoadingManager();
        const texLoader = new THREE.TextureLoader(texmanager); 

        const bodyMat = new THREE.MeshStandardMaterial({
            map: texLoader.load( bodyTex, (tex) => {
            tex.flipY = false
            tex.encoding = THREE.sRGBEncoding
            } ),
            name:'bodyMat'
        })
        const boxerMat = new THREE.MeshStandardMaterial({
            map: texLoader.load( boxerTex, (tex) => {
            tex.flipY = false
            tex.encoding = THREE.sRGBEncoding
            } ),
            name:'boxerMat'
        })
        const sportsMat = new THREE.MeshStandardMaterial({
            map: texLoader.load( sportsTex, (tex) => {
            tex.flipY = false
            tex.encoding = THREE.sRGBEncoding
            } ),
            name:'sportsMat'
        })
        const holoMat = new THREE.MeshBasicMaterial({
          map : texLoader.load( projectorHoloColorTex, (tex) => {
            tex.flipY = false
            tex.encoding = THREE.sRGBEncoding
          }),
          // emissiveIntensity : 2,
          transparent : true,
          name: 'holoMat'
        })
        texmanager.onLoad = () => { 
          bodyMat.needsUpdate = true;
          boxerMat.needsUpdate = true;
          sportsMat.needsUpdate = true;
          holoMat.needsUpdate = true;
          const changeTextures = true
  
  
          rumbler.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
  
              if(changeTextures){
                if(child.name === 'Body003' 
                || child.name === 'Eye_L003' 
                || child.name === 'Eye_R003' 
                || child.name === 'EyeBrow_L003'
                || child.name === 'EyeBrow_R003'
                || child.name === 'Mouth003') {
                  // console.log(child.material);
                  child.material = bodyMat
                  child.material.needsUpdate = true
                  // console.log(child.material);
                }
                else if (child.name === 'Glove_L002' || child.name === 'Glove_R002'){
                  child.material = boxerMat
                  child.material.needsUpdate = true
                }
                else if (child.name === 'HeadSet009' || child.name === 'Tshit009' || child.name === 'SpotShoe_L002' || child.name === 'SpotShoe_R002'){
                  child.material = sportsMat
                  child.material.needsUpdate = true
                }
                else if(child.name == "pCone1006"){
                  child.material = holoMat
                  child.material.needsUpdate = true
                }
                else if(child.name == "pCylinder9011"){
                  const baseMat = new THREE.MeshStandardMaterial({color : 0x00FFFF, roughness : 0.2, metalness : 0.7});
                  child.material = baseMat;
                }
              }
              
  
              if (child.material.map) {
                // child.material.map = null
                // child.material.needsUpdate = true
              }
            }
          });
          render();
          console.log("Idle Character loaded!!!"); 
        }

        scene.add(rumbler);
        modelLoaded = true;
        renderer.domElement.style.display = "block";
        renderer.compile(rumbler,camera)
        renderer.render(scene,camera);
        // setTimeout(() => {
        // }, 2500);
      });
    };

    init();

    manager.onLoad = () => {
      render();
      animate();
    };

    const doc = document.getElementById('idlecharacter_model');
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
      requestAnimationFrame(animate);
      // characterChange();
      if(isScrolledIntoView(doc) && modelLoaded){

        const delta = clock.getDelta();
        // for (let i = 0; i < mixers.length; i++) {
          //   mixers[i].update(delta);
          // }
          mixer.update(delta);
          render();
      }
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = ref.current.clientWidth;
      height = ref.current.clientHeight;
      // height = 500;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      render();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Callback to cleanup three js, cancel animationFrame, etc

      window.removeEventListener("resize", handleResize);
      current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className="IdleCharacter"></div>;
}

export default IdleCharacter;
