import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleScreen from '../components/story/TitleScreen';
import ChapterReader from '../components/story/ChapterReader';
import EntityLinkDialog from '../components/story/EntityLinkDialog';
import { arcInfo as gravityArcInfo, chapters as gravityChapters, worldIntro as GravityWorldIntro } from '../arcs/Arc1_GravityArc';
import { arcInfo as halwenArcInfo, chapters as halwenChapters } from '../arcs/Arc15_HalwenSpiral';
import '../styles/story.css';

const arcChapters = [
  ...gravityChapters.map((chapter) => ({ ...chapter, arcInfo: gravityArcInfo })),
  ...halwenChapters.map((chapter) => ({ ...chapter, arcInfo: halwenArcInfo })),
];
const StoryPage = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentChapterIdx, setCurrentChapterIdx] = useState(() => {
    const saved = Number.parseInt(localStorage.getItem('zephyr_last_chapter') || '0', 10);
    const lastChapterIdx = Math.max(0, arcChapters.length - 1);
    return Number.isFinite(saved) ? Math.min(Math.max(saved, 0), lastChapterIdx) : 0;
  });
  const [maxRead, setMaxRead] = useState(() => {
    const saved = localStorage.getItem('zephyr_max_chapter');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [dialogEntity, setDialogEntity] = useState(null);

  useEffect(() => {
    localStorage.setItem('zephyr_last_chapter', currentChapterIdx.toString());
    const currentChapterNum = currentChapterIdx + 1;
    if (currentChapterNum > maxRead) {
      setMaxRead(currentChapterNum);
      localStorage.setItem('zephyr_max_chapter', currentChapterNum.toString());
    }
  }, [currentChapterIdx, maxRead]);

  // Scroll to top when changing chapters
  useEffect(() => {
    if (started) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentChapterIdx, started]);

  const handleBegin = () => {
    setStarted(true);
  };

  const handleEntityClick = (id, name) => {
    setDialogEntity({ id, name });
  };

  const handleDialogContinue = () => {
    setDialogEntity(null);
  };

  const handleDialogViewInfo = () => {
    // Navigate to World Wiki with the entity ID selected
    navigate(`/world?entity=${dialogEntity.id}`);
  };

  if (!started) {
    return (
      <div className="story-page">
        <TitleScreen 
          arcInfo={gravityArcInfo} 
          onBegin={handleBegin} 
          totalChapters={arcChapters.length}
          lastReadIdx={currentChapterIdx}
          chapters={arcChapters}
          maxRead={maxRead}
          setMaxRead={setMaxRead}
        />
      </div>
    );
  }

  const currentChapter = arcChapters[currentChapterIdx];

  return (
    <div className="story-page">
      <nav className="chapter-nav">
        <button className="ch-btn" onClick={() => setStarted(false)} style={{marginRight: '1rem'}}>
          ← Title
        </button>
        <div className="nav-title">{currentChapter.arcInfo.name}</div>
        <div className="chapter-list">
          {arcChapters.map((ch, i) => (
            <button
              key={`${i}-${ch.id || ch.number}`}
              className={`ch-btn ${i === currentChapterIdx ? 'active' : ''}`}
              onClick={() => setCurrentChapterIdx(i)}
            >
              {ch.number}
            </button>
          ))}
        </div>
        <button className="ch-btn" onClick={() => navigate('/world')} style={{ marginLeft: 'auto' }}>
          World Wiki ↗
        </button>
      </nav>

      <main className="novel-body">
        {currentChapterIdx === 0 && <GravityWorldIntro />}
        <ChapterReader 
          chapter={currentChapter}
          currentIndex={currentChapterIdx}
          totalChapters={arcChapters.length}
          onPrev={() => setCurrentChapterIdx(prev => Math.max(0, prev - 1))}
          onNext={() => setCurrentChapterIdx(prev => Math.min(arcChapters.length - 1, prev + 1))}
          onEntityClick={handleEntityClick}
        />
      </main>

      <footer>
        <p>Copyright © {new Date().getFullYear()} - The World of Zephyr</p>
      </footer>

      {dialogEntity && (
        <EntityLinkDialog 
          entityId={dialogEntity.id}
          entityName={dialogEntity.name}
          onViewInfo={handleDialogViewInfo}
          onContinue={handleDialogContinue}
        />
      )}
    </div>
  );
};

export default StoryPage;
