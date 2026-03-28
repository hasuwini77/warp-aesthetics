'use client';

import React, { useState } from 'react';
import { Theme } from '@/data/themes';
import TerminalPreview from './TerminalPreview';
import { downloadTheme, copyToClipboard, generateThemeYaml } from '@/utils/theme';
import styles from '@/app/page.module.css';

interface ThemeCardProps {
  theme: Theme;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopy = async () => {
    const yaml = generateThemeYaml(theme);
    const success = await copyToClipboard(yaml);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadTheme(theme);
    } catch (err) {
      console.error('Download failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={`${styles.themeCard} glass card`}>
      <div className={styles.previewContainer}>
        <TerminalPreview 
          colors={theme.colors} 
          backgroundImage={theme.backgroundImage} 
          opacity={theme.opacity} 
        />
      </div>
      <div className={styles.themeInfo}>
        <div className={styles.themeHeader}>
          <h3>{theme.name}</h3>
          <span className={styles.author}>by {theme.author}</span>
        </div>
        <p className={styles.description}>{theme.description}</p>
        <div className={styles.tags}>
          {theme.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.actions}>
          <button 
            className={styles.downloadBtn}
            onClick={handleDownload}
            disabled={downloading}
          >
            {downloading ? 'Bundling...' : 'Download Theme'}
          </button>
          <button 
            className={styles.copyBtn}
            onClick={handleCopy}
          >
            {copied ? 'Copied!' : 'Copy Config'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
