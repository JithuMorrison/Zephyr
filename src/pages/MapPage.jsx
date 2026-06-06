import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import worldData from '../data/world_data.json';
import '../styles/world.css';

/* ── constants ── */
const MAP_W = 1200;
const MAP_H = 800;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 5;

const TYPE_COLORS = {
  ocean:     '#2a4a6a',
  continent: '#4a6a4a',
  region:    '#5a7a5a',
  city:      '#c8a84b',
  town:      '#a09080',
  village:   '#8a7a6a',
  forest:    '#3a6a3a',
  mountain:  '#7a7a7a',
  world:     '#c8a84b',
  plains:    '#6a7a4a',
};

const TYPE_LABELS = {
  ocean: 'Ocean', continent: 'Continent', region: 'Region',
  city: 'City', town: 'Town', village: 'Village',
  forest: 'Forest', mountain: 'Mountain', plains: 'Plains',
};

const toSvg = (lat, lng) => ({
  x: (lng + 180) * (MAP_W / 360),
  y: (90 - lat) * (MAP_H / 180),
});

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/* ────────────────────────────────────────────── */
/*  CompassRose                                   */
/* ────────────────────────────────────────────── */
const CompassRose = () => (
  <g>
    {/* outer ring */}
    <circle cx="0" cy="0" r="38" fill="none" stroke="rgba(200,168,75,0.25)" strokeWidth="1" />
    <circle cx="0" cy="0" r="36" fill="none" stroke="rgba(200,168,75,0.12)" strokeWidth="0.5" />

    {/* cardinal points — long needles */}
    {/* N */}
    <polygon points="0,-32 -5,-8 0,-12 5,-8" fill="#c8a84b" opacity="0.9" />
    {/* S */}
    <polygon points="0,32 -5,8 0,12 5,8" fill="rgba(200,168,75,0.35)" />
    {/* E */}
    <polygon points="32,0 8,-5 12,0 8,5" fill="rgba(200,168,75,0.35)" />
    {/* W */}
    <polygon points="-32,0 -8,-5 -12,0 -8,5" fill="rgba(200,168,75,0.35)" />

    {/* intercardinal ticks */}
    {[45, 135, 225, 315].map(a => {
      const rad = (a * Math.PI) / 180;
      return (
        <line
          key={a}
          x1={Math.cos(rad) * 28} y1={Math.sin(rad) * 28}
          x2={Math.cos(rad) * 34} y2={Math.sin(rad) * 34}
          stroke="rgba(200,168,75,0.2)" strokeWidth="1"
        />
      );
    })}

    {/* labels */}
    <text x="0" y="-40" textAnchor="middle" fill="#c8a84b" fontSize="7" fontFamily="Cinzel, serif" fontWeight="700">N</text>
    <text x="0" y="46" textAnchor="middle" fill="rgba(200,168,75,0.5)" fontSize="6" fontFamily="Cinzel, serif">S</text>
    <text x="44" y="2.5" textAnchor="middle" fill="rgba(200,168,75,0.5)" fontSize="6" fontFamily="Cinzel, serif">E</text>
    <text x="-44" y="2.5" textAnchor="middle" fill="rgba(200,168,75,0.5)" fontSize="6" fontFamily="Cinzel, serif">W</text>

    {/* center jewel */}
    <circle cx="0" cy="0" r="3" fill="#1a1814" stroke="#c8a84b" strokeWidth="0.8" />
    <circle cx="0" cy="0" r="1.2" fill="#c8a84b" opacity="0.7" />
  </g>
);

/* ────────────────────────────────────────────── */
/*  Tooltip                                       */
/* ────────────────────────────────────────────── */
const Tooltip = ({ info, mouse }) => {
  if (!info) return null;
  const style = {
    position: 'fixed',
    left: mouse.x + 14,
    top: mouse.y - 10,
    background: 'rgba(26,24,20,0.96)',
    border: '1px solid rgba(200,168,75,0.35)',
    borderRadius: 4,
    padding: '8px 12px',
    pointerEvents: 'none',
    zIndex: 100,
    minWidth: 140,
    boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
  };

  return (
    <div style={style}>
      <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 13, color: '#c8a84b', marginBottom: 2 }}>
        {info.name}
      </div>
      <div style={{ fontSize: 11, color: '#a09080', textTransform: 'capitalize', marginBottom: 4 }}>
        {info.locationType}
      </div>
      {info.geo?.elevation != null && (
        <div style={{ fontSize: 10, color: '#6a5e50' }}>
          Elevation: {info.geo.elevation}m
        </div>
      )}
      {info.geo?.direction && (
        <div style={{ fontSize: 10, color: '#6a5e50' }}>
          Direction: {info.geo.direction}
        </div>
      )}
    </div>
  );
};

