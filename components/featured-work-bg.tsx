import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// Simple animated particles background for featured work
export function FeaturedWorkBackground() {
  // Generate random positions for points
  const positions = new Float32Array(
    Array.from({ length: 80 * 3 }, () => (Math.random() - 0.5) * 6)
  );

  return (
    <Canvas style={{ position: 'absolute', inset: 0, zIndex: 0 }} camera={{ position: [0, 0, 8], fov: 50 }}>
      <Points positions={positions} stride={3}>
        <PointMaterial color="#a78bfa" size={0.08} sizeAttenuation={true} transparent={true} />
      </Points>
    </Canvas>
  );
}
