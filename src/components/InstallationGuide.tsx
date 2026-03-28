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
          <h3>Step 1: Download</h3>
          <p>Find a theme you love and click <strong>"Download Theme"</strong>. This will download a <code>.zip</code> package containing both the YAML configuration and the background image.</p>
          
          <h3>Step 2: Locate Warp Themes Folder</h3>
          <p>Warp looks for custom themes in your local themes directory. Open your terminal and run:</p>
          <div className={styles.codeBlock}>mkdir -p ~/.warp/themes</div>
          
          <h3>Step 3: Extract and Move</h3>
          <ol>
            <li>Unzip the downloaded <code>-package.zip</code> file.</li>
            <li>You will see a folder (e.g., <code>lofi-study/</code>).</li>
            <li>Move that entire folder into your <code>~/.warp/themes/</code> directory.</li>
          </ol>
          <p>Your folder structure should look like this:</p>
          <div className={styles.codeBlock}>
            ~/.warp/themes/<br/>
            └── lofi-study/<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;├── lofi-study.yaml<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;└── images/<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── lofi-study.jpg
          </div>

          <h3>Step 4: Activate in Warp</h3>
          <p>Open Warp, go to <strong>Settings > Appearance > Themes</strong>, and you should see your new theme under the "Custom" section. Select it to apply!</p>
        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;
