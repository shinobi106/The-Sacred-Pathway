import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'


const Computers = () => {

  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <primitive 
      object={computer.scene}
      scale={35}
      position-y={12}
      rotation-y={-1}
      position-x={3}
    />
  )
}


const ComputersCanvas = () => {
  return (
    <Canvas frameloop='demand'
            shadows
            camera={{ position: [15, 2, 17], fov: 18 }}  
            gl={{ preserveDrawingBuffer: true }}
            >

            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls 
              enableZoom={false} 
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              />
              <Computers />
            </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas