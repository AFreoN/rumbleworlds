import { useRef, useEffect } from "react";
import * as THREE from "three";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import solarmyModel from "assets/home/characters/solarmy_nonTex.glb";
import solarmyDiffuse from "assets/home/characters/Textures/solarmy_diffuse512.png";

import solienModel from "assets/home/characters/solien_nonTex.glb";
import solienDiffuse from "assets/home/characters/Textures/solien_diffuse512.png";

import sunkModel from "assets/home/characters/sunk_nonTex.glb";
import sunkDiffuse from "assets/home/characters/Textures/sunk_diffuse512.png";
// import rumblerModel from "assets/home/characters/rumbler.glb";
// import rumblerModel from "assets/home/characters/rumbler_cyclops_2048.glb";
// import rumblerModel from "assets/home/characters/rumbler_cyclops_1024.glb";
// import rumblerModel from "assets/home/characters/rumbler_cyclops_1024_512acc.glb";
import rumblerModel from "assets/home/characters/rumbler_tex512.glb"; //rumbler_cyclops_256yellow_512all.glb

import solarianModel from "assets/home/characters/solarian_nonTex.glb";  //solarian.glb
import solarianDiffuse from "assets/home/characters/Textures/solarian_diffuse512.jpg"

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
// import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
// import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

// import solarmy_texture from "assets/home/characters/solarmy_texture.png";
import Solarmy_metalroughness_texture from "assets/home/characters/Solarmy_MetalRoughMap.png";
import Sunk_metalroughness_texture from "assets/home/characters/Sunk_MetalRoughness.png";
// import solien_texture from "assets/home/characters/solien_texture.png";
// import sunk_texture from "assets/home/characters/sunk_texture.png";
import "./characters.scss";
import { useSelector } from "react-redux";

let mixers = [];
let camera;
const manager = new THREE.LoadingManager();
// load model
//const loader = new FBXLoader(manager);
const gltfloader = new GLTFLoader(manager);
const textureLoader = new THREE.TextureLoader(manager);

const clock = new THREE.Clock();

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x000000, 0);

var composer;
var selectedObjects  = [];

let scene;
let characterList = [];
let solarmy, solien, sunk, rumbler, solarian;

var isPostProcessEnabled = false;
const characterCount = 5;
var loadedCount = 0;
var modelsLoaded = false;
export var firstFrameRendered = false;

function setupScene(){
  scene = new THREE.Scene();

    //   camera.position.multiplyScalar(30);
  //   camera.rotation.set(50, 0, 0);
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true;
  // renderer.outputEncoding = THREE.sRGBEncoding;
  // renderer.setClearColor(0xffffff, 0);
  // scene.background = new THREE.Color(0x999999);
  // scene.background = new THREE.Color().setHSL(0.6, 0, 1);

  // document.body.appendChild( renderer.domElement );
  // use ref as a mount point of the Three.js scene instead of the document.body

  // add light
  // scene.fog = new THREE.Fog(0xa0a0a0, 1, 2000);
  scene.fog = new THREE.Fog(scene.background, 1, 20000);
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  hemiLight.position.set(0, 2, 0);
  hemiLight.position.multiplyScalar(1000000);
  // hemiLight.color.setHSL(0.6, 0.6, 0.6);
  // hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  //scene.add(hemiLight);
  // add to show light helper

  const dirLight = new THREE.DirectionalLight(0xFFF6B6, 10);   //prev 1.5 in default tone mapping
  dirLight.color.setHSL(0.1, 1, 0.95);
  dirLight.position.multiplyScalar(30);
  const d = 200;
  dirLight.position.set(-2, 2, 4);   //prev (1, 2, 1)
  dirLight.position.multiplyScalar(1000);
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
  
  const spotLight = new THREE.SpotLight( 0xaa0000 );
  spotLight.position.set( -10, 10, -5 );
  //scene.add( spotLight );

  // const redPointLightRadius = 15;   //5
  // const redpointLight = new THREE.PointLight( 0xff0000, redPointLightRadius , 40 );
  // redpointLight.position.set( -7, 1, -1 );
  // scene.add( redpointLight );

  const rimLightSize = 30;   //8
  const rimPointLight = new THREE.PointLight( 0x0033FF, rimLightSize, 40);
  rimPointLight.position.set( 10, 2, 0);
  scene.add( rimPointLight );

  const ambientLight = new THREE.AmbientLight( 0xffffff, 0 ); // soft white light
  scene.add( ambientLight );

  renderer.domElement.style.display = "none";
  // add to show light helper
  // const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
  // scene.add(dirLightHelper);
  // const groundGeo = new THREE.PlaneGeometry(100000, 100000);
  // const groundMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
  // groundMat.color.setHSL(0.095, 1, 0.75);
  // const ground = new THREE.Mesh(groundGeo, groundMat);
  // ground.rotation.x = -Math.PI / 2;
  // ground.receiveShadow = true;
  // scene.add(ground);
  LoadModels();
}

