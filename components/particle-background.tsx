"use client"

import { useEffect, useRef, useCallback } from "react"
import * as THREE from "three"

interface ParticleBackgroundProps {
  particleCount?: number
  particleColor?: string | string[]
  particleSize?: number
  animationSpeed?: number
  cursorEffect?: 'attraction' | 'repulsion' | 'trail' | 'orbit' | 'wave'
}

interface Particle {
  originalX: number
  originalY: number
  originalZ: number
  velocityX: number
  velocityY: number
  velocityZ: number
}

export function ParticleBackground({
  particleCount = 100,
  particleColor = "#8b5cf6",
  particleSize = 2,
  animationSpeed = 0.5,
  cursorEffect = 'attraction'
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const timeRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particleDataRef = useRef<Particle[]>([])
  const clickEffectsRef = useRef<{ x: number, y: number, time: number, strength: number }[]>([])
  const cursorEffectRef = useRef(cursorEffect)

  const updateMousePosition = useCallback((event: MouseEvent) => {
    // Convert mouse position to normalized device coordinates (-1 to +1)
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
  }, [])

  const handleClick = useCallback((event: MouseEvent) => {
    // Add click effect
    const x = (event.clientX / window.innerWidth) * 2 - 1
    const y = -(event.clientY / window.innerHeight) * 2 + 1
    clickEffectsRef.current.push({
      x,
      y,
      time: Date.now(),
      strength: 15 // Repulsion strength
    })
  }, [])

  useEffect(() => {
    cursorEffectRef.current = cursorEffect
  }, [cursorEffect])

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

    // Initialize particle data
    particleDataRef.current = []

    // Prepare color array
    const colorArray = Array.isArray(particleColor) ? particleColor : [particleColor]
    
    // Create particle positions and properties
    for (let i = 0; i < particleCount; i++) {
      // Position particles in a wide area
      const x = (Math.random() - 0.5) * 200
      const y = (Math.random() - 0.5) * 200
      const z = (Math.random() - 0.5) * 100
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Store original positions and initialize velocities
      particleDataRef.current.push({
        originalX: x,
        originalY: y,
        originalZ: z,
        velocityX: 0,
        velocityY: 0,
        velocityZ: 0
      })

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

    // Add mouse and click event listeners to canvas and window
    const canvas = canvasRef.current
    canvas.addEventListener('mousemove', updateMousePosition)
    canvas.addEventListener('click', handleClick)
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('click', handleClick)

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01 * animationSpeed

      if (particlesRef.current && particleDataRef.current.length > 0) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
        
        // Clean up old click effects
        const now = Date.now()
        clickEffectsRef.current = clickEffectsRef.current.filter(effect => now - effect.time < 2000)

        // Update each particle
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3
          const particleData = particleDataRef.current[i]
          const offset = i * 0.1
          const timeOffset = timeRef.current + offset
          
          // Get current position
          let currentX = positions[i3]
          let currentY = positions[i3 + 1]
          let currentZ = positions[i3 + 2]

          // Convert 3D position to normalized screen coordinates for mouse interaction
          const screenX = currentX / 100 // Normalize to roughly -1 to 1
          const screenY = currentY / 100

          // Different cursor effects
          const currentEffect = cursorEffectRef.current
          
          if (currentEffect === 'attraction') {
            // Attraction effect - stronger and more noticeable
            const mouseDistance = Math.sqrt(
              Math.pow(screenX - mouseRef.current.x, 2) + 
              Math.pow(screenY - mouseRef.current.y, 2)
            )
            
            if (mouseDistance < 0.6) {
              const attractionStrength = (0.6 - mouseDistance) * 4.0
              const directionX = mouseRef.current.x - screenX
              const directionY = mouseRef.current.y - screenY
              
              particleData.velocityX += directionX * attractionStrength * 0.08
              particleData.velocityY += directionY * attractionStrength * 0.08
            }
          } else if (currentEffect === 'repulsion') {
            // Repulsion effect - particles strongly move away from cursor
            const mouseDistance = Math.sqrt(
              Math.pow(screenX - mouseRef.current.x, 2) + 
              Math.pow(screenY - mouseRef.current.y, 2)
            )
            
            if (mouseDistance < 0.7) {
              const repulsionStrength = (0.7 - mouseDistance) * 6.0
              const directionX = screenX - mouseRef.current.x
              const directionY = screenY - mouseRef.current.y
              const normalizedDistance = Math.max(mouseDistance, 0.01)
              
              particleData.velocityX += (directionX / normalizedDistance) * repulsionStrength * 0.12
              particleData.velocityY += (directionY / normalizedDistance) * repulsionStrength * 0.12
            }
          } else if (currentEffect === 'trail') {
            // Trail effect - particles follow cursor with significant delay
            const mouseDistance = Math.sqrt(
              Math.pow(screenX - mouseRef.current.x, 2) + 
              Math.pow(screenY - mouseRef.current.y, 2)
            )
            
            if (mouseDistance < 0.8) {
              const trailStrength = (0.8 - mouseDistance) * 3.0
              const directionX = mouseRef.current.x - screenX
              const directionY = mouseRef.current.y - screenY
              
              // Add particle-specific delay based on index
              const delay = (i % 20) * 0.05
              const delayedStrength = trailStrength * (1 - delay)
              
              particleData.velocityX += directionX * delayedStrength * 0.06
              particleData.velocityY += directionY * delayedStrength * 0.06
            }
          } else if (currentEffect === 'orbit') {
            // Orbital effect - particles orbit around cursor
            const mouseDistance = Math.sqrt(
              Math.pow(screenX - mouseRef.current.x, 2) + 
              Math.pow(screenY - mouseRef.current.y, 2)
            )
            
            if (mouseDistance < 0.6 && mouseDistance > 0.05) {
              const orbitStrength = (0.6 - mouseDistance) * 5.0
              const directionX = screenX - mouseRef.current.x
              const directionY = screenY - mouseRef.current.y
              
              // Create strong orbital motion by rotating 90 degrees
              const orbitalX = -directionY * 2.0 // Much stronger orbital force
              const orbitalY = directionX * 2.0
              
              particleData.velocityX += orbitalX * orbitStrength * 0.08
              particleData.velocityY += orbitalY * orbitStrength * 0.08
              
              // Weaker attraction to maintain orbit
              particleData.velocityX += (mouseRef.current.x - screenX) * orbitStrength * 0.02
              particleData.velocityY += (mouseRef.current.y - screenY) * orbitStrength * 0.02
            }
          } else if (currentEffect === 'wave') {
            // Wave effect - strong ripple waves from cursor
            const mouseDistance = Math.sqrt(
              Math.pow(screenX - mouseRef.current.x, 2) + 
              Math.pow(screenY - mouseRef.current.y, 2)
            )
            
            if (mouseDistance < 1.0) {
              const wavePhase = timeRef.current * 8 + mouseDistance * 15
              const waveAmplitude = (1.0 - mouseDistance) * 4.0
              const waveOffset = Math.sin(wavePhase) * waveAmplitude
              
              const directionX = screenX - mouseRef.current.x
              const directionY = screenY - mouseRef.current.y
              const normalizedDistance = Math.max(mouseDistance, 0.01)
              
              particleData.velocityX += (directionX / normalizedDistance) * waveOffset * 0.1
              particleData.velocityY += (directionY / normalizedDistance) * waveOffset * 0.1
            }
          }

          // Click repulsion effects
          clickEffectsRef.current.forEach(effect => {
            const clickDistance = Math.sqrt(
              Math.pow(screenX - effect.x, 2) + 
              Math.pow(screenY - effect.y, 2)
            )
            
            if (clickDistance < 0.5) { // Within repulsion radius
              const age = (now - effect.time) / 1000 // Age in seconds
              const repulsionStrength = effect.strength * Math.exp(-age * 2) // Exponential decay
              const directionX = screenX - effect.x
              const directionY = screenY - effect.y
              const normalizedDistance = Math.max(clickDistance, 0.01)
              
              particleData.velocityX += (directionX / normalizedDistance) * repulsionStrength * 0.02
              particleData.velocityY += (directionY / normalizedDistance) * repulsionStrength * 0.02
            }
          })

          // Apply velocities with damping
          currentX += particleData.velocityX
          currentY += particleData.velocityY
          currentZ += particleData.velocityZ

          // Add gentle floating motion
          currentY += Math.sin(timeOffset) * 0.015
          currentX += Math.cos(timeOffset * 0.5) * 0.008

          // Apply damping to return to original positions (much weaker)
          const returnStrength = 0.005 // Reduced from 0.02 for more freedom
          particleData.velocityX += (particleData.originalX - currentX) * returnStrength
          particleData.velocityY += (particleData.originalY - currentY) * returnStrength
          particleData.velocityZ += (particleData.originalZ - currentZ) * returnStrength

          // Apply friction (slightly reduced for more fluid movement)
          particleData.velocityX *= 0.98 // Reduced from 0.95
          particleData.velocityY *= 0.98
          particleData.velocityZ *= 0.98

          // Update positions
          positions[i3] = currentX
          positions[i3 + 1] = currentY
          positions[i3 + 2] = currentZ

          // Instead of wrapping, gently guide particles back when they get too far
          const maxDistance = 150 // Increased boundary
          const returnForce = 0.001 // Very gentle return force
          
          if (Math.abs(currentX) > maxDistance) {
            particleData.velocityX += currentX > 0 ? -returnForce : returnForce
          }
          if (Math.abs(currentY) > maxDistance) {
            particleData.velocityY += currentY > 0 ? -returnForce : returnForce
          }
          if (Math.abs(currentZ) > 50) {
            particleData.velocityZ += currentZ > 0 ? -returnForce : returnForce
          }
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
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('click', handleClick)
      
      if (canvas) {
        canvas.removeEventListener('mousemove', updateMousePosition)
        canvas.removeEventListener('click', handleClick)
      }
      
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
  }, [particleCount, particleColor, particleSize, animationSpeed, updateMousePosition, handleClick])

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
        pointerEvents: 'auto'
      }}
    />
  )
}
