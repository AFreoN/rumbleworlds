import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {RectAreaLightUniformsLib} from 'three/examples/jsm/lights/RectAreaLightUniformsLib'

import './Incubators.scss'

import podium from "assets/mint/incubators/Podium_01.gltf";
import i_red from "assets/mint/incubators/Red_Incubator_01.gltf";
import i_purple from "assets/mint/incubators/Purple_Incubator_01.gltf";
import i_blue from "assets/mint/incubators/Blue_Incubator_01.gltf";
import i_yellow from "assets/mint/incubators/Yellow_Incubator_01.gltf";
import i_green from "assets/mint/incubators/Green_Incubator_01.gltf";

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
// import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
// import { BrightnessContrastShader } from 'three/examples/jsm/shaders/BrightnessContrastShader'


function Incubators() {
  const ref = useRef();
  const blueTextRef = useRef()
  const purpleTextRef = useRef()
  const redTextRef = useRef()
  const yellowTextRef = useRef()
  const greenTextRef = useRef()


  const incubatorTextStartOpacity = '0%'


  useEffect(() => {
    var incubatorBlue,
      incubatorPurple,
      incubatorRed,
      incubatorYellow,
      incubatorGreen;

    var currentIncubator, prevIncubator;
    var width, height;
    // var controls;

    // var target = new THREE.Vector3();

    // var mouseX = 0,
    //   mouseY = 0;

    const current = ref.current;
    const manager = new THREE.LoadingManager();
   // var isHovering = false,
    var isMovingUp = true;

    var selectedObjects  = [];
    
    const scene = new THREE.Scene();
    width = ref.current.clientWidth; // or window.innerWidth;
    height = ref.current.clientHeight; // = window.innerHeight for full screen

    // var windowHalfX = width / 2;
    // var windowHalfY = height / 2;
    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 100);

    let adaptiveZ = width < 500 ? 120 : width < 720 ? 100 : 80
    camera.position.set(0, 10, adaptiveZ);
    scene.add(camera);

    camera.far = 4000

    // camera.position.set(0, 3, 2);

    // camera.rotation.set(0, 1.5, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    ref.current.appendChild(renderer.domElement);

    // add light

    scene.fog = new THREE.Fog(0xa0a0a0, 1, 1000);
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x222222, 1);
    hemiLight.position.set(0, 0, -5);

    const hemiLight2 = new THREE.HemisphereLight(0xfc9c00, 0x222222, 0.5);
    hemiLight2.position.set(0, 5, 0);

    // camera.add(hemiLight);
    // camera.add(hemiLight2);

    // scene.add(hemiLight);
    // scene.add(hemiLight2);

    // const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
    // scene.add(hemiLightHelper);

    //const hemiLight3 = new THREE.HemisphereLight(0xffeeb1, 0x1c1b19, 1);
    // scene.add(hemiLight3);

    // const amblight = new THREE.AmbientLight(0x080820);
    const amblight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(amblight)

    //Rect reflection light
    RectAreaLightUniformsLib.init()

    const rectLight = new THREE.RectAreaLight(0xffffff, 15, 20, 30)
    rectLight.position.set(35,40,40)
    rectLight.lookAt(0,0,0)
    // scene.add(rectLight)

    //Rim light right
    const dirLight = new THREE.DirectionalLight(0x83d8fc, 1);
    dirLight.position.set(0, -50, -100);
    dirLight.castShadow = true;
    dirLight.shadow.camera.right = 100;
    dirLight.shadow.camera.left = -100;
    dirLight.shadow.camera.top = 100;
    dirLight.shadow.camera.bottom = -100;
    // dirLight.lookAt = new Vector3();
    // scene.add(dirLight);

     //Rim light left
    const dirLight4 = new THREE.DirectionalLight(0x83d8fc, 1);
    dirLight4.position.set(-10, 0, -50);
    dirLight4.castShadow = true;
    dirLight4.shadow.camera.right = 100;
    dirLight4.shadow.camera.left = -100;
    dirLight4.shadow.camera.top = 100;
    dirLight4.shadow.camera.bottom = -100;
    // dirLight4.lookAt = new Vector3();
    // scene.add(dirLight4);



    //Right angle dir light
    const dirLight2 = new THREE.DirectionalLight(0x99e1f7, 1.2);
    dirLight2.position.set(30, 50, 20);
    dirLight2.castShadow = true;
    dirLight2.shadow.camera.right = 100;
    dirLight2.shadow.camera.left = -100;
    dirLight2.shadow.camera.top = 100;
    dirLight2.shadow.camera.bottom = -100;
    scene.add(dirLight2);


    //Left angle dir light
    const dirLight3 = new THREE.DirectionalLight(0x5fcbfa, 0.4);
    dirLight3.position.set(-45, 25, 30);
    dirLight3.castShadow = true;
    dirLight3.shadow.camera.right = 100;
    dirLight3.shadow.camera.left = -100;
    dirLight3.shadow.camera.top = 100;
    dirLight3.shadow.camera.bottom = -100;
    // scene.add(dirLight3);

    const pointLight = new THREE.PointLight(0x5fcbfa, 1, 100, 2);
    pointLight.position.set(0, 0, 50);
    // scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0x5fcbfa, 1, 100, 2);
    pointLight2.position.set(0, 10, -20);
    // scene.add(pointLight2)

    const dirLightTarget = new THREE.Object3D();
    dirLightTarget.position.set(0, 0, 0);
    scene.add(dirLightTarget);

    dirLight.target = dirLightTarget;
    dirLight2.target = dirLightTarget;
    dirLight3.target = dirLightTarget;
    dirLight4.target = dirLightTarget;
    // const pointLight = new THREE.PointLight(0xffffff, 0.8);
    // pointLight.position.y = 5;
    // camera.add(pointLight);

    // add to show light helper
    // const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
    // scene.add(dirLightHelper);

    // load incubator_blue
    const gLoader = new GLTFLoader(manager);

    const scalingFactor = 2;
    const spacing = 6;
    const zPos = 28;
    const restPosition = (scalingFactor - 1) * 7;
    const maxHeight = 3;  //prev 2.5

    const transforms = {
      position: {
        blue: new THREE.Vector3(-spacing * 2, restPosition, zPos - spacing * 1),
        purple: new THREE.Vector3(-spacing, restPosition, zPos - spacing * 0.5),
        red: new THREE.Vector3(0, restPosition, zPos),
        yellow: new THREE.Vector3(spacing, restPosition, zPos - spacing * 0.5),
        green: new THREE.Vector3(spacing * 2, restPosition, zPos - spacing * 1),
      },
      rotation: {
        blue: new THREE.Vector3(120, -45, 90),
        purple: new THREE.Vector3(-45, 30, 0),
        red: new THREE.Vector3(15, 0, 0),
        yellow: new THREE.Vector3(-45, -30, 0),
        green: new THREE.Vector3(-45, -30, 0),
      },
    };
    const podiumYPos = -3;

    var lerpFactor = 0;

    //#region FBX Loader old code
    // loader.load(incubator_blue, function (object) {
    //   incubatorBlue = object;
    //   console.log(incubatorBlue);

    //   const texture = textureLoader.load(blue_texture);

    //   incubatorBlue.traverse(function (child) {
    //     if (child.isMesh) {
    //       child.castShadow = true;
    //       child.receiveShadow = true;
    //       console.log(child);
    //       // const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    //       // material.color.setHSL(Math.random(), 1.0, 0.3);
    //       // child.material = material;
    //       child.material.map = texture;
    //       child.material.needsUpdate = true;
    //     }
    //   });
    //   // incubatorBlue.position.y = 0;

    //   incubatorBlue.rotation.x = THREE.Math.degToRad(-45)

    //   scene.add(incubatorBlue);
    // });

    //#endregion

    function setModelTransforms(model, pos, rot) {
      model.position.set(
        pos.x * scalingFactor,
        pos.y,
        20 - (20 - pos.z) * scalingFactor
      );
      model.scale.set(scalingFactor, scalingFactor, scalingFactor);
      if (rot) {
        model.rotation.x = THREE.Math.degToRad(rot.x);
        model.rotation.y = THREE.Math.degToRad(rot.y);
        model.rotation.z = THREE.Math.degToRad(rot.z);
      }
    }

    //Adding raytrace BBoxes
    const incubatorBboxMat = new THREE.MeshBasicMaterial({color:0xffffff, wireframe: true, visible: false})
    
    const incubatorRedBbox = new THREE.Mesh(new THREE.BoxGeometry(10,18,10), incubatorBboxMat)
    scene.add(incubatorRedBbox)
        
    const incubatorPurpleBbox = new THREE.Mesh(new THREE.BoxGeometry(10,18,10), incubatorBboxMat)
    scene.add(incubatorPurpleBbox)
        
    const incubatorBlueBbox = new THREE.Mesh(new THREE.BoxGeometry(10,18,10), incubatorBboxMat)
    scene.add(incubatorBlueBbox)
        
    const incubatorYellowBbox = new THREE.Mesh(new THREE.BoxGeometry(10,18,10), incubatorBboxMat)
    scene.add(incubatorYellowBbox)
        
    const incubatorGreenBbox = new THREE.Mesh(new THREE.BoxGeometry(10,18,10), incubatorBboxMat)
    scene.add(incubatorGreenBbox)


    const incubatorBboxes = [
      incubatorRedBbox,
      incubatorPurpleBbox,
      incubatorBlueBbox,
      incubatorYellowBbox,
      incubatorGreenBbox
    ]
    //#region All Incubator Models Loading
    //Red Sphere
    const redObjects = [];
    gLoader.load(i_red, (object) => {
      incubatorRed = object.scene;

      currentIncubator = object.scene;
      prevIncubator = object.scene;

      // console.log(incubatorRed);

      //Red base color
      // incubatorRed.children[0].children[0].newName = 'red base'
      incubatorRed.children[0].children[0].material.color = new THREE.Color(0xff3863)
      incubatorRed.children[0].children[0].material.roughness = 0.8
      // console.log(incubatorRed.children[0].children[0].material);
      
      //Blue glass color
      // incubatorRed.children[0].children[1].newName = 'blue glass'
      incubatorRed.children[0].children[1].material.color = new THREE.Color(0x1cceff)
      incubatorRed.children[0].children[1].material.roughness = 0.1
      // incubatorRed.children[0].children[1].material.format = THREE.RGBAFormat
      // incubatorRed.children[0].children[1].material.transparent = true
      // incubatorRed.children[0].children[1].material.opacity = 1
      // incubatorRed.children[0].children[1].material.needUpdate = true
      // console.log(incubatorRed.children[0].children[1].material);
      
      
      // console.log(incubatorRed);
      incubatorRed.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.name = "RedIncubator";
          redObjects.push(child);

          if (child.material.roughness) {
            // child.material.roughness = 0.25
          }
        }
      });

      setModelTransforms(
        incubatorRed,
        transforms.position.red,
        transforms.rotation.red
      );

      incubatorRedBbox.position.copy(incubatorRed.position)
      // console.log(incubatorRedBbox.position.y)
      incubatorRedBbox.position.y = 6
      incubatorRedBbox.incubator = incubatorRed

      selectedObjects.push(incubatorRed)
      scene.add(incubatorRed);
    });

    //Purple Sphere
    const purpleObjects = [];
    gLoader.load(i_purple, (object) => {
      incubatorPurple = object.scene;

      incubatorPurple.children[0].children[1].material.roughness = 0.1

      incubatorPurple.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          purpleObjects.push(child);
        }
      });

      setModelTransforms(
        incubatorPurple,
        transforms.position.purple,
        transforms.rotation.purple
      );

      incubatorPurpleBbox.position.copy(incubatorPurple.position)
      // console.log(incubatorPurpleBbox.position.y)
      // console.log(incubatorPurpleBbox.position.x)
      incubatorPurpleBbox.position.y = 6
      incubatorPurpleBbox.position.x = -11

      selectedObjects.push(incubatorPurple)
      scene.add(incubatorPurple);
    });

    //Blue  Sphere
    const blueObjects = [];
    gLoader.load(i_blue, (object) => {
      incubatorBlue = object.scene;

      // console.log(incubatorBlue.children[0].children[0].material);
      incubatorBlue.children[0].children[0].material.roughness = 0.1
      incubatorBlue.children[0].children[0].material.transparent = false

      incubatorBlue.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          blueObjects.push(child);
        }
      });

      setModelTransforms(
        incubatorBlue,
        transforms.position.blue,
        transforms.rotation.blue
      );

      incubatorBlueBbox.position.copy(incubatorBlue.position)
      // console.log(incubatorBlueBbox.position.y)
      incubatorBlueBbox.position.y = 6

      selectedObjects.push(incubatorBlue)
      scene.add(incubatorBlue);
    });

    //Yellow Sphere
    const yellowObjects = [];
    gLoader.load(i_yellow, (object) => {
      incubatorYellow = object.scene;

      // console.log(incubatorYellow);

      incubatorYellow.children[0].children[1].material.roughness = 0.1

      incubatorYellow.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          yellowObjects.push(child);
        }
      });

      setModelTransforms(
        incubatorYellow,
        transforms.position.yellow,
        transforms.rotation.yellow
      );

      incubatorYellowBbox.position.copy(incubatorYellow.position)
      // console.log(incubatorYellowBbox.position.y)
      incubatorYellowBbox.position.y = 6
      incubatorYellowBbox.position.x = 11

      selectedObjects.push(incubatorYellow)
      scene.add(incubatorYellow);
    });

    //Green Sphere
    const greenObjects = [];
    gLoader.load(i_green, (object) => {
      incubatorGreen = object.scene;

      // console.log(incubatorGreen);

      incubatorGreen.children[0].children[1].material.roughness = 0.1
      incubatorGreen.children[0].children[1].material.color = new THREE.Color(0x26a8ff)

      incubatorGreen.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          greenObjects.push(child);
        }
      });

      setModelTransforms(
        incubatorGreen,
        transforms.position.green,
        transforms.rotation.green
      );

      incubatorGreenBbox.position.copy(incubatorGreen.position)
      // console.log(incubatorGreenBbox.position.y)
      incubatorGreenBbox.position.y = 6

      selectedObjects.push(incubatorGreen)
      scene.add(incubatorGreen);
    });
    //#endregion

    //#region Setting podiums
    //Podium for red
    gLoader.load(podium, (object) => {
      var model = object.scene;

      // console.log(model);
      // console.log(model.children[3].children[1].material);

      model.children[0].material.metalness = 0.1
      model.children[3].children[1].material.metalness = 0.1

      model.children[0].material.color = new THREE.Color(0x031930)
      console.log(model.children[3].children[1].material.color.getHexString());

      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // child.name = "RedIncubator";
          redObjects.push(child);
        }
      });

      setModelTransforms(model, transforms.position.red);
      model.position.y = podiumYPos;

      selectedObjects.push(model.children[0])
      selectedObjects.push(model.children[1])
      selectedObjects.push(model.children[2])
      selectedObjects.push(model.children[3])
      
      scene.add(model);
    });

    //Purple
    gLoader.load(podium, (object) => {
      var model = object.scene;
      model.children[0].material.metalness = 0.1
      model.children[3].children[1].material.metalness = 0.1

      model.children[0].material.color = new THREE.Color(0x031930)

      model.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          purpleObjects.push(child);
        }
      });

      setModelTransforms(model, transforms.position.purple);
      model.position.y = podiumYPos;

      selectedObjects.push(model.children[0])
      selectedObjects.push(model.children[1])
      selectedObjects.push(model.children[2])
      selectedObjects.push(model.children[3])
      
      scene.add(model);
    });

    //Blue
    gLoader.load(podium, (object) => {
      var model = object.scene;
      model.children[0].material.metalness = 0.1
      model.children[3].children[1].material.metalness = 0.1

      model.children[0].material.color = new THREE.Color(0x031930)

      model.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          blueObjects.push(child);
        }
      });

      setModelTransforms(model, transforms.position.blue);
      model.position.y = podiumYPos;
      
      selectedObjects.push(model.children[0])
      selectedObjects.push(model.children[1])
      selectedObjects.push(model.children[2])
      selectedObjects.push(model.children[3])
      
      scene.add(model);
    });

    //Yellow
    gLoader.load(podium, (object) => {
      var model = object.scene;
      model.children[0].material.metalness = 0.1
      model.children[3].children[1].material.metalness = 0.1

      model.children[0].material.color = new THREE.Color(0x031930)

      model.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          yellowObjects.push(child);
        }
      });

      setModelTransforms(model, transforms.position.yellow);
      model.position.y = podiumYPos;
      
      selectedObjects.push(model.children[0])
      selectedObjects.push(model.children[1])
      selectedObjects.push(model.children[2])
      selectedObjects.push(model.children[3])
      
      scene.add(model);
    });

    //Green
    gLoader.load(podium, (object) => {
      var model = object.scene;
      model.children[0].material.metalness = 0.1
      model.children[3].children[1].material.metalness = 0.1

      model.children[0].material.color = new THREE.Color(0x031930)

      model.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          greenObjects.push(child);
        }
      });

      setModelTransforms(model, transforms.position.green);
      model.position.y = podiumYPos;
      
      selectedObjects.push(model.children[0])
      selectedObjects.push(model.children[1])
      selectedObjects.push(model.children[2])
      selectedObjects.push(model.children[3])
      
      scene.add(model);
    });
    //#endregion

    const composer = new EffectComposer(renderer);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    
    // const brightnesspass = new ShaderPass(BrightnessContrastShader)
    // brightnesspass.material.uniforms.contrast.value = 0
    // brightnesspass.material.uniforms.brightness.value = 0
    // composer.addPass(brightnesspass)
    
    // const saturationpass = new ShaderPass(HueSaturationShader)
    // saturationpass.material.uniforms.saturation.value = -0.25
    // effectComposer.addPass(saturationpass)

    const outlinePass = new OutlinePass(
      new THREE.Vector2(width, height),
      scene,
      camera
    );

    const params = {
      edgeStrength: 15.0,  //3
      edgeGlow: 0.0,  //0
      edgeThickness: 1.0, //1
      pulsePeriod: 0,
      rotate: false,
      usePatternTexture: false
    };

    outlinePass.edgeStrength = params.edgeStrength;
    outlinePass.edgeGlow = params.edgeGlow;
    outlinePass.edgeThickness = params.edgeThickness;
    outlinePass.visibleEdgeColor.set(0x000000);
    outlinePass.hiddenEdgeColor.set(0x000000);
    outlinePass.selectedObjects = selectedObjects;
    composer.addPass(outlinePass);

    manager.onLoad = () => {
      // console.log("loaded");

      window.addEventListener("resize", handleResize);
      // renderer.domElement.addEventListener("mouseenter", () => {
      //   isHovering = true;
      // });
      // renderer.domElement.addEventListener("mouseleave", () => {
      //   isHovering = false;
      // });
      // renderer.domElement.addEventListener("mousemove", onPointerMove);
      animate();
    };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseMove(event) {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components

      var rect = ref.current.getBoundingClientRect();
      
      // console.log(rect.top);

      let offsetY = event.clientY - rect.top
      // console.log(offsetY);
      // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.x = (event.clientX / rect.width) * 2 - 1;
      // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.y = -(offsetY / rect.height) * 2 + 1;
    }
    window.addEventListener("mousemove", onMouseMove, false);

    // controls = new TrackballControls(camera, renderer.domElement);

    // controls.rotateSpeed = 2;
    // controls.noPan = true;
    // controls.noZoom = true;
    // controls.update();
    function clamp(value,min,max){
      return Math.min(Math.max(value, min), max);
    }

    function clamp01(value){
      return clamp(value, 0, 1);
    }

    const doc = document.getElementById('incubator-models');

    function isScrolledIntoView(el) {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;
      var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    }

    var blueLerpFactor = 0, purpleLerpFactor = 0, redLerpFactor = 0, yellowLerpFactor = 0, greenLerpFactor = 0;

    function getWorldToScreen(object){
      let pos = new THREE.Vector3();
      pos = pos.setFromMatrixPosition(object.matrixWorld);
      pos.project(camera);

      let widthHalf = width / 2;
      let heightHalf = height / 2;

      pos.x = (pos.x * widthHalf) + widthHalf;
      pos.y = - (pos.y * heightHalf) + heightHalf;
      pos.z = 0;

      return pos
    }

    

    const clock = new THREE.Clock();
    const TimeScale = 1.3;
    var prevTime, deltaTime, animationId;
    // animate
    const animate = function () {
      animationId = requestAnimationFrame(animate);

      const blueTextPos = getWorldToScreen(incubatorBlue)
      const purpleTextPos = getWorldToScreen(incubatorPurple)
      const redTextPos = getWorldToScreen(incubatorRed)
      const yellowTextPos = getWorldToScreen(incubatorYellow)
      const greenTextPos = getWorldToScreen(incubatorGreen)

      const elapsedTime = clock.getElapsedTime();
      deltaTime = elapsedTime - prevTime;
      deltaTime *= TimeScale;
      prevTime = elapsedTime;

      if(isScrolledIntoView(doc) === false){
        return;
      }
  
      // controls.update();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(incubatorBboxes);
      if (intersects.length > 0) {
        var closestIntersect = intersects[0].object;
        // if (redObjects.includes(closestIntersect)) {
        //   currentIncubator = incubatorRed;
        // } else if (purpleObjects.includes(closestIntersect)) {
        //   currentIncubator = incubatorPurple;
        // } else if (blueObjects.includes(closestIntersect)) {
        //   currentIncubator = incubatorBlue;
        // } else if (yellowObjects.includes(closestIntersect)) {
        //   currentIncubator = incubatorYellow;
        // } else if (greenObjects.includes(closestIntersect)) {
        //   currentIncubator = incubatorGreen;
        // } else {
        //   currentIncubator = null;
        // }
        if(closestIntersect === incubatorRedBbox){ 
          currentIncubator = incubatorRed;
          blueTextRef.current.style.opacity = incubatorTextStartOpacity
          purpleTextRef.current.style.opacity = incubatorTextStartOpacity
          redTextRef.current.style.opacity = "100%"
          yellowTextRef.current.style.opacity = incubatorTextStartOpacity
          greenTextRef.current.style.opacity = incubatorTextStartOpacity
          console.log('red');
        }
        else if(closestIntersect === incubatorPurpleBbox){ 
          currentIncubator = incubatorPurple;
          blueTextRef.current.style.opacity = incubatorTextStartOpacity
          purpleTextRef.current.style.opacity = "100%"
          redTextRef.current.style.opacity = incubatorTextStartOpacity
          yellowTextRef.current.style.opacity = incubatorTextStartOpacity
          greenTextRef.current.style.opacity = incubatorTextStartOpacity
          console.log('purple');
        }
        else if(closestIntersect === incubatorBlueBbox){ 
          currentIncubator = incubatorBlue;
          blueTextRef.current.style.opacity = "100%"
          purpleTextRef.current.style.opacity = incubatorTextStartOpacity
          redTextRef.current.style.opacity = incubatorTextStartOpacity
          yellowTextRef.current.style.opacity = incubatorTextStartOpacity
          greenTextRef.current.style.opacity = incubatorTextStartOpacity
          console.log('blue');
        }
        else if(closestIntersect === incubatorYellowBbox){ 
          currentIncubator = incubatorYellow;
          blueTextRef.current.style.opacity = incubatorTextStartOpacity
          purpleTextRef.current.style.opacity = incubatorTextStartOpacity
          redTextRef.current.style.opacity = incubatorTextStartOpacity
          yellowTextRef.current.style.opacity = "100%"
          greenTextRef.current.style.opacity = incubatorTextStartOpacity
          console.log('yellow');
        }
        else if(closestIntersect === incubatorGreenBbox){ 
          currentIncubator = incubatorGreen;
          blueTextRef.current.style.opacity = incubatorTextStartOpacity
          purpleTextRef.current.style.opacity = incubatorTextStartOpacity
          redTextRef.current.style.opacity = incubatorTextStartOpacity
          yellowTextRef.current.style.opacity = incubatorTextStartOpacity
          greenTextRef.current.style.opacity = "100%"
          console.log('green');
        }
        else{ 
          currentIncubator = null 
          blueTextRef.current.style.opacity = incubatorTextStartOpacity
          purpleTextRef.current.style.opacity = incubatorTextStartOpacity
          redTextRef.current.style.opacity = incubatorTextStartOpacity
          yellowTextRef.current.style.opacity = incubatorTextStartOpacity
          greenTextRef.current.style.opacity = incubatorTextStartOpacity
        }

        //console.log("factored = ", (currentIncubator.position.y - restPosition));

        if(currentIncubator){
          if(currentIncubator.id !== prevIncubator.id){

            blueLerpFactor = (incubatorBlue.position.y - restPosition) / maxHeight;
            blueLerpFactor = clamp01(blueLerpFactor);

            purpleLerpFactor = (incubatorPurple.position.y - restPosition) / maxHeight;
            purpleLerpFactor = clamp01(purpleLerpFactor);

            redLerpFactor = (incubatorRed.position.y - restPosition) / maxHeight;
            redLerpFactor = clamp01(redLerpFactor);

            yellowLerpFactor = (incubatorYellow.position.y - restPosition) / maxHeight;
            yellowLerpFactor = clamp01(yellowLerpFactor);

            greenLerpFactor = (incubatorGreen.position.y - restPosition) / maxHeight;
            greenLerpFactor = clamp01(greenLerpFactor);

            setSeamlessLerp();

            lerpFactor = (currentIncubator.position.y - restPosition) / maxHeight;
            isMovingUp = true;
            prevIncubator = currentIncubator;
          }
        }

        // if(closestIntersect === incubatorRedBbox && currentIncubator !== incubatorRed){
        //   currentIncubator = incubatorRed;
        // }
        // else if(closestIntersect === incubatorPurpleBbox && currentIncubator !== incubatorPurple){
        //   currentIncubator = incubatorPurple;
        // }
        // else if(closestIntersect === incubatorBlueBbox && currentIncubator !== incubatorBlue){
        //   currentIncubator = incubatorBlue;
        // }
        // else if(closestIntersect === incubatorYellowBbox && currentIncubator !== incubatorYellow){
        //   currentIncubator = incubatorYellow;
        // }
        // else if(closestIntersect === incubatorGreenBbox && currentIncubator !== incubatorGreen){
        //   currentIncubator = incubatorGreen;
        // }
        // else { currentIncubator = null; }

      } else {
        currentIncubator = null;
        // blueTextRef.current.style.opacity = incubatorTextStartOpacity
        // purpleTextRef.current.style.opacity = incubatorTextStartOpacity
        // redTextRef.current.style.opacity = incubatorTextStartOpacity
        // yellowTextRef.current.style.opacity = incubatorTextStartOpacity
        // greenTextRef.current.style.opacity = incubatorTextStartOpacity

        if(blueTextRef.current) blueTextRef.current.style.opacity = incubatorTextStartOpacity
        if(purpleTextRef.current) purpleTextRef.current.style.opacity = incubatorTextStartOpacity
        if(redTextRef.current) redTextRef.current.style.opacity = incubatorTextStartOpacity
        if(yellowTextRef.current) yellowTextRef.current.style.opacity = incubatorTextStartOpacity
        if(greenTextRef.current) greenTextRef.current.style.opacity = incubatorTextStartOpacity
      }

      // isHovering ? floating() : backToNormal();
      // if (isHovering) {
      floating();
      // }

      //backToNormal();
      goToRestPosition();

      // target.x += (mouseX - target.x) * 0.02;
      // target.y += (-mouseY - target.y) * 0.02;
      // target.z = camera.position.z; // assuming the camera is located at ( 0, 0, z );

      // incubatorBlue.lookAt(target);

      if(blueTextRef.current){
        blueTextRef.current.style.top = blueTextPos.y + "px"
        blueTextRef.current.style.left = blueTextPos.x + "px"
      }
      if(purpleTextRef.current){
        purpleTextRef.current.style.top = purpleTextPos.y + "px"
        purpleTextRef.current.style.left = purpleTextPos.x + "px"
      }
      if(redTextRef.current){
        redTextRef.current.style.top = redTextPos.y + "px"
        redTextRef.current.style.left = redTextPos.x + "px"
      }
      if(yellowTextRef.current){
        yellowTextRef.current.style.top = yellowTextPos.y + "px"
        yellowTextRef.current.style.left = yellowTextPos.x + "px"
      }
      if(greenTextRef.current){
        greenTextRef.current.style.top = greenTextPos.y + "px"
        greenTextRef.current.style.left = greenTextPos.x + "px"
      }
      render();
    };

    function setSeamlessLerp(){
      if(prevIncubator.id === incubatorBlue.id){
        if(isMovingUp)
          blueLerpFactor = easeOutExpo(lerpFactor);
        else
          blueLerpFactor = easeInBounce(lerpFactor);
      }
      else if(prevIncubator.id === incubatorPurple.id){
        if(isMovingUp)
          purpleLerpFactor = easeOutExpo(lerpFactor);
        else
          purpleLerpFactor = easeInBounce(lerpFactor);
      } 
      else if(prevIncubator.id === incubatorRed.id){
        if(isMovingUp)
          redLerpFactor = easeOutExpo(lerpFactor);
        else
          redLerpFactor = easeInBounce(lerpFactor);
      }
      else if(prevIncubator.id === incubatorYellow.id){
        if(isMovingUp)
          yellowLerpFactor = easeOutExpo(lerpFactor);
        else
          yellowLerpFactor = easeInBounce(lerpFactor);
      }
      else if(prevIncubator.id === incubatorGreen.id){
        if(isMovingUp)
          greenLerpFactor = easeOutExpo(lerpFactor);
        else
          greenLerpFactor = easeInBounce(lerpFactor);
      }
    }

    const render = () => {
      composer.render(scene, camera);
      // renderer.render(scene, camera);
    };

    const 
    handleResize = () => {
      width = ref.current.clientWidth;
      height = ref.current.clientHeight;
      
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


      composer.setSize(width, height);
      composer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      
      camera.aspect = width / height;
      console.log("new width", width);

      let adaptiveY = width < 350 ? 42 : width < 500 ? 40 : width < 720 ? 35 : width < 1100 ? 24.5 :  width < 1200 ? 18 : 10.75
      let adaptiveZ = width < 500 ? 170 : width < 720 ? 150 : width < 1100 ? 120 :  width < 1200 ? 100 : 80

      camera.position.z = adaptiveZ;
      camera.position.y = adaptiveY;



      // let adaptiveFOVCalc = width < 500 ? 15 : width < 720 ? 20 : width < 1000 ? 25 : 30;
      // camera.fov = Math.atan(height / adaptiveFOVCalc / camera.position.z) * 2 * THREE.Math.RAD2DEG;
      
      camera.updateProjectionMatrix();
      render();
    };

    handleResize()

    // const onPointerMove = (event) => {
    //   mouseX = event.clientX - windowHalfX;
    //   mouseY = event.clientY - windowHalfY;
    // };
    
    const floating = () => {
      if (currentIncubator == null) return;

      // if (currentIncubator.position.y >= restPosition + maxHeight) {
      //   isMovingUp = false;
      //   currentIncubator.position.y = restPosition + maxHeight;
      // }
      // if (currentIncubator.position.y < restPosition) {
      //   isMovingUp = true;
      //   currentIncubator.position.y = restPosition;
      // }
      // isMovingUp
      //   ? (currentIncubator.position.y += moveSpeed)
      //   : (currentIncubator.position.y -= moveSpeed);
      
      if(isMovingUp){
        lerpFactor += deltaTime ;
        const lr = clamp01(lerpFactor);
        currentIncubator.position.y = THREE.MathUtils.lerp(restPosition , restPosition + maxHeight, easeOutExpo(lr));
      }
      else{
        lerpFactor -= deltaTime ;
        const lr = clamp01(lerpFactor);
        currentIncubator.position.y = THREE.MathUtils.lerp(restPosition, restPosition + maxHeight, easeInBounce(lr));
      }

      if(isMovingUp && lerpFactor >= 0.6){
        isMovingUp = false;
        lerpFactor = 1;
        currentIncubator.position.y = restPosition + maxHeight;
      }
      else if(lerpFactor <= -0.2){
        isMovingUp = true;
        currentIncubator.position.y = restPosition;
      }
      // isMovingUp
      //   ? (currentIncubator.position.y = THREE.Math.lerp(currentIncubator.position.y, currentIncubator.position.y + moveSpeed, lerpSpeed))
      //   : (currentIncubator.position.y = THREE.Math.lerp(currentIncubator.position.y, currentIncubator.position.y - moveSpeed, lerpSpeed));
    };

    const goToRestPosition = () => {
      if(incubatorBlue !== currentIncubator && blueLerpFactor > 0){
        blueLerpFactor -= deltaTime;
        blueLerpFactor = clamp01(blueLerpFactor);
        incubatorBlue.position.y = THREE.MathUtils.lerp(restPosition, restPosition + maxHeight, easeInBounce(blueLerpFactor));
      }

      if(incubatorPurple !== currentIncubator && purpleLerpFactor > 0){
        purpleLerpFactor -= deltaTime;
        purpleLerpFactor = clamp01(purpleLerpFactor);
        incubatorPurple.position.y = THREE.MathUtils.lerp(restPosition, restPosition + maxHeight, easeInBounce(purpleLerpFactor));
      }

      if(incubatorRed !== currentIncubator && redLerpFactor > 0){
        redLerpFactor -= deltaTime;
        redLerpFactor = clamp01(redLerpFactor);
        incubatorRed.position.y = THREE.MathUtils.lerp(restPosition, restPosition + maxHeight, easeInBounce(redLerpFactor));
      }

      if(incubatorYellow !== currentIncubator && yellowLerpFactor > 0){
        yellowLerpFactor -= deltaTime;
        yellowLerpFactor = clamp01(yellowLerpFactor);
        incubatorYellow.position.y = THREE.MathUtils.lerp(restPosition, restPosition + maxHeight, easeInBounce(yellowLerpFactor));
      }

      if(incubatorGreen !== currentIncubator && greenLerpFactor > 0){
        greenLerpFactor -= deltaTime;
        greenLerpFactor = clamp01(greenLerpFactor);
        incubatorGreen.position.y = THREE.MathUtils.lerp(restPosition, restPosition + maxHeight, easeInBounce(greenLerpFactor));
      }
    };

    function easeInBounce(x) {
      return 1 - easeOutBounce(1 - x);
    }
  
    function easeOutBounce(x) {
      const n1 = 7.5625;
      const d1 = 2.75;
      
      if (x < 1 / d1) {
          return n1 * x * x;
      } else if (x < 2 / d1) {
          return n1 * (x -= 1.5 / d1) * x + 0.75;
      } else if (x < 2.5 / d1) {
          return n1 * (x -= 2.25 / d1) * x + 0.9375;
      } else {
          return n1 * (x -= 2.625 / d1) * x + 0.984375;
      }
    }
    
    function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    return () => {
      // Callback to cleanup three js, cancel animationFrame, etc
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove)
      current.removeChild(renderer.domElement);
      cancelAnimationFrame(animationId)
    };
  }, []);

  // function easeInExpo(x) {
  //   return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  //   }

  // function easeInCirc(x) {
  //   return 1 - Math.sqrt(1 - Math.pow(x, 2));
  // }

  // function easeOutCirc(x) {
  //   return Math.sqrt(1 - Math.pow(x - 1, 2));
  // }

  
  const incubatorTextStyle = {
    // position:'absolute',
    // transform: 'translate(-50%,-50%)',
    // fontFamily: 'LilitaOne',
    // fontSize: '2em',
    // color:"white",
    // transition:"opacity 0.4s",
    opacity:incubatorTextStartOpacity,
    // display:'flex', 
    // flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center',
    // width:'clamp()',
    // pointerEvents:'none',
    // // filter:'drop-shadow(2.6px 2.5px 0px #000000) drop-shadow(2px 0 0 #000000) drop-shadow(-2px 0 0 #000000) drop-shadow(0 2px 0 #000000) drop-shadow(0 -2px 0 #000000) drop-shadow(1px 1px #000000) drop-shadow(-1px -1px 0 #000000) drop-shadow(1px -1px 0 #000000) drop-shadow(-1px 1px 0 #000000)'
    // filter:'drop-shadow(0.1px 0.4px 0px #000000) drop-shadow(-1px 0 0 #000000) drop-shadow(0 1px 0 #000000) drop-shadow(0 -1px 0 #000000) drop-shadow(0.5px 0.5px #000000) drop-shadow(-1px -1px 0 #000000) drop-shadow(1px -1px 0 #000000) drop-shadow(-1px 1px 0 #000000)'
  }


  return <div className="Incubator" ref={ref}>
    {/* blue text */}
    <div className="incubatorText blueText" style={incubatorTextStyle} ref={blueTextRef}>
      <svg /* width="100" */ /* height="72.103" */ xmlns="http://www.w3.org/2000/svg" id="svg-element" viewBox="0 0 255.232 94.435" fill="inherit" preserveAspectRatio="xMidYMin meet" style={{paddingBottom:'10px'}}>
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="white" style={{stroke:'#000',strokeWidth:'0',fill:'white'}}>
          <path d="M27.49 58.43Q27.79 70.38 27.92 83.13 27.93 84.8 18.03 83.47C17.25 83.37 16.49 83.25 15.72 83.14 14.54 82.97 13.35 82.77 12.16 82.55Q5.15 81.33 3.74 80.24C3.53 80.11 3.4 79.92 3.39 79.72Q1.72 48.05 2.1 19.82C2.15 19.39 2.28 18.95 2.51 18.52Q3.32 17.03 5.53 16.18C6.09 15.96 6.68 15.79 7.27 15.67Q19.6 13.19 31.92 10.7C36.08 9.89 40.23 9.32 44.32 9.2Q63.92 9.1 65.95 26.02C66.09 27.21 66.16 28.41 66.18 29.6 66.23 32.48 65.89 35.36 65.16 38.17 64.69 39.97 64.03 41.72 63.19 43.4Q60.12 49.43 54.41 52.9 62.72 65.61 70.89 79.41C70.65 80.07 70.29 80.67 69.86 81.21Q68.63 82.76 66.18 84.38C65.52 84.8 64.85 85.2 64.18 85.58Q57.68 89.14 53.11 89.15C52.56 89.16 52.01 89.11 51.46 89.04 50.44 88.89 49.43 88.61 48.44 88.22 46.62 87.47 45.03 86.17 43.98 84.55Q37.82 71.08 31.5 58.7 29.5 58.57 27.49 58.43 27.49 58.43 27.49 58.43M130.04 49.49Q130.15 59.88 130.27 70.22 132.53 70.18 134.79 70.13C135.83 70.11 136.81 70.55 137.46 71.34Q137.89 71.81 138.25 72.48C138.28 72.53 138.32 72.6 138.35 72.66 138.68 73.34 138.95 74.05 139.13 74.77Q139.68 76.87 139.73 79.78C139.77 82.38 139.25 84.96 138.2 87.36 138 87.83 137.78 88.29 137.55 88.75Q136.05 91.67 133.79 92.71C132.99 92.58 132.12 92.44 131.25 92.48 129.55 92.52 127.86 92.74 126.21 92.94 123.75 92.49 121.46 91.46 119.55 89.92Q117.52 88.43 116.44 86.24C113.85 89.48 110.29 91.83 106.27 92.99Q102.3 93.38 97.32 93.53C93.75 93.6 90.22 93.86 87.04 92.35 84.79 91.01 82.78 89.2 81.08 87.09Q74.65 79.53 74.69 70.33C74.63 67.31 75.13 64.35 76.18 61.57Q80.37 50.89 96.7 49.72C97.87 49.64 99.05 49.59 100.21 49.58Q103.84 49.53 107.47 49.49 107.46 48.84 107.46 48.17 107.44 45.79 106.87 44.58C106.74 44.28 106.54 44 106.3 43.78 106.06 43.59 105.79 43.44 105.51 43.35Q104.23 42.87 101.66 42.87C101.47 42.87 101.28 42.87 101.08 42.87 99.98 42.9 98.86 42.98 97.75 43.12Q94.39 43.52 89.81 44.55C88.85 44.76 87.87 44.98 86.91 45.22Q83.18 38.9 83.13 34.85C83.12 34.27 83.15 33.69 83.23 33.1Q83.55 30.85 84.84 29.79C84.98 29.68 85.13 29.57 85.3 29.47Q92.74 25.81 105.85 25.41 119 25.23 124.47 31.36C126.19 33.35 127.5 35.65 128.32 38.13Q129.98 42.93 130.04 49.49 130.04 49.49 130.04 49.49M230.23 65.99Q225.73 65.97 221.21 66.04C221.24 66.56 221.33 67.07 221.47 67.58Q221.7 68.38 222.13 68.99C222.5 69.52 223.03 69.97 223.67 70.29Q225.93 71.37 230.13 71.2C236.18 71.1 242.03 70.27 247.14 69.07 247.15 69.07 247.15 69.07 247.16 69.07Q247.33 69.09 248.44 70.27C248.44 70.27 248.45 70.28 248.45 70.28Q251.84 73.53 252.31 75.56C252.33 75.63 252.34 75.7 252.35 75.77 252.41 76.09 252.4 76.41 252.35 76.72Q252.24 77.25 251.88 77.64C251.54 78.04 250.98 78.39 250.28 78.64Q242.19 82.35 229.06 83.99C224.65 84.5 220.31 85.12 216.19 84.16 212.63 83.27 209.36 81.78 206.56 79.73 202.48 76.71 199.56 72.61 198.13 67.94Q196.82 63.9 196.55 59.06C196.55 58.96 196.54 58.85 196.54 58.75 196.36 55.47 196.63 52.2 197.31 49.01 198.3 44.26 200.61 39.91 204 36.43 208.71 31.55 215.62 29.04 223.12 29.37 223.65 29.38 224.18 29.4 224.7 29.43Q234.3 29.86 241.03 32.84C242.57 33.45 244.02 34.2 245.35 35.07Q252.49 41.07 252.77 50.75 253.74 68.19 232.13 66C231.5 66.01 230.86 66 230.22 65.99Q230.23 65.99 230.23 65.99M175.7 54.89Q176.26 72.3 176.89 89.96C176.83 90.12 176.66 90.27 176.47 90.3Q174.66 91.1 164.9 91.74C164.86 91.74 164.82 91.74 164.78 91.75 163.82 91.76 162.86 91.76 161.91 91.76Q153.12 91.77 152.59 91.19C152.56 91.16 152.54 91.13 152.54 91.11Q152.05 69.73 151.65 48.25 149.88 48.26 148.1 48.28 146.18 48.29 144.94 46.18C144.86 46.04 144.78 45.89 144.71 45.75 144.3 44.9 143.98 44.01 143.78 43.09Q143.51 41.84 143.43 40.39C143.4 40.06 143.4 39.73 143.4 39.4 143.37 37.79 143.46 36.17 143.65 34.57Q144.88 25.15 151.72 25.2C153.39 25.2 155.04 25.47 156.62 26 158.46 26.62 160.14 27.64 161.55 28.98 162.47 29.83 163.28 30.8 163.94 31.85 164.97 33.46 165.51 35.3 165.52 37.17 166.73 34.77 168.36 32.62 170.32 30.81 171.1 30.12 171.91 29.49 172.78 28.93 174.06 28.08 175.46 27.4 176.94 26.92 178.57 26.38 180.32 26.17 182.07 26.28 183.06 26.33 184.05 26.46 185.03 26.65Q188.32 27.32 189.93 28.92C190.43 29.39 190.82 29.96 191.09 30.58 191.18 30.81 191.25 31.04 191.31 31.29Q191.48 32.04 191.54 33.1C191.54 33.22 191.55 33.34 191.55 33.46 191.56 33.82 191.54 34.19 191.52 34.54Q191.37 36.32 190.69 39.45C190.64 39.68 190.59 39.91 190.54 40.14 190.37 40.88 190.19 41.63 189.99 42.37Q189.38 44.69 188.71 46.18C188.56 46.49 188.42 46.8 188.24 47.1Q187.02 49.27 186.76 49.27 186.5 49.27 184.33 48.36C183.82 48.13 183.31 47.95 182.79 47.8Q182 47.57 181.28 47.47C181.01 47.44 180.73 47.42 180.45 47.42 178.79 47.33 177.26 48.21 176.58 49.65Q175.7 51.32 175.69 54.22C175.69 54.45 175.69 54.66 175.7 54.89Q175.7 54.89 175.7 54.89M29.58 30.25Q28.19 30.4 26.79 30.55 26.78 38 26.96 45.33 27.29 45.33 27.62 45.33C29.2 45.32 30.76 45.18 32.28 44.92Q39.02 43.61 39.9 38.53C40.01 37.93 40.05 37.33 40.04 36.73 40.04 36.02 39.96 35.32 39.81 34.64Q39.29 32.38 37.58 31.24C36.88 30.8 36.08 30.48 35.2 30.31Q33.11 29.9 30 30.21C29.86 30.22 29.72 30.24 29.58 30.25Q29.58 30.25 29.58 30.25M107.58 73.12Q107.56 68.02 107.54 62.93 105.7 62.95 103.84 62.96C103.01 62.95 102.18 63.06 101.38 63.27Q98.55 64.04 97.79 66.84C97.59 67.61 97.5 68.39 97.51 69.18 97.51 69.76 97.56 70.34 97.67 70.91Q97.89 71.96 98.38 72.76C98.58 73.08 98.82 73.38 99.1 73.64 99.99 74.5 101.15 75.02 102.38 75.12 102.63 75.14 102.88 75.16 103.13 75.16Q105.59 75.13 107.58 73.12 107.58 73.12 107.58 73.12M220.22 51.02Q220.33 52.72 220.44 54.41 223.94 54.51 227.45 54.65 230.87 54.85 231.4 52.55C231.49 52.11 231.53 51.65 231.49 51.2Q231.25 47.51 227.88 46.57C227.22 46.4 226.54 46.3 225.87 46.27 225.06 46.24 224.28 46.32 223.53 46.52 222.87 46.71 222.26 47 221.73 47.38 220.98 47.93 220.48 48.7 220.31 49.56 220.22 50.04 220.18 50.52 220.22 51.02Q220.22 51.02 220.22 51.02" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>

      <svg /* width="100" */ /* height="72.103" */ xmlns="http://www.w3.org/2000/svg" id="svg-element" viewBox="0 0 175.901 72.103" fill="inherit" preserveAspectRatio="xMidYMin meet">
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="white" style={{stroke:'#000',strokeWidth:'0',fill:'white'}}>
          <path d="M58.47 3.43Q62.52 3.1 66.58 2.77 70.63 2.44 74.68 2.11 78.74 1.78 82.79 1.46 86.85 1.17 90.91 1.38 92.82 1.54 92.84 9.85C92.83 10.54 92.81 11.24 92.77 11.93Q92.71 13.09 92.57 14.38C92.52 14.9 92.45 15.44 92.4 15.97Q91.95 19.47 90.74 19.45 85.85 19.44 80.96 19.5 76.08 19.61 71.19 19.77 71.14 23.28 71.07 26.77 72.74 26.74 74.39 26.71C76.46 26.66 78.54 26.82 80.56 27.2Q84.35 27.97 87.17 29.8C88.37 30.58 89.46 31.51 90.4 32.58 91.49 33.84 92.42 35.21 93.17 36.66 93.92 38.11 94.49 39.65 94.87 41.24Q95.68 44.5 95.69 48.39C95.72 51.18 95.23 54 94.22 56.71 93.6 58.31 92.8 59.85 91.83 61.29 90.85 62.73 89.71 64.07 88.42 65.27 86.6 66.94 84.57 68.25 82.39 69.13 80.22 69.95 77.9 70.42 75.5 70.55 73.59 70.67 71.67 70.45 69.74 70.28Q64.04 69.75 59.88 68.82 55.72 67.7 53.11 65.99 52.32 64.73 52.35 62.21 52.37 60.1 52.96 56.57C53.05 56.08 53.13 55.6 53.23 55.12Q54.07 50.54 55.47 50.6C55.48 50.6 55.5 50.6 55.52 50.61Q55.64 50.67 55.94 50.9C55.98 50.93 56.02 50.96 56.07 50.99 57.17 51.46 58.28 51.9 59.41 52.32Q64.11 54.07 66.94 54.2C67.9 54.25 68.85 54.18 69.79 54 71.03 53.76 72.2 53.23 73.19 52.48Q75.66 50.56 75.67 47.45C75.68 46.38 75.53 45.32 75.21 44.3Q74.09 40.96 70.25 40.04C69.2 39.81 68.12 39.69 67.04 39.7Q62.74 39.72 58.42 39.73 57.58 39.88 56.74 39.22C56.63 39.13 56.52 39.03 56.42 38.93 55.92 38.44 55.6 37.84 55.5 37.19 55.45 36.93 55.42 36.67 55.43 36.41Q55.43 32.84 55.44 29.25 55.44 25.66 55.45 22.05 55.45 18.43 55.45 14.79 55.46 11.15 55.47 7.5C55.46 7.03 55.5 6.57 55.58 6.12Q56.05 3.71 58.3 3.44C58.35 3.44 58.41 3.43 58.47 3.43Q58.47 3.43 58.47 3.43M38.73 66.73Q34.68 66.37 30.63 66.01 26.58 65.65 22.54 65.29 18.49 64.93 14.44 64.57 10.39 64.21 6.33 63.84C5.28 63.74 4.29 63.22 3.61 62.46Q2.47 61.31 1.61 59.2C1.43 58.78 1.27 58.35 1.13 57.93 0.99 57.45 0.84 56.98 0.72 56.51Q0.31 55.03 0.15 54.02C0.12 53.8 0.1 53.59 0.08 53.38Q0 52.26 0.27 51.71C0.34 51.59 0.43 51.48 0.55 51.39 1.83 50.38 3.14 49.39 4.44 48.39 5.74 47.4 7.02 46.39 8.29 45.37Q10.17 43.84 11.8 42.42 13.44 40.98 14.83 39.64 17.61 36.92 19.45 34.62 23.11 29.84 23.08 27.09C23.08 26.64 23.02 26.21 22.93 25.77Q22.6 24.44 21.59 23.71C21.15 23.39 20.63 23.18 20.06 23.06Q19.39 22.9 18.57 22.88C18.04 22.86 17.52 22.88 17 22.94 15.08 23.13 13.2 23.61 11.43 24.33 11.23 24.41 11.04 24.49 10.85 24.58Q8.7 25.53 7.22 26.46C6.83 26.69 6.47 26.93 6.11 27.19Q4.28 25.8 3.01 24.23 1.62 22.4 0.67 20.09C0.47 19.62 0.3 19.13 0.17 18.64 0.03 18.16 -0.05 17.67 -0.1 17.18Q-0.23 15.82 0.12 14.54C0.25 13.98 0.51 13.47 0.9 13.03Q2.34 11.33 6.3 9.53C6.59 9.4 6.87 9.28 7.16 9.15Q10.51 7.78 14.09 6.92 17.67 6.06 21.46 5.7C24.36 5.46 27.26 5.4 30.11 5.69Q33.03 6.04 35.36 6.91 37.68 7.79 39.39 9.21 42.8 12.06 43.84 16.98C44.15 18.54 44.31 20.12 44.3 21.72Q44.31 25.65 42.81 29.65 42.06 31.63 40.93 33.62 39.81 35.58 38.31 37.54 36.82 39.48 35.19 41.27 33.58 43.03 31.83 44.64 30.09 46.24 28.23 47.68 26.37 49.11 24.39 50.38 26.9 50.43 29.4 50.46 31.91 50.5 34.42 50.54 36.93 50.57 39.44 50.6 41.95 50.63 44.47 50.66C44.57 51.78 44.67 52.9 44.74 54.03Q44.91 56.7 44.88 58.89C44.87 59.78 44.77 60.67 44.57 61.54Q44.18 63.21 43.31 64.5C43.27 64.56 43.23 64.63 43.19 64.69 42.85 65.17 42.43 65.59 41.94 65.94 41.05 66.58 39.9 66.86 38.72 66.73Q38.73 66.73 38.73 66.73M111.16 62.43Q114.14 58.44 117.11 54.53 120.06 50.7 123.02 46.96 125.97 43.3 128.92 39.73 131.88 36.26 134.83 32.86 137.79 29.56 140.75 26.32 143.71 23.16 146.67 20.07 149.64 17.04 152.62 14.06 155.6 11.12 158.59 8.19C158.8 8.05 159.04 7.95 159.29 7.86 159.66 7.74 160.07 7.71 160.49 7.77Q164.01 8.22 166.87 11.27C166.96 11.36 167.04 11.46 167.14 11.55Q168.06 12.54 168.25 13.18C168.28 13.29 168.29 13.4 168.3 13.51 168.3 13.65 168.28 13.78 168.25 13.92Q168.2 14.11 168.11 14.27C168.06 14.37 167.97 14.47 167.88 14.55Q164.89 17.3 161.92 20.13 158.97 23.04 156.02 26 153.08 29.01 150.14 32.09 147.2 35.24 144.26 38.47 141.31 41.8 138.37 45.22 135.44 48.76 132.5 52.4 129.57 56.14 126.64 59.96 123.69 63.86 120.72 67.8C120.5 68 120.26 68.18 120 68.33 119.63 68.55 119.21 68.51 118.8 68.56 117.33 68.72 115.91 68.61 114.72 67.96Q113.36 67.25 112.1 65.91C111.9 65.72 111.72 65.53 111.55 65.33Q110.77 64.43 110.77 63.78 110.76 63.18 110.96 62.75C111.01 62.64 111.08 62.53 111.16 62.43Q111.16 62.43 111.16 62.43M125.22 4.38C123.37 3.55 121.4 3.08 119.41 2.88 119.06 2.85 118.7 2.82 118.36 2.81 116.43 2.7 114.56 2.97 112.86 3.58 111.17 4.2 109.64 5.17 108.4 6.45Q105.43 9.47 104.56 14.95C104.3 16.63 104.18 18.32 104.19 20.02 104.18 21.39 104.26 22.76 104.44 24.12Q104.77 26.75 105.57 28.88C106.19 30.66 107.2 32.29 108.53 33.69Q110.69 35.89 113.45 36.97 116.22 38.03 119.58 37.99 122.94 37.94 125.68 36.83 128.42 35.73 130.53 33.61 133.46 30.74 134.36 26.02C134.63 24.49 134.77 22.94 134.75 21.37Q134.77 16.95 133.53 13.54C132.89 11.69 131.86 9.92 130.49 8.34 129.06 6.69 127.25 5.33 125.22 4.38Q125.22 4.38 125.22 4.38M166.41 34.54C164.57 33.96 162.62 33.65 160.64 33.64 160.31 33.64 159.96 33.64 159.62 33.66 157.71 33.69 155.87 34.04 154.19 34.67 152.51 35.3 151 36.22 149.78 37.39Q146.85 40.16 146.02 44.85C145.78 46.3 145.67 47.75 145.69 49.2 145.69 50.39 145.78 51.56 145.96 52.73Q146.31 54.99 147.12 56.79C147.75 58.3 148.75 59.65 150.06 60.76Q152.21 62.51 154.95 63.17 157.68 63.83 160.99 63.41 164.32 62.98 167.03 61.61 169.76 60.28 171.9 58.15 174.89 55.4 174.93 51.23C174.71 49.89 174.6 48.54 174.58 47.27Q174.45 43.81 174.85 41.26C174.16 39.9 173.08 38.62 171.68 37.47 170.22 36.23 168.42 35.22 166.41 34.54Q166.41 34.54 166.41 34.54M124.25 20.76C124.25 20.06 124.19 19.36 124.06 18.66Q123.34 14.93 119.72 14.59C119.66 14.59 119.6 14.58 119.54 14.58 118.77 14.51 118.01 14.61 117.32 14.88Q115.33 15.71 114.93 18.67C114.86 19.21 114.82 19.75 114.83 20.31Q114.83 22.16 115.37 23.45C115.55 23.9 115.81 24.31 116.14 24.69 116.86 25.57 117.95 26.13 119.14 26.22 119.28 26.24 119.41 26.25 119.55 26.25 120.16 26.28 120.76 26.19 121.33 25.99 121.96 25.76 122.52 25.39 122.95 24.92Q124.25 23.54 124.25 20.76 124.25 20.76 124.25 20.76M165.7 47.78C165.7 47.21 165.63 46.64 165.49 46.08Q164.71 43.14 161.11 43.18C161.05 43.18 160.99 43.18 160.92 43.19 160.16 43.2 159.4 43.34 158.71 43.63Q156.74 44.49 156.36 46.99C156.3 47.45 156.26 47.91 156.27 48.37Q156.28 49.94 156.83 50.98C157.01 51.34 157.27 51.66 157.59 51.95 158.32 52.62 159.41 52.98 160.59 52.93 160.73 52.93 160.86 52.92 160.99 52.91 161.61 52.86 162.21 52.72 162.77 52.49 163.41 52.22 163.97 51.84 164.4 51.4Q165.71 50.09 165.7 47.78 165.7 47.78 165.7 47.78" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>
    </div>

    {/* purple text */}
    <div className="incubatorText purpleText" style={incubatorTextStyle} ref={purpleTextRef}>
    <svg /* width="100" */ /* height="72.103" */ xmlns="http://www.w3.org/2000/svg" id="svg-element" viewBox="0 0 224.105 119.434" fill="inherit" preserveAspectRatio="xMidYMin meet" style={{paddingBottom:'10px'}}>
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="white" style={{stroke:'#000',strokeWidth:'0',fill:'white'}}>
          <path d="M24.56 50.12Q33.41 48.67 42.22 47.25 44.38 46.91 44.77 52.93C44.83 53.82 44.86 54.71 44.86 55.6 44.87 56.35 44.83 57.11 44.78 57.87Q44.64 59.63 44.3 61.73C44.23 62.13 44.16 62.54 44.05 62.94Q43.42 65.28 42.1 65.42 33.53 66.43 24.94 67.52 25.11 73.27 25.28 78.95 37.55 77.65 49.88 76.58C50.45 76.54 50.99 76.75 51.32 77.14Q52.34 78.15 52.86 80.94C52.9 81.14 52.93 81.34 52.96 81.54 53.15 82.6 53.26 83.66 53.31 84.72 53.34 85.24 53.34 85.74 53.34 86.26 53.34 86.83 53.3 87.4 53.26 87.97Q53.07 89.95 52.52 92.56C52.51 92.62 52.5 92.68 52.49 92.74Q51.76 96.14 50.28 96.67C50.12 96.72 49.95 96.76 49.79 96.76Q27.28 98 4.97 100.04C4.36 100.11 3.75 100.14 3.15 100.12Q0 100 0 97.55 -2.41 62.13 -2.11 25.48C-2.1 25.1 -2.05 24.72 -1.94 24.35Q-1.47 22.76 0.27 22.05C0.55 21.93 0.83 21.84 1.11 21.76Q25.56 14.97 50.02 8.17C50.61 8.04 51.13 8.27 51.39 8.76Q52.86 10.88 52.79 19.94C52.79 21.13 52.76 22.33 52.7 23.54Q52.28 32.31 49.87 32.77 37.24 35.28 24.54 37.87 24.52 44.04 24.56 50.12 24.56 50.12 24.56 50.12M93.68 95.59Q93.65 106.38 93.66 117.05C93.6 117.2 93.43 117.31 93.24 117.33Q91.33 117.12 81.18 117.12C80.21 117.12 79.24 117.13 78.26 117.13Q69.64 117.29 69.2 117.22C69.18 117.19 69.17 117.16 69.17 117.14Q70.27 87.12 70.33 55.24 68.03 55.44 65.74 55.65C64.69 55.74 63.71 55.35 63.1 54.61Q61.9 53.32 61.26 50.41C61.15 49.94 61.07 49.47 61.02 48.99Q60.85 47.6 60.85 45.74C60.86 44.95 60.95 44.16 61.11 43.37Q61.37 42.16 61.85 40.78C62.13 40.02 62.42 39.27 62.75 38.52Q65.49 32.03 71.44 31.23C71.44 31.22 71.44 31.22 71.44 31.23Q75.36 30.78 78.67 32.38C79.24 32.66 79.81 32.97 80.37 33.3Q81.9 34.21 82.8 35.09C82.96 35.24 83.1 35.4 83.24 35.57Q84.29 36.83 84.47 37.24C84.5 37.28 84.51 37.33 84.52 37.38 87.44 34.77 90.71 32.69 94.21 31.21 97.37 29.93 100.67 29.25 104 29.2 110.52 29.08 116.76 31.96 121.25 37.05 121.5 37.32 121.73 37.58 121.96 37.85Q129.55 46.48 129.89 63.26C130 66.54 129.84 69.76 129.4 72.92Q128.67 77.99 126.81 81.98C125.88 84.02 124.66 85.91 123.16 87.63 121.19 89.94 118.7 91.87 115.82 93.33 112.15 95.12 107.94 96.03 103.65 96Q98.17 96.03 93.68 95.59 93.68 95.59 93.68 95.59M205.69 82.55C206.02 82.6 206.35 82.65 206.67 82.68Q212.78 83.42 216.92 81.97 218.53 82.18 219.46 85.98C219.59 86.52 219.71 87.06 219.82 87.61 219.98 88.39 220.14 89.16 220.31 89.94Q220.95 92.85 221.11 94.34C221.12 94.53 221.14 94.73 221.14 94.92 221.15 95.19 221.15 95.46 221.13 95.73Q221.09 96.5 220.88 96.95C220.81 97.1 220.71 97.24 220.58 97.36Q214.02 100.15 202.49 99.32C195.34 98.98 188.31 96.06 183.05 91.16 182.82 90.95 182.6 90.74 182.37 90.52 178.73 86.99 176.08 82.73 174.71 78.14Q173.39 73.86 173.14 68.85C173.13 68.62 173.13 68.4 173.12 68.17 172.99 64.83 173.29 61.51 174.01 58.29 175.06 53.45 177.42 49.13 180.88 45.79 185.73 41.2 192.79 39.44 200.46 40.93 201.32 41.08 202.18 41.25 203.04 41.46Q217.11 44.74 223.22 52.08C223.27 52.15 223.33 52.22 223.38 52.28 223.79 52.77 224.1 53.29 224.31 53.83Q224.6 54.5 224.71 55.27C224.69 55.68 224.7 56.09 224.73 56.52Q224.85 59.05 223.77 62.01C223.39 62.82 222.96 63.61 222.47 64.37Q220.09 68.14 217.02 68.42C216.88 68.42 216.76 68.42 216.64 68.41Q216.17 68.38 215.47 68.26 214.46 68.08 213.03 66.55 207.83 61.29 204.66 60.68C203.2 60.4 201.81 60.6 200.75 61.23Q199.97 61.67 199.27 62.39C199.26 62.39 199.26 62.4 199.26 62.4Q197.27 64.49 197.09 69.58C197.07 69.98 197.07 70.4 197.08 70.82Q197.18 81.05 205.69 82.55 205.69 82.55 205.69 82.55M163 34.66Q163.75 66.55 165.4 95.68C165.36 95.85 165.22 95.96 165.02 95.98Q163.27 96.53 153.51 96.23C152.56 96.21 151.61 96.17 150.66 96.14Q141.71 95.88 141.14 95.22C141.12 95.19 141.1 95.16 141.1 95.14Q139.45 65.04 138.82 31.87 138.81 30.86 150.93 32.03 162.2 33.69 162.95 34.55C162.98 34.57 163 34.62 163 34.66Q163 34.66 163 34.66M162.69 4.8Q162.78 15.63 162.89 26.34 162.9 27.35 150.87 25.35 139.57 24.2 138.82 23.37C138.79 23.33 138.77 23.3 138.76 23.25Q138.73 12.38 138.71 1.47 138.71 0.22 147.41 0.03C148.57 0 149.71 0.11 150.83 0.44Q161.9 3.71 162.64 4.68C162.67 4.72 162.69 4.76 162.69 4.8Q162.69 4.8 162.69 4.8M94.55 55.17Q94.63 66.69 94.72 77.83 97.05 78.04 98.49 78.02 99.61 78 100.75 77.99 106.35 77.44 106.14 64.63 106.05 57.26 102.94 54.79C101.81 53.92 100.42 53.5 99 53.58 97.82 53.62 96.67 53.94 95.63 54.5 95.26 54.7 94.89 54.93 94.55 55.17Q94.55 55.17 94.55 55.17" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>
      
      <svg /* width="100" */ /* height="72.103" */ xmlns="http://www.w3.org/2000/svg" id="svg-element" viewBox="0 0 175.901 72.103" fill="inherit" preserveAspectRatio="xMidYMin meet">
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="white" style={{stroke:'#000',strokeWidth:'0',fill:'white'}}>
          <path d="M49.28 2.19Q53.41 1.46 57.49 1.11 61.54 1.1 65.59 1.09 69.65 1.09 73.7 1.09 77.75 1.09 81.8 1.09 83.7 1.09 83.76 9.4C83.75 10.09 83.74 10.8 83.7 11.49Q83.65 12.65 83.52 13.96C83.47 14.51 83.41 15.05 83.35 15.6Q82.93 19.18 81.71 19.18 76.82 19.21 71.93 19.26 67.04 19.35 62.14 19.48 62.12 23.14 62.09 26.77 63.75 26.73 65.41 26.7C67.49 26.64 69.57 26.81 71.6 27.2Q75.4 27.98 78.24 29.86C79.45 30.66 80.54 31.63 81.5 32.74 82.6 34.03 83.54 35.45 84.31 36.96 85.07 38.46 85.66 40.06 86.06 41.71Q86.91 45.09 86.97 49.11C87.04 51.98 86.59 54.84 85.64 57.55 85.06 59.15 84.29 60.66 83.35 62.05 82.41 63.44 81.31 64.71 80.06 65.84 78.3 67.43 76.33 68.74 74.21 69.75 72.08 70.75 69.82 71.44 67.46 71.79 65.59 72.1 63.7 72.05 61.79 72.05Q56.17 72.02 51.88 70.86 47.58 69.51 44.85 67.61 43.99 66.26 43.94 63.6 43.89 61.38 44.38 57.68C44.45 57.17 44.52 56.67 44.6 56.17Q45.33 51.4 46.76 51.47C46.77 51.47 46.79 51.47 46.81 51.48Q46.93 51.53 47.24 51.78C47.28 51.81 47.32 51.84 47.37 51.88 48.5 52.37 49.64 52.83 50.8 53.26Q55.59 55.08 58.45 55.19C59.41 55.22 60.36 55.14 61.29 54.93 62.53 54.65 63.68 54.09 64.65 53.29Q67.06 51.28 67 48.09C67 46.99 66.83 45.9 66.49 44.84Q65.3 41.41 61.43 40.49C60.37 40.25 59.29 40.13 58.21 40.15Q53.87 40.19 49.52 40.22 48.68 40.36 47.82 39.7C47.71 39.6 47.59 39.51 47.48 39.4 46.98 38.9 46.65 38.28 46.53 37.61 46.47 37.35 46.44 37.08 46.45 36.81Q46.41 33.14 46.37 29.45 46.34 25.75 46.31 22.03 46.29 18.27 46.27 14.47 46.25 10.63 46.24 6.77C46.23 6.28 46.27 5.79 46.35 5.3Q46.82 2.72 49.11 2.22C49.16 2.21 49.22 2.2 49.27 2.19Q49.28 2.19 49.28 2.19M33.71 7.4Q33.74 11.16 33.78 14.89 33.82 18.59 33.87 22.26 33.91 25.93 33.94 29.58 33.98 33.25 34.01 36.91 34.04 40.59 34.07 44.27 34.09 47.97 34.12 51.68 34.16 55.41 34.19 59.16 34.24 62.94 34.28 66.75C34.25 67.04 34.02 67.27 33.71 67.33Q32.07 67.92 25.75 67.18C25.09 67.11 24.42 67.03 23.76 66.94 22.75 66.8 21.74 66.65 20.73 66.5Q13.23 65.31 13.24 64.09 13.27 61.51 13.31 59 13.36 56.53 13.42 54.07 13.48 51.6 13.53 49.1 13.58 46.55 13.61 43.94 13.63 41.29 13.64 38.59 13.63 35.89 13.62 33.21 13.59 30.58 13.56 28.02 13.5 25.54 13.44 23.16 10.76 23.08 8.08 22.9 5.42 22.62 2.77 22.24C2.07 22.11 1.44 21.78 1.1 21.37Q-0.04 20.29 -0.45 17.73C-0.53 17.28 -0.57 16.84 -0.61 16.39Q-0.76 14.52 -0.25 12.78C-0.2 12.56 -0.11 12.35 -0.01 12.13Q0.57 10.87 1.88 10.67 5.37 10.06 8.86 9.45 12.35 8.83 15.84 8.2 19.34 7.58 22.83 6.95 26.32 6.32 29.81 5.7C30.2 5.62 30.59 5.58 30.96 5.57Q31.92 5.56 32.61 5.88C32.84 5.98 33.03 6.1 33.21 6.27 33.53 6.55 33.7 6.95 33.71 7.4Q33.71 7.4 33.71 7.4M102.43 64.56Q105.34 60.41 108.26 56.24 111.18 52.12 114.11 48.09 117.05 44.15 119.99 40.33 122.93 36.62 125.89 33.01 128.85 29.5 131.81 26.11 134.78 22.83 137.76 19.67 140.75 16.64 143.75 13.73 146.77 10.91 149.79 8.14C150 8.02 150.24 7.93 150.5 7.86 150.87 7.76 151.29 7.75 151.7 7.83Q155.28 8.5 158.18 11.64C158.27 11.73 158.36 11.82 158.46 11.93Q159.39 12.88 159.57 13.47C159.6 13.56 159.62 13.67 159.62 13.77 159.62 13.89 159.6 14 159.57 14.12Q159.52 14.3 159.42 14.44C159.37 14.53 159.29 14.61 159.18 14.68Q156.14 17.13 153.12 19.78 150.13 22.64 147.16 25.69 144.19 28.86 141.23 32.13 138.28 35.48 135.32 38.93 132.37 42.48 129.42 46.16 126.47 49.97 123.53 53.93 120.6 58.04 117.68 62.31 114.76 66.74 111.85 71.32C111.64 71.56 111.4 71.77 111.15 71.93 110.79 72.14 110.38 72.06 109.97 72.05 108.53 72.06 107.14 71.78 105.97 70.94Q104.62 70.01 103.37 68.43C103.18 68.21 103 67.98 102.83 67.75Q102.06 66.7 102.05 66 102.04 65.35 102.23 64.9C102.29 64.78 102.34 64.67 102.43 64.56Q102.43 64.56 102.43 64.56M116.01 2.05C114.13 0.98 112.14 0.29 110.15 0 109.8 0 109.45 0 109.11 0.02 107.19 0.09 105.33 0.56 103.65 1.38 101.96 2.21 100.46 3.38 99.23 4.85Q96.3 8.28 95.48 14.13C95.23 15.9 95.13 17.69 95.16 19.48 95.16 20.92 95.25 22.36 95.43 23.8Q95.79 26.56 96.6 28.79C97.24 30.66 98.26 32.38 99.6 33.86Q101.77 36.19 104.54 37.35 107.3 38.48 110.65 38.45 114.01 38.41 116.74 37.22 119.47 36.06 121.58 33.79 124.5 30.74 125.39 25.74C125.66 24.11 125.79 22.46 125.78 20.81Q125.75 16.11 124.47 12.43C123.82 10.43 122.75 8.5 121.36 6.73 119.89 4.86 118.06 3.26 116.01 2.05Q116.01 2.05 116.01 2.05M157.58 34.19C155.73 33.65 153.77 33.42 151.79 33.51 151.45 33.52 151.1 33.53 150.76 33.56 148.85 33.66 146.99 34.09 145.31 34.79 143.62 35.5 142.11 36.49 140.88 37.74Q137.93 40.71 137.07 45.69C136.82 47.22 136.71 48.75 136.72 50.29 136.72 51.53 136.8 52.78 136.97 54Q137.31 56.37 138.1 58.23C138.73 59.79 139.73 61.15 141.03 62.25Q143.18 63.97 145.92 64.52 148.66 65.05 151.99 64.42 155.31 63.8 158.03 62.28 160.76 60.84 162.91 58.82 165.91 56.48 166.15 52.94C165.92 51.78 165.82 50.6 165.86 49.45Q165.91 46 166.12 42.56C165.42 40.66 164.32 38.93 162.91 37.46 161.43 35.97 159.61 34.86 157.58 34.19Q157.58 34.19 157.58 34.19M115.22 20.01C115.21 19.24 115.15 18.47 115.01 17.71Q114.24 13.64 110.62 13.27C110.56 13.26 110.5 13.26 110.44 13.26 109.67 13.19 108.9 13.3 108.22 13.61Q106.24 14.56 105.87 17.78C105.8 18.37 105.77 18.96 105.78 19.56Q105.8 21.55 106.35 22.93C106.54 23.4 106.8 23.85 107.13 24.25 107.86 25.19 108.96 25.78 110.14 25.88 110.28 25.9 110.41 25.91 110.54 25.91 111.16 25.93 111.76 25.84 112.33 25.63 112.96 25.38 113.52 24.99 113.95 24.48Q115.24 23 115.22 20.01 115.22 20.01 115.22 20.01M156.78 49.06C156.79 48.47 156.73 47.88 156.6 47.3Q155.85 44.1 152.22 43.99C152.16 43.99 152.1 43.99 152.04 43.99 151.26 43.99 150.5 44.13 149.81 44.42Q147.82 45.31 147.43 47.92C147.36 48.4 147.32 48.88 147.33 49.36Q147.33 50.97 147.87 52.03C148.04 52.39 148.3 52.73 148.62 53.02 149.34 53.7 150.43 54.05 151.61 54 151.75 54 151.88 53.99 152.02 53.98 152.63 53.93 153.24 53.8 153.81 53.58 154.44 53.32 155.01 52.97 155.44 52.55Q156.76 51.33 156.78 49.06 156.78 49.06 156.78 49.06" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>
    </div>

    {/* red text */}
    <div className="incubatorText redText" style={incubatorTextStyle} ref={redTextRef}>
      <svg /* width="140" */ /* height="40.98" */ xmlns="http://www.w3.org/2000/svg" id="svg-element" viewBox="0 0 190 50" fill="inherit" preserveAspectRatio="xMidYMin meet" style={{paddingBottom:'10px'}}>
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="white" style={{stroke:'#000',strokeWidth:'0',fill:'white'}}>
          <path d="M30.67 35.59Q30.26 26.76 29.81 17.95 26.72 27.05 23.56 35.96 23.36 36.46 20.52 36.55C20.4 36.55 20.28 36.55 20.17 36.56 19.84 36.57 19.5 36.57 19.17 36.57Q16.99 36.55 16.92 36.17 14.03 27.55 10.95 19.03 10.63 27.43 10.07 35.91 9.99 36.49 8.38 36.8C8.32 36.81 8.25 36.83 8.18 36.84Q6.38 37.16 5.19 37.23C4.45 37.29 3.72 37.31 3 37.29 2.97 37.29 2.95 37.29 2.94 37.29 2.68 37.28 2.44 37.27 2.19 37.24Q0.74 37.08 0.8 36.54C0.8 36.54 0.8 36.53 0.8 36.51Q1.32 21.44 1.78 10.44C1.8 10.29 1.95 10.14 2.17 10.06Q3.2 9.49 6.93 8.88C7.23 8.83 7.52 8.78 7.82 8.74 8.29 8.67 8.78 8.6 9.26 8.55Q9.91 8.48 10.64 8.41C11.15 8.37 11.66 8.34 12.17 8.3Q14.28 8.17 14.86 8.57C14.93 8.62 15 8.69 15.04 8.77Q17.8 14.93 20.55 21.3 22.99 14.4 25.43 7.2C25.54 6.96 25.73 6.75 25.98 6.63Q27.39 5.74 32.26 4.99C32.74 4.91 33.24 4.85 33.72 4.79Q34.54 4.7 35.47 4.64C35.86 4.61 36.25 4.59 36.63 4.57 36.9 4.55 37.17 4.54 37.43 4.55Q38.6 4.55 38.99 4.79C39.11 4.85 39.18 4.96 39.19 5.1Q39.87 20.36 40.49 35.35C40.47 35.45 40.41 35.55 40.31 35.62Q39.91 35.93 38.53 36.11C38 36.18 37.46 36.24 36.92 36.3Q35.93 36.38 35.09 36.39C34.66 36.41 34.24 36.41 33.81 36.4Q30.66 36.34 30.67 35.59 30.67 35.59 30.67 35.59M98.69 19.32Q98.69 27.43 98.69 35.42 98.69 35.86 94.52 35.86C94.12 35.86 93.72 35.85 93.32 35.84Q90.92 35.76 90.46 35.38C90.39 35.34 90.35 35.26 90.35 35.17Q90.36 18.13 90.35 0.66 90.35 0.3 91.9 0.15C92.25 0.11 92.61 0.08 92.97 0.05Q93.4 0.03 93.78 0.01C94.02 0 94.26 0 94.5 0 94.9 0 95.3 0 95.71 0.02Q98.22 0.12 98.62 0.68C98.67 0.74 98.7 0.82 98.7 0.9Q98.7 6.03 98.7 11.14 101.5 10.28 102.94 10.28C103.77 10.28 104.6 10.36 105.41 10.55Q107.51 11.04 108.93 12.39C109.49 12.95 109.93 13.61 110.21 14.35Q110.96 16.12 111.09 18.86C111.11 19.26 111.11 19.67 111.11 20.06Q111.12 27.81 111.13 35.41 111.13 35.84 107.23 35.82 103.05 35.67 102.85 35.36C102.84 35.35 102.84 35.34 102.84 35.32Q102.83 28.1 102.84 20.75 102.84 18.97 102 18.47C101.77 18.32 101.5 18.26 101.24 18.26Q100.16 18.26 98.74 19.27C98.72 19.29 98.7 19.3 98.69 19.32Q98.69 19.32 98.69 19.32M51.91 34.2Q47.73 23.61 43.54 13.13C43.56 13.03 43.64 12.94 43.74 12.91Q44.49 12.5 48.07 12.11 51.84 11.72 52.58 11.99C52.66 12.01 52.72 12.06 52.76 12.14Q54.55 17.86 56.34 23.55 58.06 17.6 59.77 11.45C59.81 11.36 59.89 11.3 59.97 11.27Q60.48 11.01 62.27 10.87C62.46 10.86 62.65 10.84 62.85 10.83Q69.48 10.59 69.18 11.28 63.32 28.27 57.4 43.72 57.35 43.45 54.67 43.45C53.66 43.45 52.64 43.47 51.63 43.52 50.98 43.53 50.34 43.57 49.7 43.62 49.48 43.63 49.27 43.64 49.06 43.66Q47.41 43.8 47.5 44 49.7 39.13 51.91 34.2 51.91 34.2 51.91 34.2M169.46 22.62Q169.55 26.11 169.6 29.56 170.46 29.62 171.32 29.68 172.14 29.75 172.62 30.58C172.64 30.59 172.65 30.62 172.66 30.65Q172.98 31.25 173.1 32.12C173.13 32.42 173.15 32.72 173.15 33.01 173.14 33.85 172.93 34.66 172.53 35.4 172.45 35.54 172.37 35.69 172.28 35.83 172.14 36.06 171.96 36.28 171.76 36.48Q171.36 36.85 170.87 37.03C170.57 37.12 170.24 37.17 169.92 37.16 169.28 37.14 168.65 37.06 168.03 36.92 167.11 36.72 166.25 36.32 165.55 35.77Q164.79 35.23 164.38 34.47C163.41 35.5 162.09 36.21 160.59 36.53Q159.11 36.87 157.26 36.84C155.93 36.82 154.61 36.52 153.41 35.98 152.55 35.55 151.75 35.01 151.08 34.36Q148.56 31.91 148.51 28.64 148.39 21.59 156.74 21.63C157.18 21.63 157.62 21.65 158.07 21.68Q159.44 21.78 160.82 21.88 160.82 21.65 160.81 21.42C160.8 21.26 160.79 21.11 160.78 20.94Q160.71 20.46 160.56 20.16C160.51 20.05 160.42 19.95 160.33 19.87Q159.93 19.52 158.56 19.4C158.49 19.39 158.42 19.38 158.35 19.38 157.93 19.35 157.51 19.33 157.09 19.35Q155.82 19.37 154.1 19.58C153.74 19.62 153.37 19.67 153.01 19.73Q151.56 17.3 151.52 15.81C151.51 15.6 151.52 15.39 151.55 15.18Q151.65 14.38 152.14 14.07C152.19 14.03 152.24 14 152.31 13.98 153 13.75 153.73 13.59 154.47 13.49Q156.73 13.2 159.89 13.49C159.92 13.48 159.96 13.48 159.99 13.5Q164.85 13.94 167.03 16.18C167.05 16.21 167.07 16.23 167.11 16.26 167.79 16.99 168.33 17.82 168.68 18.7Q169.38 20.39 169.46 22.62 169.46 22.62 169.46 22.62M140.42 29.04C140.54 29.05 140.67 29.07 140.8 29.07Q142.87 29.14 144.34 28.52C144.48 28.46 144.62 28.39 144.77 28.31 144.93 28.32 145.08 28.4 145.18 28.53Q145.55 28.92 145.85 30.02C145.91 30.26 145.96 30.51 146.02 30.75 146.09 31.09 146.17 31.44 146.23 31.79Q146.48 33.07 146.52 33.74C146.53 33.82 146.54 33.91 146.54 34 146.54 34.12 146.53 34.24 146.52 34.36Q146.5 34.71 146.42 34.92C146.39 35 146.35 35.06 146.3 35.12 145.51 35.55 144.65 35.88 143.76 36.09Q142.56 36.37 141.14 36.47C140.46 36.53 139.77 36.55 139.08 36.54 136.23 36.53 133.48 35.42 131.5 33.43 131.41 33.35 131.32 33.27 131.24 33.18Q128.08 29.91 127.99 24.34C127.99 24.25 127.99 24.15 127.99 24.06 127.97 22.7 128.11 21.34 128.41 20.01 128.84 18.02 129.77 16.2 131.09 14.71 132.94 12.64 135.59 11.53 138.42 11.64 138.74 11.64 139.06 11.65 139.38 11.68 140.22 11.75 141.07 11.87 141.9 12.06Q145.1 12.81 146.62 14.74 146.96 15.16 147.06 15.83C147.08 16 147.1 16.16 147.1 16.32Q147.12 17.35 146.75 18.79 146.16 20.89 145.27 21.69C145.04 21.9 144.78 22.05 144.48 22.15Q144.29 22.19 143.91 22.17 143.61 22.15 143.19 21.75C143.12 21.68 143.05 21.62 142.99 21.55Q141.07 19.61 139.92 19.51C139.9 19.51 139.88 19.5 139.86 19.51 139.33 19.48 138.82 19.64 138.43 19.97Q138.13 20.2 137.88 20.55C137.88 20.55 137.88 20.55 137.88 20.56Q137.14 21.55 137.08 23.73C137.07 23.91 137.07 24.09 137.07 24.28Q137.11 28.71 140.42 29.04 140.42 29.04 140.42 29.04M83.47 17.89Q83.47 26.78 83.46 35.49C83.44 35.6 83.36 35.68 83.25 35.71Q82.66 36.01 80.38 36.07C80 36.08 79.63 36.09 79.26 36.09Q74.47 35.92 74.27 35.52C74.27 35.51 74.27 35.5 74.27 35.49Q74.28 26.81 74.28 17.94 73.01 17.97 71.74 17.99C71.51 17.99 71.31 17.86 71.21 17.65Q70.85 17.08 70.76 15.52C70.74 15.18 70.74 14.83 70.74 14.48Q70.73 13.57 70.9 12.23 71.06 11.03 71.5 10.88C71.54 10.87 71.58 10.86 71.63 10.86Q72.94 10.85 74.27 10.83 74.27 8.55 74.26 6.28C74.27 6.06 74.39 5.87 74.58 5.78Q75.37 5.27 78.05 5.23C78.19 5.23 78.34 5.23 78.48 5.22 78.89 5.21 79.29 5.22 79.7 5.23Q82.17 5.32 82.61 5.8C82.67 5.86 82.7 5.94 82.71 6.04Q82.71 7.68 82.71 9.32 82.73 10.04 82.76 10.75 84.88 10.74 87.01 10.74 87.84 10.74 87.86 14.13C87.86 14.19 87.86 14.25 87.86 14.31Q87.86 17.55 87.15 17.84C87.1 17.86 87.05 17.87 87.01 17.87Q85.23 17.88 83.47 17.89 83.47 17.89 83.47 17.89M183.24 7.56Q185.52 22.86 184.73 37.55C184.76 37.61 184.83 37.66 184.91 37.68Q184.17 37.8 180.02 37.37C179.7 37.34 179.39 37.31 179.08 37.28Q176.02 36.99 176.02 36.75 176.03 22.21 174.69 6.82C174.7 6.69 174.77 6.59 174.91 6.56Q175.7 6.25 179.35 6.66 183.2 7.27 183.24 7.56 183.24 7.56 183.24 7.56M124.45 11.3Q124.46 23.66 124.5 35.61C124.47 35.68 124.41 35.72 124.35 35.73Q123.65 35.98 119.93 35.95C119.57 35.95 119.23 35.94 118.87 35.94Q115.37 35.87 115.37 35.58 115.35 23.51 115.37 11.06C115.39 10.99 115.45 10.94 115.53 10.94Q116.21 10.72 119.86 10.81C119.88 10.8 119.9 10.8 119.91 10.8 120.27 10.81 120.63 10.83 120.97 10.84Q124.45 11.02 124.45 11.3 124.45 11.3 124.45 11.3M124.51 0.49Q124.48 4.37 124.46 8.24C124.43 8.3 124.37 8.35 124.3 8.35Q123.61 8.55 119.97 8.42C119.95 8.42 119.94 8.42 119.92 8.42 119.57 8.41 119.22 8.39 118.86 8.38Q115.38 8.28 115.38 8.01 115.39 4.28 115.4 0.56 115.4 0.05 119.97 0.05C120.33 0.04 120.69 0.05 121.04 0.05Q124.51 0.21 124.51 0.49 124.51 0.49 124.51 0.49M161.01 29.9Q160.98 28.18 160.94 26.47 160.24 26.43 159.54 26.39C159.22 26.36 158.91 26.38 158.6 26.43Q157.15 26.71 157.18 28.37C157.17 28.56 157.21 28.76 157.25 28.96Q157.34 29.32 157.53 29.59C157.6 29.71 157.69 29.81 157.81 29.9 158.14 30.2 158.58 30.4 159.05 30.46 159.14 30.47 159.25 30.48 159.34 30.48Q160.27 30.53 161.01 29.9 161.01 29.9 161.01 29.9" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>
      
      <svg /* width="180" */ /* height="40.98" */ xmlns="http://www.w3.org/2000/svg" id="svg-element" viewBox="0 0 263.502 72.105" fill="inherit" preserveAspectRatio="xMidYMin meet">
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="white" style={{stroke:'#000',strokeWidth:'0',fill:'white'}}>
          <path d="M146.1 1.08Q150.15 1.08 154.2 1.08 158.25 1.08 162.3 1.08 166.35 1.08 170.4 1.08 174.45 1.11 178.48 1.47 180.36 1.69 180.39 9.99C180.38 10.68 180.36 11.38 180.33 12.07Q180.27 13.22 180.13 14.51C180.09 15.03 180.02 15.57 179.96 16.1Q179.52 19.6 178.32 19.55 173.45 19.38 168.58 19.26 163.7 19.18 158.83 19.12 158.78 22.8 158.73 26.46 160.38 26.47 162.04 26.49C164.1 26.49 166.17 26.71 168.19 27.16Q171.97 28.03 174.79 29.95C175.99 30.76 177.07 31.72 178.02 32.82 179.11 34.1 180.04 35.49 180.79 36.97 181.55 38.43 182.12 39.98 182.5 41.58Q183.33 44.85 183.34 48.74C183.38 51.51 182.88 54.31 181.88 57 181.26 58.59 180.45 60.11 179.47 61.53 178.49 62.97 177.34 64.3 176.05 65.49 174.23 67.19 172.2 68.57 170.04 69.6 167.88 70.6 165.58 71.29 163.2 71.64 161.31 71.95 159.4 71.9 157.49 71.9Q151.84 71.9 147.72 71.31 143.59 70.52 141 68.94 140.2 67.66 140.2 64.94 140.2 62.66 140.75 58.77C140.83 58.23 140.91 57.71 141 57.18Q141.81 52.13 143.21 52.13C143.22 52.13 143.24 52.13 143.26 52.14Q143.38 52.2 143.68 52.43C143.72 52.46 143.76 52.49 143.81 52.53 144.91 52.98 146.02 53.39 147.15 53.79Q151.84 55.42 154.67 55.41C155.62 55.41 156.57 55.29 157.5 55.06 158.74 54.75 159.9 54.15 160.88 53.33Q163.34 51.26 163.34 48.07C163.36 46.96 163.21 45.86 162.89 44.81Q161.76 41.35 157.93 40.43C156.89 40.19 155.8 40.07 154.73 40.09Q150.43 40.14 146.12 40.18 145.28 40.35 144.45 39.64C144.33 39.54 144.22 39.44 144.12 39.33 143.62 38.8 143.3 38.13 143.19 37.42 143.14 37.14 143.11 36.84 143.12 36.56Q143.12 32.63 143.12 28.69 143.12 24.75 143.12 20.82 143.12 16.88 143.11 12.96 143.11 9.04 143.1 5.15C143.09 4.65 143.13 4.16 143.22 3.69Q143.68 1.17 145.93 1.08C145.99 1.08 146.04 1.08 146.1 1.08Q146.1 1.08 146.1 1.08M126.59 71.11Q122.45 71.11 118.3 71.11 114.15 71.11 110 71.11 105.85 71.11 101.7 71.11 97.55 71.11 93.39 71.11C92.32 71.1 91.31 70.59 90.67 69.74Q89.57 68.4 88.86 65.78C88.72 65.25 88.59 64.71 88.48 64.18 88.37 63.59 88.26 63 88.17 62.42Q87.88 60.58 87.8 59.32C87.78 59.05 87.78 58.79 87.78 58.53Q87.78 57.14 88.1 56.46C88.16 56.3 88.26 56.17 88.38 56.05 89.68 54.75 90.96 53.44 92.23 52.12 93.5 50.78 94.76 49.44 96 48.08Q97.85 46.03 99.47 44.14 101.09 42.23 102.48 40.48 105.25 36.96 107.1 34.04 110.8 28.19 110.8 24.81C110.8 24.26 110.75 23.73 110.66 23.2Q110.35 21.56 109.35 20.59C108.91 20.17 108.39 19.86 107.82 19.66Q107.15 19.41 106.33 19.3C105.8 19.23 105.28 19.19 104.75 19.21 102.8 19.22 100.87 19.58 99.04 20.25 98.84 20.32 98.64 20.39 98.45 20.48Q96.2 21.36 94.64 22.35C94.25 22.59 93.86 22.86 93.5 23.16Q91.55 20.85 90.2 18.4 88.85 15.96 88.1 13.38C87.94 12.86 87.82 12.33 87.73 11.79 87.64 11.26 87.6 10.74 87.6 10.21Q87.6 8.74 88.1 7.39C88.29 6.8 88.62 6.27 89.05 5.84Q90.65 4.13 94.68 2.59C94.97 2.47 95.26 2.37 95.55 2.27Q98.87 1.13 102.38 0.56 105.9 0 109.6 0C112.44 0.02 115.28 0.25 118.05 0.86Q120.9 1.54 123.17 2.72 125.45 3.91 127.13 5.61 130.51 9.03 131.55 14.54C131.86 16.3 132.02 18.06 132.01 19.85Q132.01 24.28 130.51 28.77 129.76 31.01 128.64 33.28 127.51 35.54 126.01 37.81 124.51 40.09 122.88 42.21 121.25 44.33 119.5 46.29 117.75 48.25 115.87 50.06 114 51.86 112 53.51 114.52 53.42 117.05 53.32 119.57 53.22 122.1 53.12 124.63 53.02 127.15 52.93 129.68 52.83 132.2 52.73C132.32 53.99 132.42 55.24 132.5 56.51Q132.7 59.48 132.7 61.91C132.7 62.89 132.61 63.89 132.43 64.86Q132.07 66.73 131.22 68.23C131.18 68.3 131.14 68.38 131.1 68.45 130.77 69 130.36 69.51 129.87 69.94 128.97 70.72 127.79 71.14 126.59 71.11Q126.59 71.11 126.59 71.11M17.39 63.29C19.09 64.02 20.86 64.62 22.67 65.08 24.48 65.55 26.32 65.67 28.17 65.87 28.68 65.93 29.21 65.99 29.73 66.07 31.55 66.28 33.36 66.3 35.11 66.13 36.86 65.94 38.56 65.6 40.18 65.1 41.81 64.6 43.36 63.93 44.8 63.12 46.24 62.3 47.59 61.33 48.8 60.22 50.86 58.29 52.52 56.01 53.67 53.49Q55.25 50.11 56.05 45.85 56.45 43.72 56.65 41.37 56.85 39.02 56.86 36.47 56.88 31.83 56.26 27.86 55.64 23.91 54.38 20.67C53.82 19.16 53.09 17.72 52.22 16.38 51.34 15.04 50.31 13.8 49.15 12.68 47.75 11.34 46.16 10.21 44.4 9.3 42.65 8.4 40.74 7.73 38.71 7.3 37.11 6.98 35.47 6.8 33.81 6.75 32.14 6.71 30.45 6.79 28.76 7Q25.61 7.37 22.74 8.16 19.87 8.95 17.29 10.13 14.71 11.27 12.41 12.75 10.11 14.11 8.1 15.7 6.09 17.13 4.57 18.78 3.05 20.33 2.02 22.22 1 24.15 0.49 27.73 0 31.57 0 36C0 38.38 0.1 40.78 0.35 43.15Q0.91 48.12 2.27 50.8C2.83 51.94 3.56 53.04 4.47 54.08 5.37 55.16 6.45 56.21 7.68 57.23 8.98 58.36 10.46 59.45 12.09 60.46 13.72 61.52 15.5 62.48 17.39 63.29Q17.39 63.29 17.39 63.29M198.89 62.65Q201.87 58.73 204.84 54.89 207.8 51.14 210.74 47.46 213.67 43.87 216.59 40.36 219.5 36.93 222.41 33.57 225.3 30.29 228.2 27.07 231.09 23.92 233.98 20.85 236.87 17.87 239.75 14.98 242.63 12.16 245.51 9.37C245.72 9.23 245.96 9.14 246.2 9.06 246.57 8.94 246.97 8.91 247.39 8.96Q250.89 9.39 253.83 12.21C253.92 12.3 254.02 12.39 254.11 12.47Q255.07 13.34 255.29 13.9C255.33 13.99 255.35 14.09 255.36 14.19 255.36 14.3 255.35 14.42 255.33 14.54Q255.29 14.71 255.2 14.85C255.16 14.94 255.08 15.03 254.99 15.1Q252.12 17.63 249.25 20.36 246.36 23.29 243.48 26.37 240.59 29.53 237.71 32.74 234.83 35.98 231.95 39.26 229.06 42.58 226.17 45.97 223.27 49.43 220.35 52.98 217.41 56.62 214.46 60.34 211.5 64.15 208.52 68.04C208.3 68.23 208.07 68.41 207.8 68.56 207.43 68.78 207.01 68.74 206.59 68.78 205.12 68.93 203.68 68.82 202.48 68.16Q201.11 67.44 199.84 66.1C199.64 65.92 199.45 65.73 199.28 65.53Q198.5 64.63 198.49 63.99 198.49 63.39 198.69 62.97C198.74 62.86 198.81 62.75 198.89 62.65Q198.89 62.65 198.89 62.65M212.38 5.52C210.55 4.65 208.59 4.12 206.62 3.86 206.28 3.81 205.93 3.78 205.59 3.76 203.69 3.58 201.84 3.79 200.17 4.35 198.5 4.91 197 5.83 195.79 7.07Q192.87 9.99 192.04 15.43C191.79 17.09 191.68 18.77 191.71 20.46 191.71 21.83 191.79 23.19 191.97 24.56Q192.32 27.18 193.13 29.32C193.78 31.1 194.78 32.74 196.12 34.15Q198.3 36.36 201.07 37.46 203.84 38.54 207.21 38.53 210.57 38.52 213.3 37.44 216.03 36.38 218.12 34.29 220.99 31.45 221.81 26.78C222.06 25.28 222.17 23.75 222.13 22.22Q222.06 17.9 220.76 14.58C220.09 12.79 219.04 11.06 217.65 9.52 216.21 7.89 214.4 6.52 212.38 5.52Q212.38 5.52 212.38 5.52M254.02 34.81C252.19 34.25 250.23 34 248.26 34.09 247.92 34.1 247.57 34.12 247.23 34.15 245.32 34.25 243.48 34.66 241.82 35.35 240.15 36.04 238.67 37 237.47 38.2Q234.59 41.01 233.86 45.76C233.65 47.21 233.57 48.66 233.63 50.12 233.66 51.3 233.78 52.47 233.99 53.63Q234.4 55.88 235.26 57.67C235.95 59.17 237 60.51 238.38 61.63Q240.63 63.4 243.47 64.11 246.3 64.82 249.72 64.48 253.13 64.14 255.88 62.9 258.61 61.73 260.62 59.91 263.3 57.76 263.63 54.32C263.23 53.17 262.97 52.02 262.85 50.87Q262.53 47.47 262.26 43.74C261.63 41.72 260.6 39.85 259.25 38.27 257.83 36.69 256.03 35.51 254.02 34.81Q254.02 34.81 254.02 34.81M28.48 22.71C26.82 22.77 25.23 23.33 24.04 24.25Q23.13 24.92 22.33 25.85C22.2 26 22.08 26.15 21.97 26.31 21.24 27.26 20.68 28.29 20.31 29.37Q19.28 32.23 19.26 36.3C19.24 37.55 19.31 38.8 19.46 40.03Q19.97 43.91 21.71 46.29C21.72 46.3 21.72 46.31 21.73 46.32 22.17 46.95 22.72 47.53 23.35 48.06 24.63 49.18 26.43 49.84 28.3 49.89 30.26 49.96 32.15 49.34 33.46 48.15 34.01 47.66 34.51 47.13 34.93 46.55Q36.22 44.78 36.88 42.21 37.53 39.62 37.55 36.25 37.58 32 36.53 29.01C36.17 27.94 35.63 26.93 34.96 26.01 34.5 25.4 33.98 24.84 33.38 24.34Q32.25 23.41 30.94 23.02C30.16 22.78 29.32 22.67 28.48 22.71Q28.48 22.71 28.48 22.71M81.27 52.75Q81.27 57.24 81.27 61.75 81.27 66.28 81.27 70.77 81.27 71.26 71.87 70.3C71.83 70.29 71.8 70.29 71.77 70.29Q62.91 69.39 62.32 69.03C62.29 69.01 62.28 68.98 62.28 68.96Q62.29 64.78 62.3 60.6 62.31 56.43 62.32 52.27 62.32 51.57 69.04 51.78C69.95 51.8 70.87 51.84 71.8 51.88 72.53 51.91 73.27 51.95 74.01 51.98Q80.09 52.27 81.08 52.62C81.16 52.62 81.23 52.67 81.27 52.75Q81.27 52.75 81.27 52.75M211.66 21.54C211.65 20.86 211.58 20.16 211.44 19.47Q210.67 15.81 207.08 15.41C207.02 15.41 206.96 15.4 206.9 15.4 206.13 15.31 205.38 15.39 204.69 15.65Q202.73 16.43 202.36 19.34C202.3 19.87 202.27 20.41 202.28 20.96Q202.3 22.79 202.86 24.08C203.04 24.52 203.31 24.94 203.63 25.31 204.36 26.19 205.45 26.76 206.64 26.87 206.78 26.88 206.91 26.9 207.05 26.9 207.66 26.94 208.25 26.86 208.82 26.67 209.45 26.44 210 26.09 210.42 25.63Q211.7 24.28 211.66 21.54 211.66 21.54 211.66 21.54M253.57 49.93C253.54 49.35 253.45 48.76 253.29 48.17Q252.42 44.91 248.88 44.66C248.82 44.66 248.76 44.65 248.7 44.65 247.94 44.61 247.19 44.72 246.52 44.98Q244.59 45.78 244.29 48.33C244.24 48.79 244.23 49.26 244.26 49.73Q244.33 51.29 244.92 52.35C245.12 52.72 245.4 53.05 245.73 53.35 246.49 54.04 247.61 54.46 248.79 54.48 248.93 54.49 249.06 54.49 249.2 54.49 249.82 54.48 250.41 54.39 250.97 54.2 251.58 54 252.12 53.69 252.52 53.3Q253.73 52.18 253.57 49.93 253.57 49.93 253.57 49.93" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>
    </div>

    {/* yellow text */}
    <div className="incubatorText yellowText" style={incubatorTextStyle} ref={yellowTextRef}>
      <svg /* width="110" */ /* height="72.103" */ xmlns="http://www.w3.org/2000/svg" id="svg-element" viewBox="0 0 270.102 72.101" fill="inherit" preserveAspectRatio="xMidYMin meet">
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="white" style={{stroke:'#000',strokeWidth:'0',fill:'white'}}>
          <path d="M127.7 25.66Q127.86 34.58 128.02 43.39 128.02 43.7 124.95 43.77C124.53 43.77 124.11 43.78 123.7 43.77 123.23 43.76 122.76 43.75 122.29 43.74Q117.94 43.6 117.69 43.24C117.68 43.24 117.68 43.22 117.68 43.21Q117.51 34.36 117.34 25.37 116.56 25.37 115.77 25.38 114.21 25.4 113.68 22.95 113.55 22.21 113.53 21.49C113.52 20.41 113.7 19.34 114.06 18.32 114.11 18.2 114.15 18.09 114.19 17.99 114.35 17.58 114.56 17.2 114.82 16.84Q115.33 16.16 116 15.82C116.46 15.58 116.99 15.46 117.52 15.46 118.4 15.44 119.26 15.55 120.11 15.8 120.63 15.95 121.15 16.16 121.64 16.42 121.95 16.59 122.27 16.79 122.56 16.98Q123.52 17.62 123.97 18.28C124.01 18.32 124.04 18.38 124.08 18.43Q127.82 15.34 133.06 15.29C134 15.27 134.93 15.34 135.85 15.49Q138.99 16.01 140.7 17.9C141.3 18.59 141.78 19.39 142.11 20.24Q142.99 22.38 143.15 25.57C143.16 25.91 143.18 26.25 143.18 26.59Q143.31 34.97 143.45 43.21C143.43 43.33 143.34 43.43 143.21 43.46Q142.5 43.78 139.72 43.84C139.25 43.85 138.79 43.86 138.33 43.86 137.83 43.86 137.34 43.85 136.85 43.84Q133.19 43.76 133.18 43.21 133.04 35.29 132.9 27.25 132.86 24.52 130.86 24.46C130.82 24.46 130.78 24.45 130.74 24.46 130.61 24.46 130.48 24.47 130.35 24.5Q129.95 24.58 129.41 24.8C129.3 24.85 129.18 24.89 129.07 24.95 128.92 25.01 128.77 25.07 128.63 25.14Q128.06 25.42 127.79 25.59C127.76 25.61 127.73 25.63 127.7 25.66Q127.7 25.66 127.7 25.66M245.49 43.62Q240.42 32.79 235.32 21.33C235.34 21.23 235.44 21.16 235.56 21.15Q236.48 20.91 240.86 21.35C241.38 21.39 241.92 21.46 242.45 21.52Q245.62 21.89 246.36 22.24C246.46 22.27 246.53 22.34 246.58 22.41Q248.72 28.28 250.83 34.06 252.98 28.63 255.12 23.15C255.18 23.09 255.27 23.05 255.37 23.03Q256.01 22.89 258.19 23.05C258.43 23.07 258.66 23.08 258.89 23.11 259.49 23.15 260.1 23.21 260.71 23.27Q266.04 23.73 266.04 24.21C266.04 24.23 266.04 24.24 266.05 24.26Q259.16 39.85 252.17 53.33C252.14 53.37 252.08 53.41 252.01 53.42Q251.45 53.59 248.9 53.59C247.68 53.59 246.46 53.56 245.24 53.52 244.47 53.5 243.7 53.46 242.93 53.42Q240.28 53.25 240.28 53.03C240.28 53.02 240.28 53.02 240.29 53.02Q242.88 48.23 245.49 43.62 245.49 43.62 245.49 43.62M80.25 19.44Q80.57 33.01 80.91 46.16C80.94 47.08 80.79 48 80.44 48.87Q79.68 50.7 77.69 51.92C77.61 51.97 77.54 52.01 77.46 52.07Q73.91 53.89 68.27 53.89C66.49 53.89 64.72 53.99 62.96 53.79 61.33 53.61 59.72 53.3 58.16 52.89Q57.65 51.95 57.52 51.17C57.5 51.03 57.49 50.89 57.49 50.75 57.46 50.2 57.48 49.64 57.53 49.09Q57.7 47.4 58.37 46.35C58.43 46.24 58.51 46.13 58.6 46.04Q62.67 47.45 67.24 47.39C67.62 47.39 68.01 47.36 68.4 47.3Q70.47 46.97 70.48 45.44C70.48 45.42 70.48 45.38 70.47 45.36Q70.45 44.59 70.43 43.82 67.98 44.24 66.44 44.28C66.39 44.29 66.34 44.29 66.29 44.3 65.02 44.33 63.75 44.21 62.51 43.97 60.45 43.57 58.59 42.64 57.17 41.32Q54.65 38.99 53.94 34.82C53.79 33.93 53.7 33.02 53.67 32.12 53.62 30.76 53.76 29.39 54.07 28.04Q54.92 24.51 57.58 21.98 61.68 17.99 68.67 17.44C70.35 17.29 72.05 17.31 73.71 17.47Q76.79 17.8 79.25 18.93C79.59 19.09 79.93 19.26 80.25 19.43Q80.25 19.44 80.25 19.44M163.37 15.49Q163.29 9.97 163.21 4.47C163.22 4.29 163.34 4.15 163.5 4.08Q164.27 3.65 167.1 3.56C167.39 3.55 167.67 3.55 167.96 3.54 168.46 3.54 168.97 3.54 169.48 3.55Q170.26 3.58 171.14 3.65C171.33 3.66 171.53 3.68 171.72 3.69 171.93 3.7 172.13 3.73 172.34 3.75Q173.87 3.92 173.88 4.22 174.1 19.82 174.29 34.66 175.34 34.68 176.4 34.7C176.9 34.71 177.36 34.95 177.65 35.34Q178.08 35.87 178.32 36.82C178.35 36.95 178.38 37.07 178.41 37.19 178.44 37.36 178.46 37.53 178.48 37.69Q178.54 38.2 178.54 38.89C178.55 38.97 178.56 39.05 178.56 39.12 178.55 39.45 178.51 39.78 178.45 40.1Q178.35 40.56 178.16 41.08C178.03 41.41 177.9 41.73 177.75 42.05 177.54 42.48 177.26 42.88 176.92 43.23Q175.79 44.39 173.93 44.38C173.28 44.37 172.63 44.3 172 44.17 171.45 44.05 170.91 43.87 170.41 43.65 170.14 43.52 169.87 43.38 169.61 43.23Q168.81 42.78 168.41 42.29C168.38 42.25 168.35 42.2 168.31 42.17Q168.03 41.81 167.77 41.46C165.8 43.17 163.19 44.16 160.42 44.26 160.12 44.27 159.81 44.28 159.51 44.28 156.54 44.28 153.69 43.16 151.64 41.18 151.39 40.96 151.15 40.73 150.91 40.49 149.64 39.11 148.69 37.51 148.13 35.77Q147.26 33.16 147.21 29.82C147.18 28.41 147.28 26.99 147.54 25.59Q148.01 23.16 149.1 21.25C149.56 20.44 150.12 19.69 150.76 19.02Q154.45 15.14 160.05 15.13C161.09 15.14 162.13 15.23 163.16 15.44 163.23 15.46 163.3 15.47 163.36 15.49Q163.37 15.49 163.37 15.49M205.85 27.48Q205.88 31.61 205.9 35.71 206.93 35.75 207.95 35.79C208.41 35.8 208.86 36.01 209.16 36.33Q209.34 36.53 209.5 36.8C209.52 36.82 209.53 36.85 209.55 36.87Q209.94 37.58 210.07 38.63C210.12 38.99 210.14 39.34 210.14 39.69Q210.15 41.47 209.11 43.16C208.93 43.45 208.72 43.71 208.48 43.96Q207.57 44.85 206.26 44.83C205.5 44.82 204.74 44.73 204 44.57 202.9 44.35 201.87 43.89 201.02 43.24Q200.12 42.6 199.63 41.7 197.08 44.45 191.88 44.57C191.6 44.58 191.33 44.58 191.06 44.58 189.46 44.57 187.87 44.23 186.43 43.59 185.39 43.1 184.45 42.47 183.64 41.71Q180.6 38.87 180.55 35.01 180.46 26.65 190.59 26.5C191.13 26.5 191.67 26.51 192.21 26.55Q193.87 26.64 195.53 26.74 195.53 26.47 195.52 26.2C195.52 26.01 195.51 25.82 195.49 25.62Q195.39 24.69 194.99 24.34C194.88 24.25 194.76 24.18 194.63 24.13Q193.98 23.87 192.61 23.78 190.31 23.64 186.1 24.29 184.58 21.74 184.38 20.05C184.36 19.9 184.35 19.75 184.35 19.6 184.34 19.34 184.36 19.08 184.39 18.83Q184.54 17.86 185.13 17.47C185.2 17.43 185.27 17.38 185.35 17.36 186.2 17.07 187.1 16.86 188.01 16.74Q190.8 16.37 194.67 16.7C194.71 16.69 194.75 16.69 194.8 16.7Q200.82 17.25 203.32 19.98C204.1 20.84 204.7 21.83 205.07 22.86Q205.83 24.85 205.85 27.48 205.85 27.48 205.85 27.48M-1.23 44.9Q-0.98 32.09 -1.95 15.33C-1.94 15.09 -1.81 14.86 -1.57 14.75Q-0.44 13.99 4.11 13.51C4.7 13.44 5.3 13.39 5.88 13.36Q9.55 13.09 10.18 13.7C10.26 13.77 10.3 13.87 10.32 13.96Q10.89 26.53 11.2 37.83 15.9 37.31 20.57 36.88 21.59 36.79 22.1 38.64C22.13 38.72 22.15 38.8 22.17 38.89Q22.4 39.92 22.45 41 22.5 42.07 22.37 43.2 22.06 44.97 21.28 45.32C21.16 45.37 21.04 45.4 20.91 45.41Q11.55 45.88 2.04 46.7C1.64 46.74 1.24 46.74 0.87 46.69Q0.3 46.6 -0.15 46.34C-0.17 46.32 -0.2 46.31 -0.22 46.3Q-1.12 45.74 -1.23 44.9 -1.23 44.9 -1.23 44.9M39.82 36.5Q37.74 36.61 35.66 36.72C35.65 36.96 35.69 37.18 35.74 37.41Q35.85 37.78 36.03 38.06C36.19 38.3 36.43 38.5 36.73 38.66 37.01 38.79 37.31 38.89 37.64 38.95Q38.48 39.13 39.67 39.08 43.89 38.91 47.63 37.18C47.63 37.18 47.63 37.18 47.64 37.17Q47.72 37.17 48.2 37.85C48.48 38.23 48.73 38.62 48.97 39.02Q49.68 40.26 49.76 41.23C49.76 41.28 49.77 41.33 49.77 41.38Q49.82 42.84 48.69 43.31C47.45 43.93 46.11 44.39 44.71 44.7Q42.17 45.26 39.01 45.33 33.05 45.48 28.82 42.48 24.57 39.6 24.35 34.1C24.28 32.79 24.42 31.45 24.75 30.13 25.23 28.12 26.33 26.19 27.96 24.51 30.2 22.08 33.52 20.45 37.08 20.03 37.33 20 37.58 19.97 37.82 19.95 39.06 19.83 40.3 19.82 41.51 19.9Q44.99 20.18 47.27 21.76C48.38 22.52 49.29 23.48 49.9 24.6 50.45 25.61 50.74 26.71 50.76 27.84 50.82 29.01 50.65 30.18 50.23 31.31Q48.45 35.86 40.69 36.45C40.4 36.47 40.11 36.49 39.82 36.51Q39.82 36.5 39.82 36.5M100.18 34.5Q98.1 34.53 96.03 34.57C96.02 34.84 96.06 35.11 96.12 35.37Q96.21 35.79 96.38 36.11C96.54 36.39 96.78 36.63 97.07 36.82 97.34 36.97 97.65 37.11 97.97 37.18Q98.81 37.41 100 37.4 104.21 37.34 107.97 35.55C107.96 35.54 107.96 35.54 107.98 35.54Q108.06 35.54 108.52 36.31C108.79 36.74 109.04 37.18 109.27 37.62Q109.97 39.01 110.03 40.08C110.03 40.14 110.04 40.19 110.05 40.25Q110.08 41.85 108.95 42.34C107.7 43 106.36 43.48 104.95 43.8Q102.41 44.38 99.25 44.4 93.31 44.46 89.13 40.92 84.95 37.39 84.8 30.97C84.75 29.45 84.9 27.92 85.25 26.41 85.75 24.15 86.88 22.01 88.51 20.21 90.79 17.6 94.12 15.99 97.67 15.79 97.92 15.78 98.17 15.76 98.41 15.76 99.65 15.73 100.88 15.81 102.08 15.99Q105.54 16.57 107.79 18.47C108.89 19.39 109.78 20.51 110.38 21.77 110.91 22.92 111.18 24.15 111.19 25.38 111.24 26.67 111.06 27.95 110.63 29.17Q108.8 34.12 101.05 34.48C100.76 34.49 100.47 34.5 100.18 34.5Q100.18 34.5 100.18 34.5M226.73 31.19Q226.74 38 226.75 44.73C226.71 44.8 226.64 44.84 226.55 44.84Q225.72 45.05 221.29 44.94C220.86 44.92 220.43 44.9 220.01 44.88Q215.82 44.68 215.82 44.42 215.78 36.13 215.75 27.73 214.93 27.67 214.12 27.62C213.69 27.59 213.3 27.41 213.03 27.11Q212.84 26.93 212.67 26.68C212.63 26.62 212.6 26.56 212.56 26.5Q212.06 25.59 212 24.34C211.99 24.21 211.98 24.08 211.99 23.95 211.97 23.3 212.02 22.66 212.11 22.04Q212.43 19.96 213.58 19.15C214.2 18.73 215 18.55 215.82 18.66 216.6 18.73 217.35 18.9 218.09 19.17 218.94 19.48 219.72 19.94 220.37 20.52Q222.19 22.09 222.2 23.86C222.76 22.96 223.52 22.17 224.45 21.52 224.81 21.27 225.19 21.05 225.61 20.85 226.21 20.56 226.86 20.33 227.56 20.18 228.34 20.02 229.15 19.97 229.99 20.06Q232.63 20.32 233.69 21.27C233.92 21.48 234.11 21.71 234.23 21.97 234.27 22.06 234.3 22.16 234.32 22.26Q234.41 22.62 234.41 23.15C234.4 23.28 234.39 23.43 234.37 23.58Q234.26 24.37 233.83 25.82 233.35 27.36 232.87 28.19C232.8 28.31 232.73 28.43 232.65 28.55Q232.04 29.37 231.92 29.37C231.92 29.37 231.92 29.37 231.92 29.37Q231.81 29.36 231.08 29.04C230.99 29 230.9 28.96 230.81 28.91 230.57 28.81 230.34 28.72 230.1 28.64Q229.52 28.45 229.03 28.41 226.83 28.24 226.73 30.93C226.73 31.01 226.73 31.1 226.73 31.19Q226.73 31.19 226.73 31.19M70.22 36.31Q70.08 31.33 69.95 26.29C69.66 26.24 69.36 26.21 69.07 26.2 68.89 26.19 68.72 26.2 68.55 26.21 67.19 26.21 65.94 26.93 65.36 28.02Q64.65 29.28 64.66 31.43C64.66 31.52 64.66 31.62 64.67 31.72Q64.76 34.99 66.36 35.91C66.59 36.06 66.86 36.19 67.13 36.29Q67.69 36.5 68.24 36.52C68.3 36.52 68.36 36.52 68.42 36.52 68.7 36.51 68.99 36.48 69.27 36.46Q69.71 36.41 70.09 36.34C70.13 36.33 70.18 36.32 70.23 36.31Q70.22 36.31 70.22 36.31M163.64 34.45Q163.58 29.71 163.51 24.91C163.23 24.75 162.94 24.62 162.65 24.52 162.28 24.4 161.89 24.33 161.51 24.32Q158.14 24.3 158.22 30C158.22 30.46 158.26 30.93 158.3 31.4Q158.47 32.79 158.96 33.67C159.04 33.82 159.13 33.97 159.25 34.11 159.41 34.32 159.59 34.52 159.81 34.7Q160.55 35.36 161.39 35.37 162.52 35.38 163.56 34.51C163.58 34.49 163.61 34.47 163.64 34.45Q163.64 34.45 163.64 34.45M195.61 36.31Q195.6 34.27 195.58 32.22 194.73 32.19 193.89 32.15 191.6 32.06 191.13 33.61C191.05 33.92 191.01 34.24 191.01 34.56 191.01 34.79 191.05 35.03 191.1 35.26Q191.27 35.94 191.76 36.38C192.17 36.73 192.7 36.95 193.26 37.02 193.37 37.03 193.48 37.04 193.6 37.04 194.19 37.05 194.76 36.9 195.22 36.6 195.35 36.51 195.48 36.42 195.61 36.31Q195.61 36.31 195.61 36.31M35.4 29.97Q35.43 30.73 35.46 31.48 37.09 31.37 38.72 31.26C38.98 31.24 39.25 31.19 39.51 31.12Q40.39 30.85 40.58 30.07C40.63 29.86 40.66 29.66 40.65 29.46 40.64 29.18 40.59 28.91 40.5 28.65Q40.16 27.75 39.03 27.58C38.72 27.54 38.41 27.53 38.1 27.56 37.72 27.58 37.36 27.66 37.01 27.79 36.69 27.9 36.4 28.07 36.16 28.27 35.79 28.56 35.55 28.93 35.46 29.32 35.4 29.53 35.38 29.75 35.4 29.97Q35.4 29.97 35.4 29.97M95.87 26.9Q95.88 27.75 95.9 28.61 97.53 28.57 99.15 28.54C99.41 28.53 99.68 28.49 99.94 28.42Q100.82 28.16 101.03 27.3C101.08 27.07 101.11 26.85 101.1 26.6 101.1 26.3 101.05 25.99 100.96 25.7Q100.63 24.66 99.51 24.41C99.21 24.34 98.9 24.31 98.59 24.33 98.2 24.33 97.84 24.39 97.49 24.52 97.18 24.63 96.89 24.81 96.64 25.01 96.28 25.31 96.03 25.72 95.93 26.16 95.88 26.4 95.85 26.65 95.87 26.9Q95.87 26.9 95.87 26.9" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>

      <svg /* width="100" */ /* height="72.103" */ xmlns="http://www.w3.org/2000/svg" id="svg-element" viewBox="0 0 253.102 72.101" fill="inherit" preserveAspectRatio="xMidYMin meet">
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="white" style={{stroke:'#000',strokeWidth:'0',fill:'white'}}>
          <path d="M135.7 1.08Q139.75 1.08 143.8 1.08 147.85 1.08 151.9 1.08 155.95 1.08 160 1.08 164.05 1.09 168.1 1.14 170 1.34 170.02 9.98C170.01 10.69 170 11.4 169.96 12.1Q169.9 13.27 169.77 14.58C169.72 15.12 169.65 15.66 169.59 16.2Q169.15 19.74 167.95 19.67 163.07 19.47 158.19 19.34 153.31 19.25 148.44 19.19 148.39 22.87 148.35 26.55 150 26.57 151.65 26.58C153.71 26.59 155.78 26.82 157.81 27.27Q161.58 28.15 164.4 30.1C165.6 30.92 166.68 31.9 167.63 33.01 168.72 34.3 169.65 35.69 170.39 37.17 171.14 38.64 171.72 40.19 172.09 41.79Q172.91 45.06 172.91 48.93C172.94 51.71 172.45 54.5 171.44 57.18 170.82 58.78 170.01 60.3 169.03 61.72 168.06 63.15 166.91 64.47 165.63 65.64 163.81 67.28 161.79 68.61 159.64 69.62 157.48 70.61 155.18 71.29 152.81 71.64 150.92 71.95 149.01 71.9 147.1 71.9Q141.45 71.9 137.32 71.31 133.2 70.53 130.6 68.95 129.8 67.68 129.81 64.96 129.81 62.69 130.37 58.82C130.45 58.28 130.53 57.75 130.62 57.22Q131.43 52.19 132.83 52.19C132.84 52.19 132.86 52.19 132.88 52.2Q133 52.25 133.3 52.49C133.34 52.52 133.38 52.55 133.43 52.59 134.53 53.04 135.64 53.46 136.76 53.85Q141.45 55.48 144.28 55.48C145.23 55.48 146.18 55.37 147.11 55.14 148.35 54.83 149.5 54.23 150.49 53.42Q152.94 51.37 152.95 48.18C152.96 47.07 152.81 45.98 152.49 44.92Q151.38 41.47 147.54 40.53C146.5 40.29 145.42 40.17 144.35 40.18Q140.04 40.23 135.74 40.27 134.9 40.43 134.07 39.72C133.95 39.62 133.84 39.52 133.74 39.41 133.24 38.88 132.92 38.21 132.81 37.5 132.76 37.22 132.74 36.93 132.74 36.64Q132.74 32.71 132.74 28.77 132.74 24.82 132.73 20.88 132.73 16.93 132.72 13 132.72 9.07 132.71 5.16C132.7 4.66 132.73 4.17 132.82 3.7Q133.28 1.17 135.53 1.08C135.59 1.08 135.64 1.08 135.7 1.08Q135.7 1.08 135.7 1.08M8.19 50.05C9.39 50.32 10.59 50.59 11.78 50.83Q15.51 51.58 18.06 51.86C18.59 51.93 19.12 51.97 19.66 52.01Q23.47 52.23 26.53 50.42C27.74 49.67 28.66 48.67 29.22 47.5Q29.76 46.41 30.01 45.07C30.05 44.84 30.09 44.6 30.12 44.37Q25.48 45.33 22.56 45.34C22.41 45.33 22.26 45.34 22.11 45.33 19.97 45.28 17.82 45.06 15.71 44.67Q12.69 44.09 10.23 43.07 7.78 42.09 5.94 40.78C3.9 39.4 2.53 37.82 1.96 36.12Q1.21 34.09 1.61 31.44C1.51 28.97 1.65 26.38 2.19 23.81 2.57 22.02 3.17 20.29 3.98 18.64 4.79 17 5.82 15.45 7.04 14.04 8.48 12.41 10.17 11.01 12.03 9.87 13.89 8.74 15.92 7.86 18.05 7.26 20.23 6.63 22.46 6.2 24.7 6 27.43 5.7 30.15 5.8 32.77 6.3 34.71 6.69 36.53 7.34 38.2 8.24 39.86 9.14 41.35 10.28 42.63 11.63Q45.08 14.16 46.62 17.75 48.15 21.33 48.78 25.93C49.06 28.14 49.19 30.36 49.19 32.58Q49.19 35.39 49 37.99 48.82 40.57 48.45 42.94 47.72 47.67 46.26 51.53C45.3 54.17 43.93 56.65 42.2 58.91 40.4 61.27 38.02 63.16 35.27 64.47 32.52 65.77 29.4 66.49 26.1 66.56 24.61 66.61 23.1 66.38 21.61 66.25Q18.47 65.96 15.91 65.74 13.35 65.34 11.37 64.82 7.41 63.79 5.76 62.32C5.01 61.7 4.57 60.9 4.56 60.08 4.55 59.51 4.57 58.95 4.63 58.39Q4.81 56.52 5.5 54.09C5.53 53.97 5.56 53.85 5.6 53.74 5.72 53.31 5.86 52.89 6.01 52.48Q6.7 50.72 7.48 50.23C7.67 50.1 7.92 50.04 8.19 50.05Q8.19 50.05 8.19 50.05M123.92 10.26Q122.85 13.99 121.78 17.73 120.71 21.48 119.64 25.23 118.57 28.98 117.49 32.72 116.42 36.46 115.34 40.2 114.26 43.93 113.18 47.65 112.1 51.37 111.02 55.09 109.94 58.79 108.86 62.49 107.78 66.17 106.7 69.84C106.56 70.12 106.32 70.34 106.02 70.45Q104.24 71.28 97.99 71.39C97.36 71.4 96.73 71.41 96.1 71.41 95.3 71.41 94.51 71.4 93.71 71.39Q85.85 71.28 84.8 70.48C84.72 70.42 84.65 70.35 84.59 70.27 84.46 70.12 84.4 69.94 84.4 69.76Q85.46 66.69 86.51 63.63 87.56 60.59 88.61 57.55 89.66 54.51 90.71 51.48 91.76 48.44 92.8 45.4 93.85 42.36 94.9 39.32 95.94 36.26 96.98 33.2 98.02 30.13 99.06 27.06 100.1 23.97 101.14 20.88 98.61 20.9 96.07 20.93 93.54 20.96 91.01 21 88.47 21.05 85.94 21.11 83.41 21.17 80.87 21.25C80.18 21.24 79.55 20.87 79.23 20.27Q78.14 18.62 77.91 14.11C77.87 13.32 77.85 12.52 77.86 11.72Q77.85 8.42 78.48 5.26C78.55 4.87 78.65 4.49 78.77 4.11Q79.44 2.07 80.71 1.95 85.08 1.62 89.45 1.57 93.82 1.55 98.2 1.53 102.57 1.52 106.95 1.51 111.32 1.49 115.7 1.48C117.56 1.47 119.34 2.26 120.58 3.64Q121.46 4.55 122.21 5.86C122.71 6.78 123.14 7.75 123.48 8.74 123.66 9.24 123.8 9.75 123.92 10.26Q123.92 10.26 123.92 10.26M188.37 62.8Q191.36 58.87 194.34 55.02 197.31 51.27 200.26 47.63 203.21 44.09 206.15 40.66 209.08 37.33 212.01 34.13 214.94 31.03 217.86 28.05 220.79 25.19 223.73 22.47 226.68 19.86 229.64 17.38 232.61 14.99 235.58 12.63C235.79 12.52 236.03 12.45 236.28 12.39 236.65 12.31 237.06 12.31 237.48 12.39Q241.01 13.02 243.87 15.71C243.96 15.79 244.06 15.87 244.15 15.95Q245.07 16.74 245.26 17.22C245.29 17.3 245.3 17.38 245.31 17.46 245.3 17.55 245.28 17.64 245.26 17.74Q245.2 17.88 245.11 17.99C245.06 18.06 244.98 18.13 244.89 18.18Q241.89 20.17 238.93 22.38 235.99 24.83 233.07 27.49 230.17 30.3 227.27 33.23 224.38 36.27 221.48 39.41 218.58 42.64 215.67 45.98 212.75 49.41 209.81 52.95 206.86 56.6 203.9 60.34 200.93 64.17 197.95 68.07C197.73 68.27 197.49 68.45 197.23 68.6 196.86 68.82 196.44 68.8 196.02 68.83 194.56 69.01 193.12 68.91 191.93 68.27Q190.57 67.57 189.3 66.25C189.11 66.06 188.92 65.88 188.75 65.68Q187.98 64.79 187.97 64.15 187.97 63.55 188.17 63.13C188.22 63.01 188.29 62.9 188.37 62.8Q188.37 62.8 188.37 62.8M202.23 6.94C200.39 5.97 198.42 5.34 196.44 4.97 196.09 4.9 195.74 4.85 195.4 4.81 193.48 4.53 191.62 4.63 189.94 5.08 188.25 5.54 186.74 6.37 185.51 7.54Q182.56 10.33 181.71 15.77C181.46 17.43 181.34 19.11 181.36 20.81 181.36 22.17 181.44 23.54 181.62 24.9Q181.96 27.52 182.76 29.66C183.4 31.44 184.4 33.07 185.73 34.48Q187.89 36.69 190.66 37.8 193.43 38.87 196.79 38.88 200.15 38.88 202.88 37.83 205.62 36.81 207.72 34.8 210.62 32.1 211.48 27.69C211.75 26.27 211.88 24.83 211.86 23.38Q211.83 19.3 210.57 16.1C209.92 14.36 208.88 12.66 207.5 11.11 206.07 9.46 204.26 8.03 202.23 6.94Q202.23 6.94 202.23 6.94M243.39 34.24C241.58 33.9 239.65 33.83 237.71 34.04 237.37 34.06 237.03 34.1 236.69 34.14 234.81 34.33 232.98 34.79 231.33 35.48 229.67 36.16 228.19 37.1 226.98 38.26Q224.1 41 223.34 45.57C223.12 46.99 223.03 48.41 223.08 49.84 223.1 51 223.21 52.16 223.41 53.31Q223.8 55.55 224.65 57.32C225.32 58.82 226.36 60.16 227.73 61.27Q229.96 63.02 232.77 63.72 235.59 64.4 238.99 64.02 242.39 63.64 245.14 62.32 247.88 61.03 249.92 58.89 252.66 56.09 253.24 51.82C253.42 50.44 253.24 49.06 253.15 47.68Q252.87 43.78 251.74 40.78C251.06 39.19 249.99 37.77 248.61 36.62 247.17 35.45 245.38 34.65 243.39 34.24Q243.39 34.24 243.39 34.24M73.48 52.7Q73.47 57.13 73.45 61.57 73.44 66.02 73.43 70.44 73.43 70.93 64.11 70.08C64.07 70.07 64.04 70.07 64.01 70.07Q55.22 69.28 54.64 68.92C54.61 68.9 54.6 68.88 54.6 68.85Q54.6 64.69 54.61 60.54 54.62 56.41 54.63 52.29 54.63 51.6 61.31 51.77C62.22 51.79 63.14 51.82 64.05 51.86 64.78 51.89 65.52 51.92 66.26 51.95Q72.31 52.23 73.29 52.57C73.37 52.57 73.44 52.62 73.48 52.7Q73.48 52.7 73.48 52.7M24.69 22.13C24.01 22.19 23.32 22.33 22.65 22.55 21.55 22.91 20.58 23.54 19.85 24.38 19.05 25.3 18.51 26.34 18.3 27.41 18.2 27.92 18.14 28.42 18.15 28.91 18.13 29.55 18.24 30.17 18.44 30.76 18.74 31.57 19.31 32.28 20.11 32.82 21.19 33.58 22.6 34.02 24.11 34.07 24.49 34.08 24.87 34.08 25.26 34.07 25.98 34.03 26.71 33.95 27.42 33.81Q29.15 33.47 30.42 32.68 30.43 28.15 29.64 25.62C29.51 25.19 29.34 24.77 29.15 24.37 28.91 23.88 28.57 23.44 28.15 23.06Q26.86 21.93 24.69 22.13 24.69 22.13 24.69 22.13M201.37 22.43C201.36 21.76 201.3 21.08 201.17 20.41Q200.42 16.84 196.82 16.31C196.76 16.3 196.7 16.29 196.64 16.28 195.87 16.17 195.11 16.22 194.42 16.44Q192.45 17.13 192.06 19.98C191.99 20.51 191.95 21.04 191.97 21.58Q191.98 23.38 192.52 24.66C192.71 25.09 192.97 25.51 193.29 25.89 194.02 26.77 195.11 27.35 196.29 27.48 196.43 27.5 196.56 27.51 196.7 27.52 197.31 27.56 197.91 27.5 198.48 27.32 199.11 27.12 199.67 26.79 200.1 26.35Q201.39 25.07 201.37 22.43 201.37 22.43 201.37 22.43M243.03 48.28C243 47.67 242.91 47.07 242.75 46.48Q241.89 43.4 238.34 43.58C238.28 43.58 238.22 43.58 238.16 43.59 237.4 43.63 236.65 43.8 235.98 44.11Q234.04 45.04 233.74 47.56C233.69 48.03 233.66 48.49 233.69 48.96Q233.75 50.53 234.33 51.58C234.53 51.93 234.8 52.27 235.14 52.56 235.89 53.23 237 53.6 238.18 53.55 238.32 53.55 238.46 53.55 238.6 53.53 239.21 53.48 239.8 53.35 240.36 53.11 240.98 52.84 241.52 52.46 241.93 52.01Q243.16 50.67 243.03 48.28 243.03 48.28 243.03 48.28" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>
    </div>

    {/* green text */}
    <div className="incubatorText greenText" style={incubatorTextStyle} ref={greenTextRef}>
      <svg /* width="100" */ /* height="72.103" */ xmlns="http://www.w3.org/2000/svg" id="svg-element" viewBox="0 0 218.641 43.141" fill="inherit" preserveAspectRatio="xMidYMin meet" style={{paddingBottom:'10px'}}>
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="white" style={{stroke:'#000',strokeWidth:'0',fill:'white'}}>
          <path d="M92.47 23.25Q92.47 32.82 92.51 42.26C92.48 42.32 92.41 42.38 92.33 42.39Q91.54 42.66 87.38 42.67C86.88 42.67 86.39 42.66 85.9 42.65Q83.08 42.6 82.43 42.32C82.34 42.3 82.27 42.23 82.25 42.14Q82.24 33.64 82.24 25.02 82.24 22.79 81.16 22.24C80.88 22.1 80.58 22.03 80.27 22.05 80.04 22.05 79.82 22.09 79.6 22.17Q78.98 22.38 78.2 22.94C77.99 23.08 77.78 23.25 77.58 23.41Q77.57 32.88 77.57 42.2C77.54 42.31 77.45 42.4 77.34 42.42Q76.66 42.71 73.88 42.76C73.4 42.77 72.92 42.78 72.44 42.78 71.94 42.78 71.45 42.77 70.96 42.76Q68.1 42.7 67.49 42.36C67.4 42.33 67.33 42.24 67.32 42.15Q67.33 32.72 67.36 23.16 66.61 23.18 65.87 23.2C65.24 23.22 64.68 22.87 64.44 22.32Q64.05 21.6 63.95 20.28C63.92 19.91 63.9 19.55 63.91 19.2 63.91 18.21 64.07 17.23 64.36 16.26 64.44 15.98 64.53 15.7 64.64 15.42Q65.6 12.74 67.74 12.63C69.08 12.56 70.41 12.85 71.6 13.45 71.7 13.5 71.78 13.55 71.88 13.6Q73.44 14.45 74.04 15.26C74.14 15.4 74.23 15.54 74.3 15.7 75.38 14.69 76.6 13.85 77.94 13.22 79.38 12.56 80.94 12.2 82.52 12.18 83.62 12.16 84.72 12.3 85.78 12.58 87.3 13.01 88.69 13.84 89.79 14.98Q93.03 12.11 97.58 12.1C99.04 12.06 100.5 12.31 101.87 12.84Q107.45 15.11 107.42 24.23 107.44 33.3 107.51 42.25C107.48 42.32 107.41 42.38 107.33 42.39Q106.54 42.66 102.38 42.66C101.88 42.66 101.39 42.65 100.9 42.64Q98.08 42.6 97.43 42.31C97.34 42.29 97.27 42.23 97.25 42.14Q97.21 33.58 97.2 24.91 97.2 22.68 96.11 22.11C95.83 21.97 95.53 21.9 95.23 21.91 94.98 21.91 94.73 21.96 94.49 22.04Q93.62 22.33 92.47 23.25 92.47 23.25 92.47 23.25M139.37 23.39Q139.51 32.9 139.77 42.26C139.74 42.33 139.67 42.39 139.6 42.4Q138.81 42.67 134.66 42.67C134.16 42.67 133.67 42.66 133.18 42.65Q130.36 42.6 129.7 42.32C129.61 42.3 129.54 42.23 129.51 42.13Q129.35 33.6 129.28 24.96 129.28 22.73 128.21 22.15C127.93 22 127.63 21.93 127.33 21.94 127.1 21.94 126.88 21.98 126.67 22.05Q126.05 22.24 125.27 22.79C125.06 22.93 124.85 23.09 124.65 23.25Q124.7 32.79 124.84 42.2C124.81 42.3 124.72 42.39 124.61 42.41Q123.94 42.7 121.16 42.76C120.68 42.77 120.2 42.78 119.72 42.78 119.22 42.78 118.73 42.77 118.24 42.76Q115.38 42.69 114.76 42.35C114.67 42.31 114.59 42.22 114.58 42.14Q114.49 32.5 114.47 22.73 113.72 22.73 112.98 22.73C112.35 22.73 111.79 22.36 111.55 21.79Q111.16 21.03 111.05 19.68C111.03 19.3 111.01 18.93 111.02 18.57 111.02 17.56 111.18 16.56 111.46 15.59 111.55 15.31 111.64 15.03 111.76 14.76Q112.73 12.09 114.88 12.09C116.23 12.09 117.56 12.44 118.74 13.09 118.84 13.14 118.93 13.19 119.03 13.25Q120.57 14.16 121.17 14.98C121.27 15.12 121.36 15.27 121.42 15.43 122.5 14.46 123.73 13.65 125.07 13.06 126.52 12.44 128.07 12.12 129.64 12.13 130.73 12.13 131.82 12.29 132.87 12.59 134.36 13.05 135.71 13.91 136.77 15.08Q139.98 12.26 144.36 12.37C145.75 12.39 147.12 12.69 148.41 13.27Q153.66 15.76 153.93 24.7 154.32 33.54 154.76 42.27C154.73 42.34 154.66 42.39 154.58 42.4Q153.81 42.67 149.65 42.67C149.15 42.67 148.66 42.66 148.17 42.65Q145.35 42.6 144.69 42.32C144.6 42.3 144.53 42.23 144.5 42.14Q144.21 33.7 144.01 25.13 143.98 22.92 142.92 22.33C142.64 22.19 142.35 22.11 142.05 22.11 141.81 22.11 141.57 22.15 141.33 22.22Q140.49 22.5 139.37 23.39 139.37 23.39 139.37 23.39M201.25 25.74Q202.5 34.11 203.16 42.29 203.18 42.59 200.11 42.64C199.69 42.64 199.27 42.64 198.86 42.64 198.39 42.63 197.92 42.61 197.45 42.6Q193.09 42.43 192.82 42.08C192.81 42.08 192.81 42.06 192.81 42.05Q191.87 33.42 190.53 24.71 189.76 24.67 188.98 24.63 187.45 24.55 186.55 22.12 186.31 21.38 186.18 20.68C185.98 19.62 185.97 18.58 186.15 17.61 186.16 17.5 186.18 17.39 186.2 17.29 186.28 16.9 186.41 16.55 186.58 16.21Q186.93 15.59 187.5 15.3C187.89 15.1 188.35 15.02 188.85 15.07 189.67 15.12 190.51 15.29 191.37 15.6 191.91 15.79 192.45 16.04 192.98 16.33 193.33 16.52 193.68 16.73 194.02 16.95Q195.12 17.64 195.73 18.31C195.78 18.36 195.83 18.42 195.88 18.47Q198.78 15.77 204.25 16.11C205.27 16.16 206.36 16.28 207.48 16.48Q211.58 17.15 214.74 19.07C215.79 19.81 216.61 20.67 217.18 21.61Q217.45 23.91 218 27.34C218.06 27.71 218.12 28.07 218.19 28.44Q218.58 36.11 217.63 42.03C217.64 42.12 217.69 42.24 217.78 42.35Q217.7 42.72 214.89 42.75C214.43 42.76 213.96 42.77 213.5 42.77 213 42.77 212.51 42.76 212.01 42.75Q208.35 42.66 208.33 42.15 208.09 35.13 207.32 27.77 206.79 25.13 204.5 24.87C204.45 24.86 204.4 24.85 204.37 24.86 204.22 24.85 204.07 24.84 203.93 24.86Q203.5 24.9 202.95 25.06C202.84 25.09 202.72 25.13 202.61 25.17 202.46 25.22 202.32 25.27 202.17 25.32Q201.59 25.54 201.33 25.67C201.31 25.7 201.28 25.71 201.25 25.74Q201.25 25.74 201.25 25.74M22.87 5.33C21.62 5.3 20.35 5.36 19.09 5.49Q11.33 6.28 6.01 10.83 2.46 12.73 1.09 16.22C0.59 18.62 0.34 21.17 0.26 23.75 0.23 24.66 0.23 25.59 0.25 26.51Q0.35 30.49 1.16 33.02C1.91 35.07 3.27 36.91 5.13 38.47 6.84 40 8.97 41.25 11.36 42.06 13.52 42.77 15.81 42.85 18.12 42.87Q23.04 42.87 26.65 41.87 30.26 40.61 30.28 38.49 30.29 37.4 29.48 35.42C29.36 35.13 29.23 34.86 29.1 34.58Q28.45 33.18 27.69 32.26C27.67 32.23 27.65 32.21 27.63 32.18Q26.92 31.32 26.55 31.12C26.49 31.08 26.42 31.07 26.36 31.07 26.31 31.06 26.27 31.07 26.23 31.07Q26.07 31.08 25.97 31.12C25.94 31.14 25.9 31.16 25.88 31.18 25.83 31.22 25.78 31.27 25.73 31.3Q25.22 31.7 24.32 31.98C24.03 32.08 23.73 32.16 23.44 32.22 23.36 32.23 23.29 32.25 23.22 32.26Q21.64 32.61 20.35 32.63C20.21 32.63 20.07 32.63 19.93 32.63 17.95 32.62 16.1 31.87 14.84 30.56Q13.31 29.04 12.92 26.29C12.8 25.44 12.76 24.6 12.79 23.76 12.8 23 12.87 22.24 13 21.5Q13.21 20.26 13.64 19.29C13.96 18.51 14.46 17.81 15.09 17.2Q17.26 15.13 20.71 15.03C20.88 15.02 21.05 15.01 21.22 15.02Q22.05 15.05 23.12 15.26C23.18 15.27 23.24 15.28 23.31 15.29Q24.54 15.55 24.89 15.8C24.9 15.81 24.92 15.82 24.93 15.83Q25.14 15.97 25.33 16.02C25.41 16.05 25.49 16.05 25.57 16.06Q26.43 16.01 27.67 14.15C27.88 13.83 28.07 13.51 28.26 13.18 28.31 13.11 28.35 13.02 28.4 12.95Q29.35 11.22 29.71 9.87C29.83 9.4 29.9 8.93 29.92 8.46 29.92 8.21 29.88 7.98 29.79 7.75Q29.29 6.42 26.68 5.8C25.44 5.52 24.17 5.36 22.87 5.33Q22.87 5.33 22.87 5.33M37.19 39.32Q33.49 35.56 33.57 28.91 33.65 23.64 36.04 20.1C36.44 19.48 36.92 18.88 37.45 18.33 39.49 16.16 42.26 14.67 45.24 14.17 45.99 14.03 46.76 13.93 47.52 13.89 48.99 13.77 50.45 13.86 51.86 14.15 54.04 14.61 55.99 15.68 57.48 17.25Q60.82 20.77 61.1 26.96C61.12 27.38 61.13 27.79 61.13 28.22 61.13 29.7 60.97 31.19 60.68 32.64Q60.11 35.3 58.8 37.35C58.39 38.01 57.91 38.63 57.37 39.21 55.35 41.32 52.58 42.67 49.59 42.99 48.82 42.91 48.05 42.87 47.28 42.87 45.76 42.86 44.25 42.95 42.79 42.56 40.62 41.98 38.68 40.86 37.19 39.32Q37.19 39.32 37.19 39.32M162.26 39.22Q158.31 35.25 157.92 28.23 157.63 22.61 159.67 18.99C160.01 18.36 160.42 17.77 160.88 17.22 162.62 15.14 165.07 13.91 167.78 13.76 168.46 13.71 169.16 13.71 169.86 13.77 171.2 13.83 172.57 14.12 173.94 14.58 176.02 15.3 178.01 16.58 179.67 18.25Q183.44 21.93 184.64 27.81C184.72 28.2 184.78 28.6 184.84 29 185.04 30.4 185.07 31.8 184.95 33.16Q184.68 35.66 183.6 37.58C183.25 38.2 182.84 38.79 182.35 39.34 180.54 41.37 177.89 42.67 174.92 42.99 174.15 42.91 173.37 42.87 172.6 42.87 171.08 42.86 169.58 42.95 168.09 42.55 165.88 41.96 163.86 40.81 162.26 39.22Q162.26 39.22 162.26 39.22M44.04 28.12C44.04 28.27 44.04 28.43 44.03 28.58 44.02 29.16 44.05 29.74 44.14 30.32Q44.42 32.31 45.5 33.11C46.02 33.49 46.69 33.69 47.37 33.66Q50.59 33.61 50.77 28.87C50.77 28.72 50.79 28.56 50.79 28.41 50.79 27.81 50.76 27.22 50.68 26.64Q50.39 24.62 49.32 23.82C48.79 23.45 48.13 23.27 47.46 23.32Q44.24 23.45 44.04 28.12 44.04 28.12 44.04 28.12M168.05 27.95C168.07 28.1 168.08 28.26 168.09 28.42 168.13 29.01 168.22 29.61 168.36 30.19Q168.82 32.22 169.96 33.07C170.52 33.47 171.19 33.69 171.86 33.68Q175.04 33.74 174.71 29.07C174.7 28.92 174.69 28.76 174.67 28.6 174.61 28.02 174.51 27.43 174.37 26.85Q173.85 24.83 172.72 23.96C172.16 23.55 171.51 23.31 170.87 23.31Q167.78 23.19 168.05 27.95 168.05 27.95 168.05 27.95" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>
      
      <svg /* width="100" */ /* height="72.103" */ xmlns="http://www.w3.org/2000/svg" id="svg-element" viewBox="0 0 187.201 72.103" fill="inherit" preserveAspectRatio="xMidYMin meet">
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="white" style={{stroke:'#000',strokeWidth:'0',fill:'white'}}>
          <path d="M6.85 9.64Q10.83 9.04 14.81 8.43 18.8 7.82 22.78 7.21 26.76 6.6 30.74 5.98 34.72 5.37 38.7 4.75 40.58 4.46 40.59 12.18C40.58 12.82 40.57 13.47 40.53 14.11Q40.47 15.17 40.34 16.38C40.29 16.88 40.22 17.38 40.17 17.88Q39.72 21.16 38.55 21.24 33.72 21.58 28.88 21.89 24.03 22.14 19.15 22.29 19.07 25.24 19.01 28.24 20.67 28.26 22.34 28.26C24.41 28.22 26.48 28.36 28.5 28.68Q32.26 29.29 35.07 30.89C36.27 31.58 37.35 32.42 38.29 33.4 39.38 34.56 40.31 35.84 41.06 37.2 41.81 38.58 42.39 40.04 42.78 41.56Q43.62 44.69 43.68 48.38C43.74 51.03 43.3 53.64 42.37 56.07 41.81 57.5 41.06 58.83 40.15 60.03 39.25 61.23 38.19 62.29 36.98 63.21 35.3 64.49 33.41 65.49 31.39 66.19 29.36 66.87 27.19 67.25 24.95 67.31 23.16 67.38 21.34 67.13 19.52 66.91Q14.15 66.29 10.2 65.33 6.21 64.24 3.5 62.88 2.52 61.95 2.17 59.99 1.87 58.36 1.94 55.56C1.95 55.18 1.96 54.8 1.99 54.41Q2.19 50.75 3.67 50.64C3.68 50.64 3.7 50.64 3.72 50.64Q3.86 50.67 4.2 50.83C4.25 50.85 4.29 50.87 4.34 50.89 5.56 51.15 6.76 51.4 7.98 51.64Q12.93 52.82 15.77 52.84C16.73 52.85 17.67 52.78 18.58 52.62 19.79 52.39 20.91 51.93 21.84 51.28Q24.18 49.6 24.06 46.85C24.03 45.9 23.84 44.95 23.48 44.03Q22.25 41.02 18.35 40.19C17.27 39.97 16.18 39.86 15.08 39.88Q10.63 39.93 6.16 40.03 5.28 40.19 4.39 39.54C4.27 39.44 4.16 39.35 4.04 39.24 3.53 38.73 3.19 38.08 3.07 37.39 3.02 37.12 2.99 36.83 3 36.56Q2.99 32.74 2.99 28.96 3.02 25.39 3.13 22.53 3.28 20.05 3.44 17.63 3.6 15.22 3.75 12.79C3.76 12.48 3.82 12.16 3.92 11.85Q4.46 10.05 6.68 9.66C6.73 9.66 6.79 9.65 6.85 9.64Q6.85 9.64 6.85 9.64M69.2 70.1C70.9 70.79 72.67 71.29 74.47 71.63 76.27 71.96 78.1 71.88 79.94 71.9 80.45 71.9 80.97 71.92 81.49 71.94 83.31 71.98 85.1 71.79 86.84 71.39 88.58 70.99 90.27 70.42 91.88 69.68 93.49 68.94 95.02 68.04 96.45 66.99 97.87 65.94 99.19 64.73 100.38 63.38 102.4 61.06 104.01 58.41 105.11 55.52Q106.62 51.69 107.36 46.95 107.73 44.59 107.91 42 108.1 39.41 108.1 36.59 108.11 31.44 107.5 27 106.9 22.54 105.68 18.81C105.13 17.05 104.42 15.36 103.56 13.76 102.7 12.15 101.69 10.64 100.53 9.23 99.15 7.56 97.56 6.08 95.81 4.84 94.05 3.6 92.14 2.6 90.11 1.85 88.51 1.28 86.87 0.86 85.2 0.58 83.53 0.3 81.84 0.17 80.15 0.19Q76.98 0.19 74.11 0.76 71.24 1.32 68.67 2.47 66.1 3.66 63.83 5.51 61.58 7.43 59.62 9.92 57.66 12.38 56.2 15.3 54.74 18.17 53.77 21.48 52.81 24.76 52.34 28.49 51.87 32.18 51.9 36.37C51.91 38.63 52.04 40.9 52.3 43.15Q52.88 48.19 54.31 52.41C54.89 54.22 55.64 55.98 56.54 57.67 57.44 59.38 58.5 61.02 59.7 62.57 60.96 64.22 62.39 65.71 63.98 67 65.57 68.27 67.33 69.31 69.2 70.1Q69.2 70.1 69.2 70.1M121.98 64.46Q124.76 60.37 127.56 56.32 130.39 52.35 133.24 48.46 136.13 44.65 139.03 40.93 141.94 37.3 144.86 33.76 147.76 30.3 150.65 26.95 153.51 23.71 156.33 20.58 159.11 17.58 161.83 14.7 164.52 11.93 167.2 9.2C167.39 9.08 167.61 8.99 167.84 8.92 168.18 8.82 168.57 8.82 168.96 8.9Q172.3 9.56 175.22 12.62C175.32 12.71 175.41 12.8 175.52 12.9Q176.52 13.82 176.79 14.39C176.84 14.48 176.87 14.58 176.89 14.68 176.91 14.79 176.91 14.9 176.91 15.02Q176.89 15.19 176.82 15.33C176.79 15.41 176.73 15.49 176.65 15.56Q174.09 17.95 171.44 20.58 168.7 23.46 165.87 26.53 162.97 29.74 160.03 33.03 157.06 36.4 154.08 39.84 151.1 43.36 148.14 46.96 145.2 50.65 142.3 54.44 139.45 58.33 136.63 62.32 133.86 66.4 131.13 70.55C130.92 70.76 130.7 70.95 130.47 71.1 130.12 71.34 129.74 71.31 129.36 71.34 128 71.51 126.69 71.39 125.58 70.68Q124.25 69.82 122.98 68.27C122.79 68.05 122.6 67.83 122.43 67.61Q121.65 66.57 121.63 65.88 121.61 65.23 121.78 64.79C121.84 64.67 121.89 64.56 121.98 64.46Q121.98 64.46 121.98 64.46M135.67 3.22C133.93 2.17 132.08 1.49 130.21 1.1 129.88 1.03 129.55 0.98 129.23 0.93 127.42 0.64 125.65 0.78 123.99 1.47 122.3 2.28 120.76 3.47 119.49 4.97Q116.49 8.43 115.53 14.35C115.25 16.14 115.1 17.93 115.09 19.74 115.06 21.18 115.13 22.63 115.28 24.07Q115.58 26.84 116.34 29.09C116.94 30.96 117.92 32.69 119.21 34.18Q121.31 36.53 124 37.71 126.68 38.88 129.95 38.9 133.22 38.92 135.9 37.79 138.57 36.69 140.65 34.47 143.52 31.48 144.41 26.52C144.67 24.92 144.8 23.28 144.78 21.65Q144.76 17.02 143.55 13.4C142.93 11.44 141.94 9.54 140.63 7.81 139.28 5.98 137.58 4.4 135.67 3.22Q135.67 3.22 135.67 3.22M176.97 35.05C175 34.52 172.92 34.3 170.85 34.42 170.48 34.43 170.12 34.45 169.76 34.48 167.78 34.6 165.86 35.03 164.14 35.75 162.42 36.46 160.88 37.47 159.62 38.73Q156.62 41.69 155.63 46.72C155.33 48.26 155.16 49.81 155.11 51.36 155.06 52.61 155.09 53.87 155.21 55.11Q155.43 57.51 156.11 59.43C156.64 61.03 157.52 62.47 158.71 63.66Q160.65 65.53 163.18 66.29 165.7 67.03 168.83 66.66 171.95 66.29 174.59 64.95 177.27 63.68 179.61 61.62 183.11 59.11 185.02 55.17C185.48 53.89 185.65 52.59 185.98 51.3Q186.78 47.53 185.87 43.75C185.18 41.76 184.07 39.92 182.6 38.39 181.06 36.84 179.13 35.71 176.97 35.05Q176.97 35.05 176.97 35.05M79.96 19.57C78.32 19.59 76.74 20.26 75.56 21.42Q74.67 22.26 73.88 23.46C73.75 23.65 73.64 23.84 73.53 24.04 72.82 25.25 72.27 26.56 71.9 27.92Q70.92 31.46 70.94 36.35C70.93 37.84 71.01 39.34 71.17 40.82Q71.7 45.51 73.43 48.45C73.43 48.46 73.44 48.47 73.44 48.48 73.9 49.26 74.45 49.98 75.07 50.63 76.34 51.99 78.11 52.76 79.98 52.76 81.92 52.77 83.78 51.94 85.06 50.47 85.62 49.87 86.1 49.21 86.52 48.5Q87.78 46.36 88.41 43.29 89.03 40.22 89.03 36.22 89.03 31.15 87.98 27.55C87.62 26.26 87.09 25.02 86.4 23.88 85.96 23.12 85.43 22.42 84.84 21.78Q83.71 20.6 82.41 20.05C81.63 19.72 80.8 19.56 79.96 19.57Q79.96 19.57 79.96 19.57M134.62 20.7C134.62 19.94 134.57 19.19 134.45 18.43Q133.78 14.41 130.31 13.93C130.26 13.92 130.2 13.92 130.13 13.91 129.4 13.81 128.66 13.9 127.98 14.18Q126.04 15.06 125.6 18.26C125.53 18.85 125.48 19.44 125.47 20.03Q125.46 22.02 125.97 23.41C126.14 23.88 126.39 24.34 126.7 24.74 127.39 25.69 128.45 26.3 129.6 26.42 129.74 26.44 129.87 26.45 129.99 26.46 130.6 26.49 131.18 26.41 131.73 26.21 132.36 25.98 132.9 25.6 133.32 25.11Q134.6 23.66 134.62 20.7 134.62 20.7 134.62 20.7M175.16 50.75C175.23 50.12 175.24 49.49 175.17 48.86Q174.69 45.44 170.91 45.31C170.85 45.31 170.79 45.31 170.73 45.31 169.93 45.3 169.14 45.43 168.41 45.72Q166.34 46.61 165.77 49.32C165.66 49.82 165.59 50.32 165.56 50.82Q165.44 52.49 165.89 53.62C166.03 54.01 166.26 54.37 166.55 54.69 167.19 55.42 168.21 55.85 169.37 55.85 169.51 55.85 169.64 55.86 169.78 55.85 170.38 55.83 170.98 55.72 171.56 55.5 172.23 55.26 172.84 54.91 173.32 54.47Q174.83 53.2 175.16 50.75 175.16 50.75 175.16 50.75" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>
    </div>
  </div>;
}

export default Incubators;
