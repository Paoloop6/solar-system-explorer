import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import "@fontsource/inter";
import { SolarSystem } from "./components/SolarSystem";
import { PlanetInfoPanel } from "./components/PlanetInfoPanel";
import type { PlanetData } from "./lib/planetData";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#000000' }}>
      <Canvas
        camera={{
          position: [0, 30, 40],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          alpha: false
        }}
        onPointerMissed={() => setSelectedPlanet(null)}
      >
        <color attach="background" args={["#000000"]} />
        
        <Suspense fallback={null}>
          <SolarSystem 
            onPlanetClick={setSelectedPlanet}
            selectedPlanet={selectedPlanet}
          />
        </Suspense>
      </Canvas>

      {selectedPlanet && (
        <PlanetInfoPanel
          planet={selectedPlanet}
          onClose={() => setSelectedPlanet(null)}
        />
      )}

      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '15px 20px',
          borderRadius: '8px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          zIndex: 999,
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Controls:</div>
        <div>🖱️ Click planets to learn more</div>
        <div>🔄 Drag to rotate view</div>
        <div>🔍 Scroll to zoom</div>
      </div>

      <div
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
          zIndex: 999,
        }}
      >
        <h1 style={{ 
          margin: 0, 
          fontSize: '32px', 
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #FDB813, #4A90E2, #5B5DDF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Solar System Explorer
        </h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.8 }}>
          Explore our cosmic neighborhood
        </p>
      </div>
    </div>
  );
}

export default App;
