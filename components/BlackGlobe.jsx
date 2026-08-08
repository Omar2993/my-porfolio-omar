// "use client";

// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import { TextureLoader } from "three";
// import { useRef } from "react";


// function Earth(){

//   const earth = useRef();

//   const texture = useLoader(
//     TextureLoader,
//     "/earth.jpg"
//   );


//   useFrame((state, delta)=>{

//     earth.current.rotation.y += delta * 0.12;

//   });


//   return (

//     <mesh ref={earth}>

//       <sphereGeometry
//         args={[2,64,64]}
//       />

//       <meshStandardMaterial

//         map={texture}

//         roughness={1}

//       />

//     </mesh>

//   );
// }



// export default function EarthGlobe(){

// return (

// <div className="w-full h-[500px]">


// <Canvas

// dpr={[1,1.5]}

// camera={{
//  position:[0,0,6]
// }}

// >


// <ambientLight intensity={1}/>

// <directionalLight
//  position={[5,5,5]}
//  intensity={1.5}
// />


// <Earth/>


// <Stars

// radius={50}

// depth={20}

// count={1500}

// factor={1.5}

// />


// <OrbitControls

// enableZoom={false}

// enablePan={false}

// enableDamping

// dampingFactor={0.08}

// />


// </Canvas>


// </div>

// )

// }