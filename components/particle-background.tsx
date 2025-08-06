"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface ParticleBackgroundProps {
  particleCount?: number
  particleColor?: string | string[]
  particleSize?: number
  animationSpeed?: number
}

export function ParticleBackground({
  particleCount = 100,
  particleColor = "#ffcad4",
  particleSize = 2,
  animationSpeed = 0.5,
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

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      precision: "lowp"
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer

    // Particle geometry
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    // Prepare color array
    const colorArray = Array.isArray(particleColor) ? particleColor : [particleColor]
    
    // Create particle positions and properties
    for (let i = 0; i < particleCount; i++) {
      // Position particles in a wide area
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100

      // Pick a random color from the array
      const selectedColor = colorArray[Math.floor(Math.random() * colorArray.length)]
      const color = new THREE.Color(selectedColor)
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

    // Particle material
    const material = new THREE.PointsMaterial({
      size: particleSize,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    // Create particle system
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = particles

    // Simple animation loop - just gentle floating motion
    const animate = () => {
      timeRef.current += 0.01 * animationSpeed

      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
        
        // Update each particle with gentle floating motion
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3
          const offset = i * 0.1
          const timeOffset = timeRef.current + offset
          
          // Add gentle floating motion
          const originalY = positions[i3 + 1]
          positions[i3 + 1] = originalY + Math.sin(timeOffset) * 0.015
          positions[i3] = positions[i3] + Math.cos(timeOffset * 0.5) * 0.008
        }
        
        particlesRef.current.geometry.attributes.position.needsUpdate = true
        
        // Subtle rotation of the entire particle system
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
      className="absolute inset-0"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  )
}
