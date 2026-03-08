import type { PlanetData } from "@/lib/planetData";

interface PlanetInfoPanelProps {
  planet: PlanetData;
  onClose: () => void;
}

export function PlanetInfoPanel({ planet, onClose }: PlanetInfoPanelProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '350px',
        maxWidth: '90vw',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '20px',
        borderRadius: '12px',
        border: `2px solid ${planet.color}`,
        zIndex: 1000,
        fontFamily: 'Inter, sans-serif',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        animation: 'slideIn 0.3s ease-out',
      }}
    >
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h2 style={{ margin: 0, fontSize: '28px', color: planet.color }}>
          {planet.name}
        </h2>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '0',
            width: '30px',
            height: '30px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          ×
        </button>
      </div>

      <div style={{ lineHeight: '1.6' }}>
        <InfoRow label="Diameter" value={planet.facts.diameter} />
        <InfoRow label="Distance from Sun" value={planet.facts.distanceFromSun} />
        <InfoRow label="Orbital Period" value={planet.facts.orbitalPeriod} />
        <InfoRow label="Surface Temp" value={planet.facts.surfaceTemp} />
        <InfoRow label="Composition" value={planet.facts.composition} />
        <InfoRow label="Moons" value={planet.facts.moons} />
        
        <div style={{ 
          marginTop: '15px', 
          padding: '12px', 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          borderLeft: `3px solid ${planet.color}`
        }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px', opacity: 0.7 }}>
            DID YOU KNOW?
          </div>
          <div style={{ fontSize: '14px' }}>
            {planet.facts.funFact}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: '8px', fontSize: '14px' }}>
      <span style={{ opacity: 0.7, fontWeight: 600 }}>{label}:</span>{' '}
      <span>{value}</span>
    </div>
  );
}
