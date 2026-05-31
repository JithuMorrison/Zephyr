import React from 'react';
import { Link } from 'react-router-dom';

const TitleScreen = ({ arcInfo, onBegin, totalChapters, lastReadIdx, chapters, maxRead, setMaxRead }) => {
  const lastReadText = (lastReadIdx !== undefined && lastReadIdx >= 0 && chapters && chapters[lastReadIdx]) 
    ? chapters[lastReadIdx].numberText 
    : 'Not Started';

  return (
    <div className="title-screen">
      <svg
        className="title-emblem"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="38" stroke="#c8a84b" strokeWidth="0.75" opacity="0.4" />
        <circle cx="40" cy="40" r="30" stroke="#c8a84b" strokeWidth="0.5" opacity="0.25" />
        <path d="M40 10 L40 70 M10 40 L70 40" stroke="#c8a84b" strokeWidth="0.5" opacity="0.2" />
        <path d="M40 15 L55 30 L55 50 L40 65 L25 50 L25 30 Z" stroke="#c8a84b" strokeWidth="0.75" opacity="0.5" fill="none" />
        <path d="M40 22 C45 30 50 32 50 40 C50 48 45 50 40 58 C35 50 30 48 30 40 C30 32 35 30 40 22Z" fill="#8b2020" opacity="0.6" />
        <circle cx="40" cy="40" r="3" fill="#c8a84b" opacity="0.8" />
        <path d="M40 25 L42 35 L40 37 L38 35Z M40 55 L42 45 L40 43 L38 45Z" fill="#c8a84b" opacity="0.4" />
      </svg>
      
      <div className="series-label">{arcInfo.seriesLabel}</div>
      <h1 className="main-title">
        Shadow
        <br />
        Covenant
      </h1>
      <div className="subtitle">{arcInfo.subtitle}</div>
      
      <div style={{ margin: '1rem 0 1rem 0', display: 'flex', gap: '3rem', fontSize: '0.75rem', color: 'var(--text2)', fontFamily: '"Cinzel Decorative", serif', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
        <div>Chapters Released: <span style={{ color: 'var(--gold)' }}>{totalChapters || 16}</span></div>
        <div>Last Read: <span style={{ color: 'var(--gold)' }}>{lastReadText}</span></div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text2)', fontFamily: '"Cinzel Decorative", serif', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem' }}>
        Max Chapter Read:
        <input 
          type="number" 
          value={maxRead} 
          onChange={(e) => setMaxRead(parseInt(e.target.value, 10) || 0)}
          style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid var(--border)',
            color: 'var(--gold)',
            width: '60px',
            padding: '2px 8px',
            fontFamily: '"Cinzel Decorative", serif',
            textAlign: 'center'
          }}
          min="0"
          max={totalChapters || 16}
        />
      </div>

      <div className="divider-gold"></div>
      <div className="world-tag">{arcInfo.worldTag}</div>
      <br />
      <br />
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', position: 'relative', zIndex: 10, marginTop: '2rem' }}>
        <button className="title-action-btn" onClick={onBegin}>
          Start Reading
        </button>
        
        <Link to="/world" className="title-action-btn secondary" style={{ textDecoration: 'none' }}>
          World Wiki ↗
        </Link>
      </div>
    </div>
  );
};

export default TitleScreen;
