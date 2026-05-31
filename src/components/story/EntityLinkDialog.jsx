import React from 'react';

const EntityLinkDialog = ({ entityId, entityName, onViewInfo, onContinue }) => {
  return (
    <div className="entity-dialog-overlay" onClick={onContinue}>
      <div className="entity-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>{entityName}</h3>
        <p>Would you like to learn more about {entityName} in the World Wiki?</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button className="entity-dialog-btn secondary" onClick={onContinue}>
            Continue Story
          </button>
          <button className="entity-dialog-btn primary" onClick={onViewInfo}>
            View Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntityLinkDialog;
