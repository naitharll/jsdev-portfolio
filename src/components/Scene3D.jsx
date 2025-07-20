import React, { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Environment } from '@react-three/drei';

function AnimatedModel({ position = [0, 0, 0], scale = 1, isMobile }) {
  const ref = useRef();
  const mobileScale = isMobile ? 0.7 : 1;
  const adjustedScale = scale * mobileScale;
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const animationFactor = isMobile ? 0.5 : 1;
    ref.current.rotation.y = Math.sin(t / 2) / 4 * animationFactor;
    ref.current.rotation.z = Math.sin(t / 4) / 4 * animationFactor;
    ref.current.position.y = Math.sin(t / 1.5) / 10 * animationFactor;
  });

  const sphereDetail = isMobile ? 16 : 32;
  const torusDetail = isMobile ? [8, 16] : [16, 32];
  const coneDetail = isMobile ? 8 : 16;

  return (
    <group ref={ref} position={position} scale={adjustedScale}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4285F4" />
      </mesh>
      
      <mesh castShadow receiveShadow position={[1.5, 0, 0]}>
        <sphereGeometry args={[0.5, sphereDetail, sphereDetail]} />
        <meshStandardMaterial color="#EA4335" metalness={0.5} roughness={0.2} />
      </mesh>

      <mesh castShadow receiveShadow position={[-1.5, 0, 0]}>
        <torusGeometry args={[0.5, 0.2, torusDetail[0], torusDetail[1]]} />
        <meshStandardMaterial color="#FBBC05" />
      </mesh>
      
      <mesh castShadow receiveShadow position={[0, 1.5, 0]}>
        <coneGeometry args={[0.5, 1, coneDetail]} />
        <meshStandardMaterial color="#34A853" />
      </mesh>
    </group>
  );
}

function FloatingText({ text, position, color = "#ffffff", isMobile }) {
  const fontSize = isMobile ? 0.4 : 0.5;
  const adjustedPosition = isMobile ? 
    [position[0] * 0.8, position[1] * 0.8, position[2]] : 
    position;
  const floatSpeed = isMobile ? 1.5 : 2;
  const rotationIntensity = isMobile ? 0.3 : 0.5;
  const floatIntensity = isMobile ? 0.7 : 1;
  return (
    <Float 
      speed={floatSpeed} 
      rotationIntensity={rotationIntensity} 
      floatIntensity={floatIntensity}
    >
      <Text
        font="/fonts/Inter-Bold.woff"
        fontSize={fontSize}
        position={adjustedPosition}
        color={color}
      >
        {text}
      </Text>
    </Float>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#cccccc" wireframe />
    </mesh>
  );
}

export default function Scene3D() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cameraSettings = useMemo(() => {
    return isMobile 
      ? { position: [0, 0, 6], fov: 55 }
      : { position: [0, 0, 5], fov: 50 };
  }, [isMobile]);

  if (!mounted) return null;

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px]">
      <Canvas 
        shadows 
        camera={cameraSettings}
        dpr={[1, isMobile ? 1.5 : 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={isMobile ? 0.8 : 1} 
            castShadow={!isMobile}
          />
          {!isMobile && <pointLight position={[-10, -10, -10]} intensity={0.5} />}
          <AnimatedModel position={[0, 0, 0]} scale={1} isMobile={isMobile} />
          <FloatingText text="Web" position={[2, 1, 0]} color="#4285F4" isMobile={isMobile} />
          <FloatingText text="Development" position={[-2, -1, 0]} color="#EA4335" isMobile={isMobile} />
          <FloatingText text="3D" position={[0, -2, 0]} color="#FBBC05" isMobile={isMobile} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            rotateSpeed={isMobile ? 0.7 : 1}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}