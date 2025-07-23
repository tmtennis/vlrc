"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface ParticleBackgroundProps {
  particleCount?: number
  particleColor?: string
  particleSize?: number
  animationSpeed?: number
}

export function ParticleBackground({
  particleCount = 100,
  particleColor = "#8b5cf6",
  particleSize = 2,
  animationSpeed = 0.5
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const timeRef = useRef(0)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 50
    cameraRef.current = camera

    // Renderer setup - optimized for performance
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false, // Disable for performance
      powerPreference: "high-performance",
      precision: "lowp" // Use low precision for better performance
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // Limit pixel ratio for performance
    renderer.setClearColor(0x000000, 0) // Transparent background
    rendererRef.current = renderer

    // Particle geometry
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    // Create particle positions and properties
    for (let i = 0; i < particleCount; i++) {
      // Position particles in a wide area
      positions[i * 3] = (Math.random() - 0.5) * 200 // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 // z

      // Subtle color variations
      const color = new THREE.Color(particleColor)
      const hsl = { h: 0, s: 0, l: 0 }
      color.getHSL(hsl)
      color.setHSL(
        hsl.h + (Math.random() - 0.5) * 0.1,
        Math.min(1, hsl.s + (Math.random() - 0.5) * 0.2),
        Math.min(1, hsl.l + (Math.random() - 0.5) * 0.3)
      )
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      // Vary particle sizes slightly
      sizes[i] = particleSize * (0.5 + Math.random() * 0.5)
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    // Particle material - optimized for performance
    const material = new THREE.PointsMaterial({
      size: particleSize,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false // Important for performance with transparent particles
    })

    // Create particle system
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = particles

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01 * animationSpeed

      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
        
        // Gentle sine wave animation for each particle (optimized)
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3
          const offset = i * 0.1
          const timeOffset = timeRef.current + offset
          
          // Apply subtle floating motion with sine waves
          positions[i3 + 1] += Math.sin(timeOffset) * 0.015 // y movement - reduced intensity
          positions[i3] += Math.cos(timeOffset * 0.5) * 0.008 // x movement - reduced intensity
          
          // Wrap particles around the screen boundaries
          if (positions[i3 + 1] > 100) positions[i3 + 1] = -100
          if (positions[i3 + 1] < -100) positions[i3 + 1] = 100
          if (positions[i3] > 100) positions[i3] = -100
          if (positions[i3] < -100) positions[i3] = 100
        }
        
        particlesRef.current.geometry.attributes.position.needsUpdate = true
        
        // Very subtle rotation of the entire particle system
        particlesRef.current.rotation.y = timeRef.current * 0.02
        particlesRef.current.rotation.x = Math.sin(timeRef.current * 0.05) * 0.05
      }

      if (rendererRef.current && cameraRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      
      if (particlesRef.current) {
        if (particlesRef.current.geometry) {
          particlesRef.current.geometry.dispose()
        }
        if (particlesRef.current.material) {
          ;(particlesRef.current.material as THREE.Material).dispose()
        }
        sceneRef.current?.remove(particlesRef.current)
      }
    }
  }, [particleCount, particleColor, particleSize, animationSpeed])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  )
}
