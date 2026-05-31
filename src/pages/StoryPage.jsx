import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleScreen from '../components/story/TitleScreen';
import ChapterReader from '../components/story/ChapterReader';
import EntityLinkDialog from '../components/story/EntityLinkDialog';
import { arcInfo, chapters, worldIntro as WorldIntro, TitleEmblem } from '../arcs/Arc1_HalwenSpiral';
import '../styles/story.css';

const StoryPage = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentChapterIdx, setCurrentChapterIdx] = useState(() => {
    const saved = localStorage.getItem('zephyr_last_chapter');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [maxRead, setMaxRead] = useState(() => {
    const saved = localStorage.getItem('zephyr_max_chapter');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [dialogEntity, setDialogEntity] = useState(null);

  useEffect(() => {
    localStorage.setItem('zephyr_last_chapter', currentChapterIdx.toString());
    const currentChapterNum = chapters[currentChapterIdx]?.number || (currentChapterIdx + 1);
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
          arcInfo={arcInfo} 
          onBegin={handleBegin} 
          totalChapters={chapters.length}
          lastReadIdx={currentChapterIdx}
          chapters={chapters}
          maxRead={maxRead}
          setMaxRead={setMaxRead}
        />
      </div>
    );
  }

  const currentChapter = chapters[currentChapterIdx];

  return (
    <div className="story-page">
      <nav className="chapter-nav">
        <button className="ch-btn" onClick={() => setStarted(false)} style={{marginRight: '1rem'}}>
          ← Title
        </button>
        <div className="nav-title">{arcInfo.name}</div>
        <div className="chapter-list">
          {chapters.map((ch, i) => (
            <button
              key={ch.id}
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
        {currentChapterIdx === 0 && <WorldIntro />}

        <ChapterReader 
          chapter={currentChapter}
          currentIndex={currentChapterIdx}
          totalChapters={chapters.length}
          onPrev={() => setCurrentChapterIdx(prev => Math.max(0, prev - 1))}
          onNext={() => setCurrentChapterIdx(prev => Math.min(chapters.length - 1, prev + 1))}
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
