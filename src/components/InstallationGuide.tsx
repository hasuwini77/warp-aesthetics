'use client';

import React from 'react';
import styles from '@/app/page.module.css';

interface InstallationGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstallationGuide: React.FC<InstallationGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>How to Install</h2>
          <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        </div>
        <div className={styles.modalBody}>
          <div style={{ padding: '15px', background: 'rgba(0, 255, 204, 0.05)', borderRadius: '12px', border: '1px solid rgba(0, 255, 204, 0.2)', marginBottom: '20px' }}>
            <h3 style={{ color: '#00ffcc', marginTop: 0 }}>⚡️ Pro Method: Zero-Click CLI</h3>
            <p>The fastest way to install is via terminal. Click the <strong>"Terminal"</strong> button on any theme to copy the command, then just paste it!</p>
            <div className={styles.codeBlock}>npx warped-themes install [theme-id]</div>
            <p style={{ fontSize: '0.8rem', marginBottom: 0 }}>It automatically downloads assets and sets everything up in <code>~/.warp/themes/</code>.</p>
          </div>

          <h3 style={{ marginTop: '30px' }}>Manual Method</h3>
          <p>Find a theme you love and click <strong>"Download"</strong>. This will download a <code>.zip</code> package containing the <code>.yaml</code> and the matching <code>.jpg</code> image.</p>
          
          <p>1. Open your terminal and ensure the themes folder exists:</p>
          <div className={styles.codeBlock}>mkdir -p ~/.warp/themes</div>
          
          <p>2. Unzip and move both the <code>.yaml</code> and <code>.jpg</code> file directly into <code>~/.warp/themes/</code>.</p>
          <div className={styles.codeBlock}>
            ~/.warp/themes/<br/>
            ├── lofi-study.yaml<br/>
            └── lofi-study.jpg
          </div>

          <h3>Activate in Warp</h3>
          <p>Open Warp, go to <strong>Settings &gt; Appearance &gt; Themes</strong>, and select your new theme under the "Custom" section.</p>
        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;
