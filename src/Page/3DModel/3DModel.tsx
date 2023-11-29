// import { View, Text } from 'react-native'
// import { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'

// function Box(props:any) {
//   const ref = useRef<any>()
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   useFrame((state, delta) => (ref.current.rotation.x += delta))
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// const Model = () => {
//   return (
//     <Canvas>
//       <ambientLight intensity={Math.PI / 2} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
//       <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
//       <Box position={[-1.2, 0, 0]} />
//       <Box position={[1.2, 0, 0]} />
//       <OrbitControls />
//     </Canvas> 
//   )
// }

// export default Model








import { View } from 'react-native';
import { Canvas, useFrame } from 'react-three-fiber';
// import { OBJLoader } from 'three/addons/loaders/OBJLoader';
import React, { useRef } from 'react';

const Model = () => {
  const modelRef = useRef<any>();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x += 0.01;
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <mesh ref={modelRef} onClick={(e) => console.log('click')} position={[0, 0, 0]}>
      <primitive object={require('./q.obj')} />
    </mesh>
  </Canvas>
  );
};

export default Model;
