import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Animated particles component
function AnimatedPoints() {
  const ref = useRef<THREE.Points>(null);
  const { size } = useThree();

  // Generate random points in 3D space
  const positions = React.useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00bfff"
        size={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Floating geometric shapes
function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 5;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.3) * 3;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[10, 0, -10]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#ff00ff"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

// Neural network connections
function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 20 }, (_, i) => (
        <Sphere key={i} position={[
          Math.sin(i * 0.5) * 20,
          Math.cos(i * 0.3) * 15,
          Math.sin(i * 0.8) * 10
        ]} args={[0.1]}>
          <meshBasicMaterial color="#ffff00" transparent opacity={0.5} />
        </Sphere>
      ))}
    </group>
  );
}

export default function ThreeJSBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} color="#00bfff" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={0.5} />
        
        <AnimatedPoints />
        <FloatingGeometry />
        <NeuralNetwork />
        
        {/* Fog effect for depth */}
        <fog attach="fog" args={['#0a0a0a', 50, 100]} />
      </Canvas>
    </div>
  );
}