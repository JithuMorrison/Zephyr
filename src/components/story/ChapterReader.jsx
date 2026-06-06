import React, { useEffect, useRef, useState } from 'react';

const ChapterReader = ({ chapter, currentIndex, totalChapters, onPrev, onNext, onEntityClick }) => {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in effect when chapter changes
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [chapter.id]);

  useEffect(() => {
    if (!contentRef.current) return;
    
    // Attach event listeners to entity links
    const links = contentRef.current.querySelectorAll('.entity-link');
    const handler = (e) => {
      const entityId = e.currentTarget.dataset.entity;
      const entityName = e.currentTarget.textContent;
      onEntityClick(entityId, entityName);
    };
    
    links.forEach(link => link.addEventListener('click', handler));
    
    return () => {
      links.forEach(link => link.removeEventListener('click', handler));
    };
  }, [chapter.id, onEntityClick]);

  return (
    <section className={`chapter ${isVisible ? 'visible' : ''}`} id={chapter.id}>
      {/* Render Side Images */}
      {chapter.sideImages && chapter.sideImages.map((img, idx) => (
        <div key={idx} className={`side-image ${img.side === 'right' ? 'side-right' : 'side-left'}`} style={{ top: img.top || '10%' }}>
          <img src={img.url} alt={`Side illustration ${idx}`} />
        </div>
      ))}

      <div className="chapter-header">
        <span className="chapter-number">{chapter.numberText}</span>
        <h2 className="chapter-title">{chapter.title}</h2>
        {chapter.epigraph && (
          <p className="chapter-epigraph">{chapter.epigraph}</p>
        )}
      </div>

      {chapter.number === 1 && (
        <div className="chapter-divider">
          <span>◆</span>
        </div>
      )}

      <div className="prose" ref={contentRef}>
        <chapter.content />
      </div>

      <div className="chapter-end">
        <div className="chapter-end-divider"></div>
        <span className="end-word">◆ &nbsp;&nbsp;&nbsp;&nbsp; ◆ &nbsp;&nbsp;&nbsp;&nbsp; ◆</span>
      </div>

      <div className="chapter-nav-buttons">
        <button 
          className="chapter-nav-btn" 
          onClick={onPrev}
          disabled={currentIndex === 0}
        >
          Previous Chapter
        </button>
        <button 
          className="chapter-nav-btn" 
          onClick={onNext}
          disabled={currentIndex === totalChapters - 1}
        >
          Next Chapter
        </button>
      </div>
    </section>
  );
};

export default ChapterReader;