function setupPostProcessing(width, height){
  if(isPostProcessEnabled){
    return;
  }

  const params = {
    edgeStrength: 5.0,  //3
    edgeGlow: 0.0,  //0
    edgeThickness: 1.0, //1
    pulsePeriod: 0,
    rotate: false,
    usePatternTexture: false
  };

  composer = new EffectComposer( renderer );

	const renderPass = new RenderPass( scene, camera );
	composer.addPass( renderPass );

	const outlinePass = new OutlinePass( new THREE.Vector2( width, height ), scene, camera );
  outlinePass.edgeStrength = params.edgeStrength;
  outlinePass.edgeGlow = params.edgeGlow;
  outlinePass.edgeThickness = params.edgeThickness;
  outlinePass.visibleEdgeColor.set(0x000000);
  outlinePass.hiddenEdgeColor.set(0x111111);
  outlinePass.selectedObjects = selectedObjects;
	composer.addPass( outlinePass );

  isPostProcessEnabled = true;
}

function LoadModels(){
  
  gltfloader.load(rumblerModel, function (object) {
    rumbler = object.scene;
    // console.log("rumbler loaded");
    const mixer = new THREE.AnimationMixer(rumbler);
    const action = mixer.clipAction(object.animations[0]);
    action.play();
    mixers.push(mixer);
    selectedObjects.push(rumbler);

    rumbler.traverse((child) => {
      if(child.isMesh){
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    // selectedObjects.traverse((obj) => {
    //   console.log('traversed properly');
    // })
    // const tgaLoader = new TGALoader(manager);

    // const texture1 = tgaLoader.load(rumbler_cyclops_base_color);
    // const texture2 = tgaLoader.load(rumbler_cyclops_texture);

    // rumbler.traverse(function (child) {
    //   if (child.isMesh) {
    //     child.castShadow = true;
    //     child.receiveShadow = true;
    //     child.material.map = texture1;
    //     child.material.needsUpdate = true;

    //     if (
    //       child.name.includes("Metal") ||
    //       child.name.includes("Armor") ||
    //       child.name.includes("Thumb") ||
    //       child.name.includes("ShoulderPad") ||
    //       child.name.includes("Index") ||
    //       child.name.includes("Pinky")
    //     ) {
    //       var x = child.material.clone();
    //       x.map = texture2;
    //       x.needsUpdate = true;
    //       child.material = x;
    //     }
    //   }
    // });

    // rumbler.rotation.set(0, -50, 0);
    // rumbler.rotation.set(0, 1, 0);
    rumbler.position.x = -0.5;
    rumbler.position.y = -1.25;
    rumbler.rotation.y = 0.3;
    rumbler.scale.set(13, 13, 13);  //prev 11
    // rumbler.visible = false; 

    scene.add(rumbler);
    characterList.push(rumbler);
    mLoaded();
  });
  
  LoadRemainingModels();
}
function LoadRemainingModels(){
  
  gltfloader.load(solarmyModel, function (object) {
    solarmy = object.scene;
    // console.log('solarmy loaded');
    const mixer = new THREE.AnimationMixer(solarmy);
    const action = mixer.clipAction(object.animations[0]);
    mixers.push(mixer);
    action.play();
    selectedObjects.push(solarmy);

    const solarmyLoadManager = new THREE.LoadingManager();
    const solarmyTexLoader = new THREE.TextureLoader(solarmyLoadManager);
    // const solarmyTexLoader2 = new THREE.TextureLoader(solarmyLoadManager);
    var diffuseTexture, roughmetalTexture;

    solarmyTexLoader.load(Solarmy_metalroughness_texture, (texture) => {
      texture.flipY = false;
      texture.needsUpdate = true;
      roughmetalTexture = texture;
    });
    
    solarmyTexLoader.load(solarmyDiffuse, (texture) => {
      texture.flipY = false;
      texture.encoding = THREE.sRGBEncoding;
      texture.needsUpdate = true;
      diffuseTexture = texture;
    })

    solarmyLoadManager.onLoad = () => {

      solarmy.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // child.material.roughness = 0;
          child.material.roughness = 0.9;
          child.material.metalness = 1;
          child.material.metalnessMap = roughmetalTexture;
          child.material.roughnessMap = roughmetalTexture;
          child.material.map = diffuseTexture;
          child.material.needsUpdate = true;

          // textureLoader.load(Solarmy_metalroughness_texture, (texture) => {
          //   texture.flipY = false;
          //   texture.needsUpdate = true;
          //   child.material.metalnessMap = texture;
          //   child.material.roughnessMap = texture;
          //   child.material.needsUpdate = true;
          // });
          // textureLoader.load(solarmyDiffuse, (texture) => {
          //   texture.flipY = false;
          //   texture.encoding = THREE.sRGBEncoding;
          //   texture.needsUpdate = true;
          //   child.material.map = texture;
          //   child.material.needsUpdate = true;
          // })
        }
      });

      mLoaded();
    }


    solarmy.position.set(-0.5, -1.5, 0);

    solarmy.rotation.set(0, 0, 0);
    solarmy.scale.set(3.6, 3.6, 3.6); //prev 3

    solarmy.name = "solarmy";

    characterList.push(solarmy);
  });

  gltfloader.load(solienModel, function (object) {
    solien = object.scene;
    // console.log('solien loaded');
    const mixer = new THREE.AnimationMixer(solien);
    const action = mixer.clipAction(object.animations[0]);
    action.play();
    mixers.push(mixer);
    selectedObjects.push(solien);

    textureLoader.load(solienDiffuse, (texture) => {
      texture.flipY = false;
      texture.encoding = THREE.sRGBEncoding;

      solien.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.roughness = 0.7;
          child.material.metalness = 0.1;
          child.material.map = texture;
          child.material.needsUpdate = true;
        }
      });
      // child.material.side = THREE.DoubleSide;
      // child.material.dithering = true;
      mLoaded();
    });

    solien.position.set(-0.5, -1.5, -0.6);  //prev (0, 0.5, -0.6)
    solien.rotation.set(0, Math.PI * 0.25, 0);
    solien.scale.set(2, 2, 2);    //prev (1.6, 1.6, 1.6)
    // solien.visible = false;

    characterList.push(solien);
  });
  gltfloader.load(sunkModel, function (object) {
    sunk = object.scene;
    // console.log('sunk loaded');
    const mixer = new THREE.AnimationMixer(sunk);
    const action = mixer.clipAction(object.animations[0]);
    action.play();
    mixers.push(mixer);
    selectedObjects.push(sunk);
    
    const sunkLoadManager = new THREE.LoadingManager();
    const sunkTexLoader1 = new THREE.TextureLoader(sunkLoadManager);
    const sunkTexLoader2 = new THREE.TextureLoader(sunkLoadManager);
    var sunkRoughnessTexture, sunkDiffuseTexture;

    sunkTexLoader1.load(Sunk_metalroughness_texture, (texture) => {
      texture.flipY = false;
      texture.encoding = THREE.sRGBEncoding;
      texture.needsUpdate = true;
      sunkRoughnessTexture = texture;
    })

    sunkTexLoader2.load(sunkDiffuse, (texture) => {
      texture.flipY = false;
      texture.encoding = THREE.sRGBEncoding;
      texture.needsUpdate = true;
      sunkDiffuseTexture = texture;
    })

    sunkLoadManager.onLoad= () => {

      sunk.traverse(function (child) {
        if(child.isMesh){
          child.material.roughness = 0.9;
          child.material.metalness = 0.7;

          child.material.metalnessMap = sunkRoughnessTexture;
          child.material.roughnessMap = sunkRoughnessTexture;
          child.material.map = sunkDiffuseTexture;
          child.material.needsUpdate = true;

          // textureLoader.load(Sunk_metalroughness_texture, (texture) => {
          //   texture.flipY = false;
          //   texture.needsUpdate = true;
          //   child.material.metalnessMap = texture;
          //   child.material.roughnessMap = texture;
          //   child.material.needsUpdate = true;
          // });
          // textureLoader.load(sunkDiffuse, (texture) => {
          //   texture.flipY = false;
          //   texture.encoding = THREE.sRGBEncoding;
          //   child.material.map = texture;
          //   child.material.needsUpdate = true;
          // })
        }
      });

      mLoaded();
    }


    // sunk.rotation.set(0, -50, 0);
    sunk.rotation.set(THREE.MathUtils.degToRad(5), Math.PI * 0.1, 0);
    sunk.position.set( -0.5, -2.7, -1.2);   //prev (0,-0.5,-1)
    const scale = 1.2;  //1.2
    sunk.scale.set(scale, scale, scale);    //prev (1.2, 1.2, 1.2)
    // sunk.visible = false;

    characterList.push(sunk);
  });
  
  gltfloader.load(solarianModel, function (object) {
    solarian = object.scene;
    const mixer = new THREE.AnimationMixer(solarian);
    const action = mixer.clipAction(object.animations[0]);
    action.play();
    mixers.push(mixer);
    selectedObjects.push(solarian);
    // console.log('solarian loaded');

    var diffuseMap;
    textureLoader.load(solarianDiffuse, (texture) => {
      texture.flipY = false;
      texture.encoding = THREE.sRGBEncoding;
      texture.needsUpdate = true;
      diffuseMap = texture;
      solarian.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.map = diffuseMap;
          child.material.roughness = 0.4;
          child.material.metalness = 0.2;
          child.material.needsUpdate = true;
          // textureLoader.load(solarian_texture, (texture) => {
          //   child.material.map = texture;
          //   child.material.needsUpdate = true;
          // });
        }
      });
      mLoaded();
    })


    // solarian.rotation.set(0, -50, 0);
    solarian.rotation.set(0, 0.5, 0);   //prev (0, 0.5, 0)
    solarian.position.x = -0.25;
    solarian.position.y = -0.5;  //prev 0.7
    solarian.scale.set(1.8, 1.8, 1.8);  //prev (2,2,2)
    // solarian.visible = false;

    characterList.push(solarian);
  });
}
function mLoaded(){
  loadedCount++;
  if(loadedCount >= characterCount){
    renderer.domElement.style.display = "block";
    modelsLoaded = true;
    console.log("All characters loaded");
    // setTimeout(() => {

    //   console.log("Timeout completed");
    // }, 10000);
    // // composer.render();
  }
}
setupScene();
// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }
// console.log("before sleep");
// sleep(10000);
// console.log("after sleep");

