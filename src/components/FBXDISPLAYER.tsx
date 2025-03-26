"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";

function FBXModel({ url }: { url: string }) {
  const fbx = useFBX(url);
  return <primitive object={fbx} scale={0.01} />;
}

export default function Model() {
  return (
    <Canvas camera={{ position: [0, 20, 0], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <FBXModel url="/model/MHmodel.fbx" />
      </Suspense>
      <OrbitControls 
        target={[0, 4, 0]} 
        enableZoom={false} 
        enablePan={false} 
        minPolarAngle={Math.PI / 2} 
        maxPolarAngle={Math.PI / 2} 
      />
    </Canvas>
  );
}