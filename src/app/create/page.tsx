'use client';

import React, { useState, useRef } from 'react';
import ColorThief from 'colorthief';
import TerminalPreview from '@/components/TerminalPreview';
import { generateThemeYaml, copyToClipboard } from '@/utils/theme';
import { Theme, ThemeColors } from '@/data/themes';
import styles from '@/app/page.module.css';
import Link from 'next/link';

export default function CreateTheme() {
  const [image, setImage] = useState<string | null>(null);
  const [colors, setColors] = useState<ThemeColors | null>(null);
  const [opacity, setOpacity] = useState(40);
  const [blur, setBlur] = useState(0);
  const [copied, setCopied] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setColors(null); // Reset colors for new image
      };
      reader.readAsDataURL(file);
    }
  };

  const extractColors = () => {
    if (!imgRef.current) return;
    
    const colorThief = new ColorThief();
    const palette = colorThief.getPalette(imgRef.current, 10);
    const dominant = colorThief.getColor(imgRef.current);
    
    const rgbToHex = (r: number, g: number, b: number) => 
      '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

    const hexPalette = palette.map((p: number[]) => rgbToHex(p[0], p[1], p[2]));
    const hexDominant = rgbToHex(dominant[0], dominant[1], dominant[2]);

    // Create a balanced theme based on extracted colors
    const newColors: ThemeColors = {
      accent: hexPalette[0],
      background: '#0d0d0d', // Default dark for terminal
      foreground: '#ffffff',
      terminal_colors: {
        normal: {
          black: '#0d0d0d',
          red: hexPalette[1] || '#ff5555',
          green: hexPalette[2] || '#50fa7b',
          yellow: hexPalette[3] || '#f1fa8c',
          blue: hexPalette[4] || '#8be9fd',
          magenta: hexPalette[5] || '#ff79c6',
          cyan: hexPalette[6] || '#8be9fd',
          white: '#ffffff',
        }
      }
    };
    
    setColors(newColors);
  };

  const handleCopy = () => {
    if (!colors) return;
    const mockTheme: Theme = {
      id: 'custom-theme',
      name: 'Custom Aesthetic',
      author: 'You',
      description: 'AI Generated Theme',
      colors: colors,
      backgroundImage: image || undefined,
      opacity: opacity,
      tags: ['Custom', 'AI'],
      category: 'Minimal'
    };
    const yaml = generateThemeYaml(mockTheme, false, blur);
    copyToClipboard(yaml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <Link href="/" className={styles.tag} style={{ textDecoration: 'none' }}>← Back to Gallery</Link>
        </div>
        <h1 className={styles.title}>AI<span>Creator</span></h1>
        <p className={styles.subtitle}>Upload an image and let AI extract the perfect aesthetic palette.</p>
      </header>

      <div className={styles.gallery} style={{ gridTemplateColumns: '1fr 1fr' }}>
        {/* Left: Upload and Controls */}
        <div className={`${styles.themeCard} glass card`} style={{ padding: '30px' }}>
          <h3 style={{ marginBottom: '20px' }}>1. Upload Background</h3>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload}
            className={styles.searchBar}
            style={{ marginBottom: '20px', padding: '10px' }}
          />
          
          {image && (
            <>
              <img 
                ref={imgRef} 
                src={image} 
                alt="Upload preview" 
                style={{ width: '100%', borderRadius: '12px', marginBottom: '20px', display: 'none' }}
                onLoad={extractColors}
                crossOrigin="anonymous"
              />
              <div style={{ width: '100%', height: '150px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '12px', marginBottom: '20px' }}></div>
            </>
          )}

          <h3 style={{ marginBottom: '20px' }}>2. Customize Vibe</h3>
          <div className={styles.aestheticLab}>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label>Opacity</label>
                <span>{opacity}%</span>
              </div>
              <input 
                type="range" min="0" max="100" value={opacity} 
                onChange={(e) => setOpacity(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label>Blur</label>
                <span>{blur}px</span>
              </div>
              <input 
                type="range" min="0" max="20" value={blur} 
                onChange={(e) => setBlur(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
          </div>

          <button 
            className={styles.downloadBtn} 
            onClick={handleCopy}
            disabled={!colors}
            style={{ width: '100%' }}
          >
            {copied ? 'Copied YAML!' : 'Copy AI Theme YAML'}
          </button>
        </div>

        {/* Right: Preview */}
        <div className={styles.previewContainer} style={{ background: 'transparent' }}>
          <h3 style={{ marginBottom: '20px', color: 'white' }}>3. Live Preview</h3>
          {colors ? (
            <TerminalPreview 
              colors={colors} 
              backgroundImage={image || undefined}
              opacity={opacity}
              blur={blur}
            />
          ) : (
            <div className={styles.noResults} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              <p>Upload an image to see the preview</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
