"use client";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function Background3D() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <Sphere args={[1.5, 64, 64]} scale={5}>
        <MeshDistortMaterial color="#0a0a0a" attach="material" distort={0.4} speed={0.7} />
      </Sphere>
    </Canvas>
  );
}
