"use client"

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function NewSpeedModel() {
  const meshRef = useRef<THREE.Group>(null)
  
  // Try to load the GLTF model
  const { scene } = useGLTF('/newspeed.glb')

  // Setup model materials and shadows
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true
          child.receiveShadow = true
          if (child.material) {
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

  // Slow auto-rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1
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
