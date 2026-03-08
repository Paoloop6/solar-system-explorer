import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { planetsData, type PlanetData } from "@/lib/planetData";

interface PlanetProps {
  data: PlanetData;
  onClick: (data: PlanetData) => void;
  isSelected: boolean;
}

function Planet({ data, onClick, isSelected }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitAngle = useRef(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    if (meshRef.current) {
      orbitAngle.current += delta * data.orbitSpeed;
      
      const x = Math.cos(orbitAngle.current) * data.distance;
      const z = Math.sin(orbitAngle.current) * data.distance;
      
      meshRef.current.position.x = x;
      meshRef.current.position.z = z;
      
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onClick={(e) => {
        e.stopPropagation();
        onClick(data);
        console.log("Planet clicked:", data.name);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
      }}
    >
      <sphereGeometry args={[data.radius, 32, 32]} />
      <meshStandardMaterial
        color={data.color}
        emissive={isSelected ? data.color : "#000000"}
        emissiveIntensity={isSelected ? 0.5 : 0}
      />
    </mesh>
  );
}

function OrbitRing({ distance }: { distance: number }) {
  const points = useMemo(() => {
    const curve = new THREE.EllipseCurve(
      0, 0,
      distance, distance,
      0, 2 * Math.PI,
      false,
      0
    );
    const pts = curve.getPoints(100);
    return pts.map(p => new THREE.Vector3(p.x, 0, p.y));
  }, [distance]);

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#444444" opacity={0.3} transparent />
    </line>
  );
}

function Stars() {
  const starsRef = useRef<THREE.Points>(null);
  
  const starPositions = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 200;
      positions[i3 + 1] = (Math.random() - 0.5) * 200;
      positions[i3 + 2] = (Math.random() - 0.5) * 200;
    }
    return positions;
  }, []);

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starPositions.length / 3}
          array={starPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#ffffff" />
    </points>
  );
}

interface SolarSystemProps {
  onPlanetClick: (planet: PlanetData) => void;
  selectedPlanet: PlanetData | null;
}

export function SolarSystem({ onPlanetClick, selectedPlanet }: SolarSystemProps) {
  return (
    <>
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={10}
        maxDistance={100}
        zoomSpeed={0.5}
      />

      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={2} distance={100} />

      <Stars />

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshBasicMaterial color="#FDB813" transparent opacity={0.3} />
      </mesh>

      {planetsData.map((planet) => (
        <OrbitRing key={`orbit-${planet.name}`} distance={planet.distance} />
      ))}

      {planetsData.map((planet) => (
        <Planet
          key={planet.name}
          data={planet}
          onClick={onPlanetClick}
          isSelected={selectedPlanet?.name === planet.name}
        />
      ))}
    </>
  );
}
