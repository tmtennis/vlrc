"use client"

import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { NewSpeedModel } from './newspeed-model'

function FallbackModel() {
  return (
    <div className="text-center space-y-3">
      <div className="relative w-16 h-16 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/5 rounded-xl animate-pulse"></div>
        <div className="absolute inset-2 bg-gradient-to-tl from-red-500/30 to-red-600/10 rounded-lg animate-pulse delay-75"></div>
        <div className="absolute inset-4 bg-red-500/50 rounded-md animate-spin"></div>
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium text-foreground">3D Model</p>
        <p className="text-xs text-muted-foreground opacity-60">newspeed.glb</p>
      </div>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"></div>
      <span className="ml-3 text-sm text-muted-foreground">Loading 3D model...</span>
    </div>
  )
}

export function NewSpeedModelViewer() {
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    console.log('3D Canvas error, showing fallback')
    setHasError(true)
  }

  return (
    <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] flex items-center justify-center">
      {hasError ? (
        <FallbackModel />
      ) : (
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          onError={handleError}
          style={{ background: 'transparent' }}
          shadows
        >
          <Suspense fallback={null}>
            {/* Softer lighting for better integration */}
            <ambientLight intensity={0.6} />
            <directionalLight 
              position={[5, 8, 2]} 
              intensity={0.8} 
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <pointLight position={[-5, -5, -2]} intensity={0.2} />
            
            {/* Invisible ground plane for shadows */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
              <planeGeometry args={[10, 10]} />
              <shadowMaterial transparent opacity={0.3} />
            </mesh>
            
            {/* The 3D Model */}
            <NewSpeedModel />
            
            {/* Interactive Controls */}
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={1}
              enableDamping={true}
              dampingFactor={0.05}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI - Math.PI / 6}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}
