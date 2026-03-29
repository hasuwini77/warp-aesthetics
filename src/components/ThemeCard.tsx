'use client';

import React, { useState, useEffect } from 'react';
import { Theme } from '@/data/themes';
import TerminalPreview, { CodeLanguage } from './TerminalPreview';
import { downloadTheme, copyToClipboard, generateThemeYaml } from '@/utils/theme';
import styles from '@/app/page.module.css';

interface ThemeCardProps {
  theme: Theme;
}

const LANGUAGES: { id: CodeLanguage; label: string }[] = [
  { id: 'shell', label: 'Shell' },
  { id: 'python', label: 'Python' },
  { id: 'react', label: 'React' },
  { id: 'rust', label: 'Rust' }
];

const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  const [copied, setCopied] = useState(false);
  const [cliCopied, setCliCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [language, setLanguage] = useState<CodeLanguage>('shell');
  
  // Aesthetic Lab State
  const [customOpacity, setCustomOpacity] = useState(theme.opacity ?? 100);
  const [customBlur, setCustomBlur] = useState(0);

  // Load customizations from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`vibe-${theme.id}`);
    if (saved) {
      try {
        const { opacity, blur } = JSON.parse(saved);
        setCustomOpacity(opacity);
        setCustomBlur(blur);
      } catch (e) {
        console.error("Failed to load saved vibe", e);
      }
    }
  }, [theme.id]);

  // Save customizations whenever they change
  useEffect(() => {
    localStorage.setItem(`vibe-${theme.id}`, JSON.stringify({
      opacity: customOpacity,
      blur: customBlur
    }));
  }, [customOpacity, customBlur, theme.id]);

  const handleCopy = async () => {
    const yaml = generateThemeYaml({ ...theme, opacity: customOpacity }, false, customBlur);
    const success = await copyToClipboard(yaml);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyCLI = async () => {
    const command = `npx warped-themes install ${theme.id}`;
    const success = await copyToClipboard(command);
    if (success) {
      setCliCopied(true);
      setTimeout(() => setCliCopied(false), 2000);
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadTheme({ ...theme, opacity: customOpacity }, customBlur);
    } catch (err) {
      console.error('Download failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={`${styles.themeCard} glass card`}>
      <div className={styles.previewContainer}>
        <div className={styles.langSwitcher}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.id}
              className={`${styles.langBtn} ${language === lang.id ? styles.langBtnActive : ''}`}
              onClick={() => setLanguage(lang.id)}
            >
              {lang.label}
            </button>
          ))}
        </div>
        <TerminalPreview 
          colors={theme.colors} 
          backgroundImage={theme.backgroundImage} 
          opacity={customOpacity}
          blur={customBlur}
          language={language}
        />
      </div>
      
      <div className={styles.themeInfo}>
        <div className={styles.themeHeader}>
          <div className={styles.titleWrapper}>
            <h3>{theme.name}</h3>
            <code className={styles.idBadge}>{theme.id}</code>
          </div>
          <span className={styles.author}>by {theme.author}</span>
        </div>
        <p className={styles.description}>{theme.description}</p>
        
        {theme.backgroundImage && (
          <div className={styles.aestheticLab}>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label>Opacity</label>
                <span>{customOpacity}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={customOpacity} 
                onChange={(e) => setCustomOpacity(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label>Background Blur</label>
                <span>{customBlur}px</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="64" 
                step="1"
                value={customBlur} 
                onChange={(e) => setCustomBlur(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
          </div>
        )}

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
            {downloading ? 'Bundling...' : 'Download'}
          </button>
          <button 
            className={styles.cliBtn}
            onClick={handleCopyCLI}
          >
            {cliCopied ? 'Copied!' : 'Terminal'}
          </button>
          <button 
            className={styles.copyBtn}
            onClick={handleCopy}
          >
            {copied ? 'Copied!' : 'YAML'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
