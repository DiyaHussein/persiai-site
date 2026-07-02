import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const { viewport } = useThree()

  const { positions, linePositions, dotCount } = useMemo(() => {
    const cols = 80
    const rows = 50
    const spacing = 0.35
    const count = cols * rows
    const pos = new Float32Array(count * 3)
    const linePos: number[] = []

    const offsetX = (cols * spacing) / 2
    const depth = rows * spacing * 1.8

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 3
        // Perspective grid — rows recede into distance
        const zFactor = y / rows
        const xSpread = 1 - zFactor * 0.7

        pos[i] = (x * spacing - offsetX) * xSpread
        pos[i + 1] = 0
        pos[i + 2] = -y * spacing * 1.8 + depth * 0.3

        // Slight random offset for organic feel
        pos[i + 1] += (Math.random() - 0.5) * 0.15
      }
    }

    // Connect nearby dots with lines (horizontal + depth connections)
    for (let y = 0; y < rows - 1; y++) {
      for (let x = 0; x < cols - 1; x++) {
        if (Math.random() > 0.35) continue // Only connect ~65% for airy feel
        const i = (y * cols + x) * 3
        const right = (y * cols + x + 1) * 3
        const down = ((y + 1) * cols + x) * 3

        if (Math.random() > 0.5) {
          linePos.push(pos[i], pos[i + 1], pos[i + 2])
          linePos.push(pos[right], pos[right + 1], pos[right + 2])
        }
        if (Math.random() > 0.5) {
          linePos.push(pos[i], pos[i + 1], pos[i + 2])
          linePos.push(pos[down], pos[down + 1], pos[down + 2])
        }
      }
    }

    return { positions: pos, linePositions: new Float32Array(linePos), dotCount: count }
  }, [])

  const dotGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    return geo
  }, [linePositions])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      // Subtle floating
      meshRef.current.position.y = Math.sin(t * 0.4) * 0.2
      meshRef.current.rotation.z = Math.sin(t * 0.2) * 0.02
    }
    if (linesRef.current) {
      linesRef.current.position.y = Math.sin(t * 0.4 + 0.5) * 0.15
      linesRef.current.rotation.z = Math.sin(t * 0.2 + 0.3) * 0.02
    }
  })

  return (
    <group rotation={[-0.45, 0, 0]} position={[0, 2.5, -6]}>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            {...dotGeometry.attributes.position}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#ffffff"
          sizeAttenuation
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <primitive object={lineGeometry} />
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  )
}

export function ParticleGrid({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
      </Canvas>
    </div>
  )
}