function Characters() {
  const character = useSelector((state) => state.characterSelect.character);
  const ref = useRef();
  
  useEffect(() => {
    const current = ref.current;
    let width = current.clientWidth; // or window.innerWidth;
    let height = current.clientHeight; // = window.innerHeight for full screen

    const init = () => {
      camera = new THREE.PerspectiveCamera(90, width/ height, 1, 100000);
      camera.position.set(0, 2.5, 4);
      renderer.setSize(width, height);
      current.appendChild(renderer.domElement);

      setupPostProcessing(width, height);

      if(modelsLoaded === false)
        return;

      if (character === 0) {
        scene.add(rumbler);
        scene.remove(solarmy);
        scene.remove(solien);
        scene.remove(sunk);
        scene.remove(solarian);
      }
      if (character === 1) {
        scene.remove(rumbler);
        scene.add(solarmy);
        scene.remove(solien);
        scene.remove(sunk);
        scene.remove(solarian);
      }
      if (character === 2) {
        scene.remove(rumbler);
        scene.remove(solarmy);
        scene.add(solien);
        scene.remove(sunk);
        scene.remove(solarian);
      }
      if (character === 3) {
        scene.remove(rumbler);
        scene.remove(solarmy);
        scene.remove(solien);
        scene.add(sunk);
        scene.remove(solarian);
      }
      if (character === 4) {
        scene.remove(rumbler);
        scene.remove(solarmy);
        scene.remove(solien);
        scene.remove(sunk);
        scene.add(solarian);
      }
    };

    init();

    manager.onLoad = () => {
      console.log("Calling Render");
      animate();
    };

    // animate
    const animate = function () {
      requestAnimationFrame(animate);
      // characterChange();

      if(isScrolledIntoView(doc) && modelsLoaded){
        const delta = clock.getDelta();
        for (let i = 0; i < mixers.length; i++) {
          mixers[i].update(delta);
        }
        render();
      }
      else if(firstFrameRendered === false){
        const delta = clock.getDelta();
        for (let i = 0; i < mixers.length; i++) {
          mixers[i].update(delta);
        }
        render();
      }
    };

    const doc = document.getElementById('character_model');

    function isScrolledIntoView(el) {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;
      var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    }

    const render = () => {
      //renderer.render(scene, camera);
       composer.render();
      if(!firstFrameRendered){
        firstFrameRendered = true;
        console.log("First frame rendered");
      }
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
    //#region Old props code
    // props.store.subscribe((data) => {
    //   console.log(data.characterSelect.character);
    //   if (currentCharIndex === data.characterSelect.character) {
    //     console.log("Same character");
    //     return;
    //   }

    //   for (let i = 0; i < characterList.length; i++) {
    //     characterList[i].visible = false;
    //     if (i === data.characterSelect.character) {
    //       console.log("Change character!");
    //       characterList[i].visible = true;
    //       currentCharIndex = i;
    //     }
    //   }
    // });

    // const characterChange = () => {
    //   console.log(character.character);
    //   if (currentCharIndex === character.character) {
    //     console.log("Same character");
    //     return;
    //   }
    //   for (let i = 0; i < characterList.length; i++) {
    //     characterList[i].visible = false;
    //     if (i === character.character) {
    //       console.log("Change character!");
    //       characterList[i].visible = true;
    //       currentCharIndex = i;
    //     }
    //   }
    // };
    //#endregion
    
    window.addEventListener("resize", handleResize);

    return () => {
      // Callback to cleanup three js, cancel animationFrame, etc

      window.removeEventListener("resize", handleResize);
      current.removeChild(renderer.domElement);
    };
  }, [character]);
 
  // console.log("returned character");
  return <div ref={ref} className="Characters"></div>;
}

export default Characters;
