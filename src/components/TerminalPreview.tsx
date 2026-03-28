import React from 'react';
import styles from './TerminalPreview.module.css';

interface ThemeColors {
  accent: string;
  background: string;
  foreground: string;
  terminal_colors: {
    normal: {
      black: string;
      red: string;
      green: string;
      yellow: string;
      blue: string;
      magenta: string;
      cyan: string;
      white: string;
    };
  };
}

interface TerminalPreviewProps {
  colors: ThemeColors;
  backgroundImage?: string;
  opacity?: number;
}

const TerminalPreview: React.FC<TerminalPreviewProps> = ({ colors, backgroundImage, opacity = 100 }) => {
  const bgStyle: React.CSSProperties = {
    backgroundColor: colors.background,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.background,
    opacity: (100 - opacity) / 100,
    zIndex: 1,
  };

  return (
    <div className={styles.terminalWindow} style={bgStyle}>
      <div style={overlayStyle}></div>
      <div className={styles.content} style={{ color: colors.foreground, zIndex: 2 }}>
        <div className={styles.header}>
          <div className={styles.buttons}>
            <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }}></span>
            <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }}></span>
            <span className={styles.dot} style={{ backgroundColor: '#27c93f' }}></span>
          </div>
          <div className={styles.title}>~/warped-aesthetics</div>
        </div>
        <div className={styles.body} style={{ fontFamily: 'var(--font-geist-mono)' }}>
          <div className={styles.line}>
            <span style={{ color: colors.terminal_colors.normal.green }}>➜</span>
            <span style={{ color: colors.terminal_colors.normal.cyan, marginLeft: '8px' }}>~</span>
            <span style={{ marginLeft: '8px' }}>ls -la</span>
          </div>
          <div className={styles.line}>
            <span>total 64</span>
          </div>
          <div className={styles.line}>
            <span style={{ color: colors.terminal_colors.normal.blue }}>drwxr-xr-x</span>
            <span style={{ marginLeft: '8px' }}>  3 warped  staff    96 Mar 28 12:00</span>
            <span style={{ color: colors.terminal_colors.normal.blue, marginLeft: '8px' }}>.</span>
          </div>
          <div className={styles.line}>
            <span style={{ color: colors.terminal_colors.normal.blue }}>drwxr-xr-x</span>
            <span style={{ marginLeft: '8px' }}> 10 warped  staff   320 Mar 28 12:00</span>
            <span style={{ color: colors.terminal_colors.normal.blue, marginLeft: '8px' }}>..</span>
          </div>
          <div className={styles.line}>
            <span style={{ color: colors.terminal_colors.normal.green }}>-rw-r--r--</span>
            <span style={{ marginLeft: '8px' }}>  1 warped  staff   512 Mar 28 12:00</span>
            <span style={{ marginLeft: '8px' }}>theme.yaml</span>
          </div>
          <div className={styles.line} style={{ marginTop: '12px' }}>
            <span style={{ color: colors.terminal_colors.normal.green }}>➜</span>
            <span style={{ color: colors.terminal_colors.normal.cyan, marginLeft: '8px' }}>~</span>
            <span className={styles.cursor} style={{ backgroundColor: colors.accent, marginLeft: '8px' }}>&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalPreview;
