// import * as THREE from 'three'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { getProject } from '@theatre/core'
// const Model = () => {
//   return (
//     <Canvas
//       camera={{
//         position: [5, 5, -5],
//         fov: 75,
//       }}
//     >
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <mesh>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color="orange" />
//       </mesh>
//     </Canvas>
//   )
// }

// export default Model






import React from 'react'
import { Canvas} from '@react-three/fiber'
const Model = () => {
  return (
    <Canvas
      camera={{
        position: [5, 5, -5],
        fov: 75,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  )
}

export default Model