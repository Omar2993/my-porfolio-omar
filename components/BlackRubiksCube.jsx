"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";

function RubiksCube() {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.35;
    group.current.rotation.x += delta * 0.15;

    // Floating
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
  });

  const cubes = useMemo(() => {
    const arr = [];
    const gap = 1.02;

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          arr.push([x * gap, y * gap, z * gap]);
        }
      }
    }

    return arr;
  }, []);

  return (
    <group ref={group} scale={0.7}>
      {cubes.map((pos, index) => (
        <RoundedBox
          key={index}
          args={[0.9, 0.9, 0.9]}
          radius={0.12}
          smoothness={8}
          position={pos}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#050505"
            metalness={1}
            roughness={0.03}
            clearcoat={1}
            clearcoatRoughness={0}
            transmission={0.02}
            emissive="#2a2a2a"
            emissiveIntensity={1}
          />
        </RoundedBox>
      ))}
    </group>
  );
}

export default function BlackRubiksCube() {
  return (
    <div className="w-50 h-50">
      <Canvas
        shadows
        camera={{ position: [3.5, 3, 3.5], fov: 40 }}
      >
        {/* Main Light */}
        <ambientLight intensity={1} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
          castShadow
        />

        {/* Rim Light */}
        <pointLight
          position={[0, 0, 6]}
          intensity={18}
          color="#fff7d1"
        />

        <pointLight
          position={[0, 0, -6]}
          intensity={8}
          color="#ffffff"
        />

        <pointLight
          position={[-5, 5, 5]}
          intensity={2}
          color="#ffffff"
        />

        <RubiksCube />

        <Environment preset="city" />

        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={2.8}
            luminanceThreshold={0}
            luminanceSmoothing={1}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}