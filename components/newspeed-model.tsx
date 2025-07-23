"use client"

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function NewSpeedModel() {
  const meshRef = useRef<THREE.Group>(null)
  
  // Try to load the GLTF model
  const { scene } = useGLTF('/newspeed.glb')

  // Debug: Log when model loads
  useEffect(() => {
    if (scene) {
      console.log('NewSpeed model loaded successfully')
      // Traverse and make materials red + enable shadows
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true
          child.receiveShadow = true
          if (child.material) {
            // Make the material red
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => {
                mat.color = new THREE.Color(0xff4444)
                mat.needsUpdate = true
              })
            } else {
              child.material.color = new THREE.Color(0xff4444)
              child.material.needsUpdate = true
            }
          }
        }
      })
    }
  }, [scene])

  // Very slow auto-rotation (will be overridden by user interaction)
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Only rotate if not being actively controlled by OrbitControls
      meshRef.current.rotation.y += delta * 0.1 // Very slow baseline rotation
    }
  })

  if (!scene) {
    // Fallback cube while loading
    return (
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#ff4444" />
      </mesh>
    )
  }

  return (
    <group ref={meshRef}>
      <primitive 
        object={scene.clone()} 
        scale={[0.3, 0.3, 0.3]} 
        position={[0, 0, 0]}
      />
    </group>
  )
}

// Preload the model
useGLTF.preload('/newspeed.glb')