/* ────────────────────────────────────────────── */
/*  Legend                                        */
/* ────────────────────────────────────────────── */
const Legend = ({ visible }) => {
  const items = Object.entries(TYPE_LABELS);
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 16,
        left: 16,
        background: 'rgba(26,24,20,0.92)',
        border: '1px solid rgba(200,168,75,0.2)',
        borderRadius: 4,
        padding: '10px 14px',
        zIndex: 20,
        display: visible ? 'block' : 'none',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div style={{ fontFamily: 'Cinzel, serif', fontSize: 10, fontWeight: 700, color: '#c8a84b', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
        Legend
      </div>
      {items.map(([key, label]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{
            width: 10, height: 10, borderRadius: '50%', background: TYPE_COLORS[key],
            display: 'inline-block', border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: `0 0 4px ${TYPE_COLORS[key]}55`,
          }} />
          <span style={{ fontSize: 11, color: '#a09080', textTransform: 'capitalize' }}>{label}</span>
        </div>
      ))}
    </div>
  );
};

/* ────────────────────────────────────────────── */
/*  MapPage                                       */
/* ────────────────────────────────────────────── */
const MapPage = () => {
  const navigate = useNavigate();
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  /* ── viewport state ── */
  const [vb, setVb] = useState({ x: 0, y: 0, w: MAP_W, h: MAP_H });
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0, vbx: 0, vby: 0 });

  /* ── hover state ── */
  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [legendVisible, setLegendVisible] = useState(true);

  /* ── location entries ── */
  const locations = useMemo(() =>
    (worldData.entries || []).filter(e => e.category === 'locations' && e.geo && e.geo.lat != null && e.geo.lng != null),
    []
  );

  /* ── continents for land-mass rendering ── */
  const continents = useMemo(() =>
    locations.filter(l => l.locationType === 'continent' || l.locationType === 'region'),
    [locations]
  );

  /* ── pan handlers ── */
  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY, vbx: vb.x, vby: vb.y };
  }, [vb]);

  const handleMouseMove = useCallback((e) => {
    setMouse({ x: e.clientX, y: e.clientY });
    if (!isPanning) return;
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const scaleX = vb.w / rect.width;
    const scaleY = vb.h / rect.height;
    const dx = (e.clientX - panStart.current.x) * scaleX;
    const dy = (e.clientY - panStart.current.y) * scaleY;
    setVb(prev => ({ ...prev, x: panStart.current.vbx - dx, y: panStart.current.vby - dy }));
  }, [isPanning, vb.w, vb.h]);

  const handleMouseUp = useCallback(() => setIsPanning(false), []);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp]);

  /* ── zoom handler ── */
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();

    const factor = e.deltaY < 0 ? 0.9 : 1.1;
    const newZoom = clamp(zoom * (1 / factor), MIN_ZOOM, MAX_ZOOM);
    const ratio = newZoom / zoom;

    // cursor position in SVG coords
    const cx = vb.x + ((e.clientX - rect.left) / rect.width) * vb.w;
    const cy = vb.y + ((e.clientY - rect.top) / rect.height) * vb.h;

    const newW = MAP_W / newZoom;
    const newH = MAP_H / newZoom;
    const newX = cx - (cx - vb.x) / ratio;
    const newY = cy - (cy - vb.y) / ratio;

    setZoom(newZoom);
    setVb({ x: newX, y: newY, w: newW, h: newH });
  }, [zoom, vb]);

  /* ── reset view ── */
  const resetView = () => {
    setZoom(1);
    setVb({ x: 0, y: 0, w: MAP_W, h: MAP_H });
  };

  /* ── marker size helper ── */
  const markerSize = (w) => clamp((w || 2) * 1.8, 4, 40);

  /* ── grid lines ── */
  const gridLines = useMemo(() => {
    const lines = [];
    // vertical lines every 30 degrees of longitude
    for (let lng = -180; lng <= 180; lng += 30) {
      const x = (lng + 180) * (MAP_W / 360);
      lines.push(<line key={`v${lng}`} x1={x} y1={0} x2={x} y2={MAP_H} stroke="rgba(200,168,75,0.04)" strokeWidth="0.5" />);
    }
    // horizontal lines every 30 degrees of latitude
    for (let lat = -90; lat <= 90; lat += 30) {
      const y = (90 - lat) * (MAP_H / 180);
      lines.push(<line key={`h${lat}`} x1={0} y1={y} x2={MAP_W} y2={y} stroke="rgba(200,168,75,0.04)" strokeWidth="0.5" />);
    }
    return lines;
  }, []);

  /* ── SVG defs for effects ── */
  const svgDefs = (
    <defs>
      {/* glow filter for hovered marker */}
      <filter id="marker-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodColor="#c8a84b" floodOpacity="0.6" result="color" />
        <feComposite in="color" in2="blur" operator="in" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* subtle glow for land masses */}
      <filter id="land-glow" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* radial gradient for ocean */}
      <radialGradient id="ocean-bg" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#1e2a35" />
        <stop offset="100%" stopColor="#121820" />
      </radialGradient>

      {/* parchment-like texture noise */}
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise" />
        <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
        <feBlend in="SourceGraphic" in2="grey" mode="multiply" result="blend" />
        <feComponentTransfer in="blend">
          <feFuncA type="linear" slope="0.03" />
        </feComponentTransfer>
      </filter>

      {/* marker pulse animation */}
      <style>{`
        @keyframes marker-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes marker-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }
        .map-marker { cursor: pointer; transition: filter 0.2s; }
        .map-marker:hover { filter: url(#marker-glow); }
        .map-label { pointer-events: none; transition: opacity 0.2s; }
        .land-mass { transition: opacity 0.3s; }
      `}</style>
    </defs>
  );

  return (
    <div className="world-page" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* ── TOPBAR ── */}
      <header className="topbar" style={{
        position: 'relative', zIndex: 30,
        background: 'rgba(30,28,24,0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(200,168,75,0.15)',
      }}>
        <div className="topbar-brand" style={{ cursor: 'pointer' }} onClick={() => navigate('/map')}>
          World Map
        </div>
        <div className="topbar-breadcrumb">
          <span className="bc-link" onClick={() => navigate('/world')}>◂ Chronicler</span>
        </div>
        <div className="topbar-actions">
          {/* zoom indicator */}
          <span style={{
            fontSize: 11, color: '#6a5e50', padding: '4px 8px',
            background: 'rgba(42,39,34,0.8)', borderRadius: 3,
            border: '1px solid rgba(180,160,100,0.1)',
            fontFamily: 'monospace', marginRight: 4,
          }}>
            {Math.round(zoom * 100)}%
          </span>
          <button className="tb-btn" onClick={resetView}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Reset
          </button>
          <button className="tb-btn" onClick={() => setLegendVisible(v => !v)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="8" y1="8" x2="8" y2="8.01" /><line x1="12" y1="8" x2="16" y2="8" />
              <line x1="8" y1="12" x2="8" y2="12.01" /><line x1="12" y1="12" x2="16" y2="12" />
              <line x1="8" y1="16" x2="8" y2="16.01" /><line x1="12" y1="16" x2="16" y2="16" />
            </svg>
            Legend
          </button>
          <button className="tb-btn" onClick={() => navigate('/world')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Wiki
          </button>
          <button className="tb-btn" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            Story
          </button>
        </div>
      </header>

      {/* ── MAP CONTAINER ── */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: 'calc(100vh - 44px)',
          position: 'relative',
          background: '#121820',
          cursor: isPanning ? 'grabbing' : 'grab',
          userSelect: 'none',
          overflow: 'hidden',
        }}
      >
        <svg
          ref={svgRef}
          viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
          width="100%"
          height="100%"
          style={{ display: 'block' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
        >
          {svgDefs}

          {/* ── ocean background ── */}
          <rect x="-600" y="-400" width={MAP_W + 1200} height={MAP_H + 800} fill="url(#ocean-bg)" />

          {/* ── parchment noise overlay ── */}
          <rect x="-600" y="-400" width={MAP_W + 1200} height={MAP_H + 800} fill="rgba(200,168,75,0.02)" filter="url(#noise)" />

          {/* ── grid lines ── */}
          {gridLines}

          {/* ── border frame ── */}
          <rect x="0" y="0" width={MAP_W} height={MAP_H} fill="none" stroke="rgba(200,168,75,0.08)" strokeWidth="1" />

          {/* ── land masses (continents & regions as ellipses) ── */}
          {continents.map(loc => {
            const { x, y } = toSvg(loc.geo.lat, loc.geo.lng);
            const rw = clamp((loc.geo.width || 50) * 0.9, 15, 400);
            const rh = clamp((loc.geo.height || 50) * 0.8, 10, 300);
            const color = TYPE_COLORS[loc.locationType] || '#3a4a3a';
            const isCont = loc.locationType === 'continent';
            return (
              <g key={`land-${loc.id}`} className="land-mass">
                {/* shadow */}
                <ellipse cx={x + 2} cy={y + 2} rx={rw} ry={rh}
                  fill="rgba(0,0,0,0.15)" filter="url(#land-glow)"
                />
                {/* main landmass */}
                <ellipse cx={x} cy={y} rx={rw} ry={rh}
                  fill={color}
                  opacity={isCont ? 0.12 : 0.08}
                  stroke={color}
                  strokeWidth={isCont ? 0.8 : 0.4}
                  strokeOpacity={0.25}
                />
                {/* inner highlight */}
                <ellipse cx={x - rw * 0.15} cy={y - rh * 0.2} rx={rw * 0.6} ry={rh * 0.5}
                  fill={color}
                  opacity={0.04}
                />
              </g>
            );
          })}

          {/* ── coastline decoration dots ── */}
          {continents.filter(c => c.locationType === 'continent').map(loc => {
            const { x, y } = toSvg(loc.geo.lat, loc.geo.lng);
            const rw = clamp((loc.geo.width || 50) * 0.9, 15, 400);
            const rh = clamp((loc.geo.height || 50) * 0.8, 10, 300);
            const dots = [];
            for (let i = 0; i < 36; i++) {
              const angle = (i * 10) * Math.PI / 180;
              const dx = Math.cos(angle) * (rw + 3) + x;
              const dy = Math.sin(angle) * (rh + 3) + y;
              if (i % 3 === 0) {
                dots.push(
                  <circle key={`coast-${loc.id}-${i}`} cx={dx} cy={dy} r={0.6}
                    fill="rgba(200,168,75,0.12)"
                  />
                );
              }
            }
            return <g key={`coastdots-${loc.id}`}>{dots}</g>;
          })}

          {/* ── location markers ── */}
          {locations.map(loc => {
            const { x, y } = toSvg(loc.geo.lat, loc.geo.lng);
            const size = markerSize(loc.geo.width);
            const color = TYPE_COLORS[loc.locationType] || '#8a7a6a';
            const isHovered = hovered === loc.id;
            const isOcean = loc.locationType === 'ocean';
            const isContinent = loc.locationType === 'continent';

            // oceans and continents get label-only treatment at small sizes
            if (isOcean) {
              return (
                <g key={loc.id} className="map-marker"
                  onClick={() => navigate(`/world?entity=${loc.id}`)}
                  onMouseEnter={() => setHovered(loc.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <text x={x} y={y}
                    textAnchor="middle" dominantBaseline="middle"
                    fill={color} opacity={isHovered ? 0.9 : 0.4}
                    fontSize={clamp(size * 0.6, 6, 14)}
                    fontFamily="Cinzel, serif" fontWeight="600"
                    fontStyle="italic" letterSpacing="0.15em"
                    filter={isHovered ? 'url(#marker-glow)' : undefined}
                  >
                    {loc.name}
                  </text>
                </g>
              );
            }

            if (isContinent) {
              return (
                <g key={loc.id} className="map-marker"
                  onClick={() => navigate(`/world?entity=${loc.id}`)}
                  onMouseEnter={() => setHovered(loc.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <text x={x} y={y - clamp((loc.geo.height || 50) * 0.8, 10, 300) - 6}
                    textAnchor="middle" dominantBaseline="auto"
                    fill="#c8a84b" opacity={isHovered ? 0.9 : 0.35}
                    fontSize={clamp(size * 0.5, 8, 16)}
                    fontFamily="Cinzel, serif" fontWeight="700"
                    letterSpacing="0.2em"
                    filter={isHovered ? 'url(#marker-glow)' : undefined}
                  >
                    {loc.name.toUpperCase()}
                  </text>
                </g>
              );
            }

            // ── standard markers ──
            const isCity = loc.locationType === 'city';
            const r = clamp(size / 2, 2, 12);

            return (
              <g key={loc.id} className="map-marker"
                onClick={() => navigate(`/world?entity=${loc.id}`)}
                onMouseEnter={() => setHovered(loc.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* outer glow ring for cities */}
                {isCity && (
                  <circle cx={x} cy={y} r={r + 3}
                    fill="none" stroke={color} strokeWidth="0.5"
                    opacity={0.3}
                    style={{ animation: 'marker-pulse 3s ease-in-out infinite' }}
                  />
                )}

                {/* marker shadow */}
                <circle cx={x + 0.5} cy={y + 0.5} r={r} fill="rgba(0,0,0,0.4)" />

                {/* main marker */}
                <circle cx={x} cy={y} r={r}
                  fill={color}
                  stroke={isHovered ? '#c8a84b' : 'rgba(255,255,255,0.12)'}
                  strokeWidth={isHovered ? 1.2 : 0.5}
                  opacity={isHovered ? 1 : 0.85}
                  filter={isHovered ? 'url(#marker-glow)' : undefined}
                />

                {/* inner highlight */}
                <circle cx={x - r * 0.25} cy={y - r * 0.25} r={r * 0.35}
                  fill="rgba(255,255,255,0.15)"
                />

                {/* city diamond inset */}
                {isCity && (
                  <rect
                    x={x - 1.5} y={y - 1.5} width={3} height={3}
                    fill="#1a1814" opacity="0.6"
                    transform={`rotate(45 ${x} ${y})`}
                  />
                )}

                {/* label */}
                <text
                  className="map-label"
                  x={x} y={y + r + 7}
                  textAnchor="middle" dominantBaseline="hanging"
                  fill={isHovered ? '#d4cabb' : '#a09080'}
                  fontSize={clamp(r * 1.1, 4, 9)}
                  fontFamily="Source Sans 3, sans-serif"
                  fontWeight={isCity ? '600' : '400'}
                  opacity={isHovered ? 1 : 0.7}
                >
                  {loc.name}
                </text>
              </g>
            );
          })}

          {/* ── compass rose (top-right of map bounds) ── */}
          <g transform={`translate(${MAP_W - 60}, 60)`}>
            <CompassRose />
          </g>

          {/* ── decorative cartography title ── */}
          <text x={MAP_W / 2} y={28}
            textAnchor="middle" fill="rgba(200,168,75,0.15)"
            fontSize="14" fontFamily="Cinzel, serif" fontWeight="700"
            letterSpacing="0.3em"
          >
            THE KNOWN WORLD OF ZEPHYR
          </text>

          {/* ── scale bar ── */}
          <g transform={`translate(${MAP_W - 160}, ${MAP_H - 25})`}>
            <line x1="0" y1="0" x2="100" y2="0" stroke="rgba(200,168,75,0.25)" strokeWidth="1" />
            <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(200,168,75,0.25)" strokeWidth="0.8" />
            <line x1="50" y1="-2" x2="50" y2="2" stroke="rgba(200,168,75,0.15)" strokeWidth="0.5" />
            <line x1="100" y1="-3" x2="100" y2="3" stroke="rgba(200,168,75,0.25)" strokeWidth="0.8" />
            <text x="50" y="10" textAnchor="middle" fill="rgba(200,168,75,0.2)" fontSize="5" fontFamily="Source Sans 3, sans-serif">
              ~ 500 leagues ~
            </text>
          </g>
        </svg>

        {/* ── HTML overlay: Legend ── */}
        <Legend visible={legendVisible} />

        {/* ── HTML overlay: Tooltip ── */}
        <Tooltip info={hovered ? locations.find(l => l.id === hovered) : null} mouse={mouse} />

        {/* ── zoom controls ── */}
        <div style={{
          position: 'absolute', bottom: 16, right: 16,
          display: 'flex', flexDirection: 'column', gap: 4, zIndex: 20,
        }}>
          <button
            onClick={() => {
              const nz = clamp(zoom * 1.3, MIN_ZOOM, MAX_ZOOM);
              const cx = vb.x + vb.w / 2;
              const cy = vb.y + vb.h / 2;
              const nw = MAP_W / nz;
              const nh = MAP_H / nz;
              setZoom(nz);
              setVb({ x: cx - nw / 2, y: cy - nh / 2, w: nw, h: nh });
            }}
            style={{
              width: 32, height: 32, borderRadius: 3,
              background: 'rgba(42,39,34,0.9)', border: '1px solid rgba(200,168,75,0.2)',
              color: '#c8a84b', fontSize: 16, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'monospace',
            }}
          >+</button>
          <button
            onClick={() => {
              const nz = clamp(zoom * 0.75, MIN_ZOOM, MAX_ZOOM);
              const cx = vb.x + vb.w / 2;
              const cy = vb.y + vb.h / 2;
              const nw = MAP_W / nz;
              const nh = MAP_H / nz;
              setZoom(nz);
              setVb({ x: cx - nw / 2, y: cy - nh / 2, w: nw, h: nh });
            }}
            style={{
              width: 32, height: 32, borderRadius: 3,
              background: 'rgba(42,39,34,0.9)', border: '1px solid rgba(200,168,75,0.2)',
              color: '#c8a84b', fontSize: 16, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'monospace',
            }}
          >−</button>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
