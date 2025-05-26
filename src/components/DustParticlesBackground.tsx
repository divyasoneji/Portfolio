import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { inSphere } from "maath/random";
import * as THREE from "three";
import "../styles/DustParticlesBackground.css";

interface DustParticlesProps {
  [key: string]: any;
}

const DustParticles: React.FC<DustParticlesProps> = (props) => {
  const points = useRef<THREE.Points>(null);
  const [sphere] = useState<Float32Array>(
    () => inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array
  );

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 20;
      points.current.rotation.y -= delta / 45;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="var(--pink-glow)"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const DustParticlesBackground: React.FC = () => {
  return (
    <div
      id="dust-particles-background"
      className="w-full h-auto absolute inset-0 z-[-1]"
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <DustParticles />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
