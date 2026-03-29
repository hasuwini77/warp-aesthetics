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

export type CodeLanguage = 'shell' | 'python' | 'react' | 'rust';

interface TerminalPreviewProps {
  colors: ThemeColors;
  backgroundImage?: string;
  opacity?: number;
  language?: CodeLanguage;
}

const TerminalPreview: React.FC<TerminalPreviewProps> = ({ 
  colors, 
  backgroundImage, 
  opacity = 100,
  language = 'shell' 
}) => {
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

  const t = colors.terminal_colors.normal;

  const renderContent = () => {
    switch (language) {
      case 'python':
        return (
          <>
            <div className={styles.line}>
              <span style={{ color: t.magenta }}>def</span>
              <span style={{ color: t.blue, marginLeft: '8px' }}>generate_aesthetic</span>
              <span style={{ color: colors.foreground }}>(theme, vibes=</span>
              <span style={{ color: t.yellow }}>"high"</span>
              <span style={{ color: colors.foreground }}>):</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.green, marginLeft: '16px' }}>"""</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.green, marginLeft: '16px' }}>Applies maximum aesthetic to terminal</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.green, marginLeft: '16px' }}>"""</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.cyan, marginLeft: '16px' }}>print</span>
              <span style={{ color: colors.foreground }}>(f</span>
              <span style={{ color: t.yellow }}>"Loading </span>
              <span style={{ color: colors.foreground }}>{'{theme}'}</span>
              <span style={{ color: t.yellow }}>..."</span>
              <span style={{ color: colors.foreground }}>)</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.magenta, marginLeft: '16px' }}>return</span>
              <span style={{ color: colors.foreground, marginLeft: '8px' }}>{'{'}</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.yellow, marginLeft: '32px' }}>"status"</span>
              <span style={{ color: colors.foreground }}>: </span>
              <span style={{ color: t.cyan }}>True</span><span style={{ color: colors.foreground }}>,</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.yellow, marginLeft: '32px' }}>"vibe"</span>
              <span style={{ color: colors.foreground }}>: vibes</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground, marginLeft: '16px' }}>{'}'}</span>
            </div>
            <div className={styles.line} style={{ marginTop: '12px' }}>
              <span className={styles.cursor} style={{ backgroundColor: colors.accent }}>&nbsp;</span>
            </div>
          </>
        );
      case 'react':
        return (
          <>
            <div className={styles.line}>
              <span style={{ color: t.magenta }}>import</span>
              <span style={{ color: colors.foreground, marginLeft: '8px' }}>React, {'{'} useState {'}'}</span>
              <span style={{ color: t.magenta, marginLeft: '8px' }}>from</span>
              <span style={{ color: t.yellow, marginLeft: '8px' }}>'react'</span><span style={{ color: colors.foreground }}>;</span>
            </div>
            <div className={styles.line}><br/></div>
            <div className={styles.line}>
              <span style={{ color: t.magenta }}>export</span>
              <span style={{ color: t.cyan, marginLeft: '8px' }}>default</span>
              <span style={{ color: t.magenta, marginLeft: '8px' }}>function</span>
              <span style={{ color: t.blue, marginLeft: '8px' }}>VibeCheck</span>
              <span style={{ color: colors.foreground }}>() {'{'}</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.magenta, marginLeft: '16px' }}>const</span>
              <span style={{ color: colors.foreground, marginLeft: '8px' }}>[isChill, setChill] =</span>
              <span style={{ color: t.blue, marginLeft: '8px' }}>useState</span>
              <span style={{ color: colors.foreground }}>(</span><span style={{ color: t.magenta }}>true</span><span style={{ color: colors.foreground }}>);</span>
            </div>
            <div className={styles.line}><br/></div>
            <div className={styles.line}>
              <span style={{ color: t.magenta, marginLeft: '16px' }}>return</span>
              <span style={{ color: colors.foreground, marginLeft: '8px' }}>(</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground, marginLeft: '32px' }}>&lt;</span><span style={{ color: t.red }}>div</span>
              <span style={{ color: t.cyan, marginLeft: '8px' }}>className</span><span style={{ color: colors.foreground }}>=</span><span style={{ color: t.yellow }}>"warp-theme"</span><span style={{ color: colors.foreground }}>&gt;</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground, marginLeft: '48px' }}>{'{'}isChill ?</span>
              <span style={{ color: t.yellow, marginLeft: '8px' }}>'🌙 Lofi'</span>
              <span style={{ color: colors.foreground, marginLeft: '8px' }}>:</span>
              <span style={{ color: t.yellow, marginLeft: '8px' }}>'⚡️ Cyber'</span><span style={{ color: colors.foreground }}>{'}'}</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground, marginLeft: '32px' }}>&lt;/</span><span style={{ color: t.red }}>div</span><span style={{ color: colors.foreground }}>&gt;</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground, marginLeft: '16px' }}>);</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground }}>{'}'}</span>
              <span className={styles.cursor} style={{ backgroundColor: colors.accent, marginLeft: '8px' }}>&nbsp;</span>
            </div>
          </>
        );
      case 'rust':
        return (
          <>
            <div className={styles.line}>
              <span style={{ color: t.magenta }}>pub</span>
              <span style={{ color: t.magenta, marginLeft: '8px' }}>struct</span>
              <span style={{ color: t.blue, marginLeft: '8px' }}>WarpTheme</span>
              <span style={{ color: colors.foreground }}> {'{'}</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground, marginLeft: '16px' }}>name:</span>
              <span style={{ color: t.cyan, marginLeft: '8px' }}>String</span><span style={{ color: colors.foreground }}>,</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground, marginLeft: '16px' }}>opacity:</span>
              <span style={{ color: t.cyan, marginLeft: '8px' }}>u8</span><span style={{ color: colors.foreground }}>,</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground }}>{'}'}</span>
            </div>
            <div className={styles.line}><br/></div>
            <div className={styles.line}>
              <span style={{ color: t.magenta }}>impl</span>
              <span style={{ color: t.blue, marginLeft: '8px' }}>WarpTheme</span>
              <span style={{ color: colors.foreground }}> {'{'}</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.magenta, marginLeft: '16px' }}>pub fn</span>
              <span style={{ color: t.blue, marginLeft: '8px' }}>apply</span>
              <span style={{ color: colors.foreground }}>(&amp;</span>
              <span style={{ color: t.red }}>self</span><span style={{ color: colors.foreground }}>)</span>
              <span style={{ color: t.magenta, marginLeft: '8px' }}>-&gt;</span>
              <span style={{ color: t.cyan, marginLeft: '8px' }}>Result</span>
              <span style={{ color: colors.foreground }}>&lt;(),</span>
              <span style={{ color: t.cyan, marginLeft: '8px' }}>Error</span><span style={{ color: colors.foreground }}>&gt; {'{'}</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.blue, marginLeft: '32px' }}>println!</span>
              <span style={{ color: colors.foreground }}>(</span><span style={{ color: t.yellow }}>"Applying {'{}'}"</span><span style={{ color: colors.foreground }}>,</span>
              <span style={{ color: t.red, marginLeft: '8px' }}>self</span><span style={{ color: colors.foreground }}>.name);</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.cyan, marginLeft: '32px' }}>Ok</span><span style={{ color: colors.foreground }}>(())</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground, marginLeft: '16px' }}>{'}'}</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: colors.foreground }}>{'}'}</span>
              <span className={styles.cursor} style={{ backgroundColor: colors.accent, marginLeft: '8px' }}>&nbsp;</span>
            </div>
          </>
        );
      case 'shell':
      default:
        return (
          <>
            <div className={styles.line}>
              <span style={{ color: t.green }}>➜</span>
              <span style={{ color: t.cyan, marginLeft: '8px' }}>~</span>
              <span style={{ marginLeft: '8px' }}>ls -la</span>
            </div>
            <div className={styles.line}>
              <span>total 64</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.blue }}>drwxr-xr-x</span>
              <span style={{ marginLeft: '8px' }}>  3 warped  staff    96 Mar 28 12:00</span>
              <span style={{ color: t.blue, marginLeft: '8px' }}>.</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.blue }}>drwxr-xr-x</span>
              <span style={{ marginLeft: '8px' }}> 10 warped  staff   320 Mar 28 12:00</span>
              <span style={{ color: t.blue, marginLeft: '8px' }}>..</span>
            </div>
            <div className={styles.line}>
              <span style={{ color: t.green }}>-rw-r--r--</span>
              <span style={{ marginLeft: '8px' }}>  1 warped  staff   512 Mar 28 12:00</span>
              <span style={{ marginLeft: '8px' }}>theme.yaml</span>
            </div>
            <div className={styles.line} style={{ marginTop: '12px' }}>
              <span style={{ color: t.green }}>➜</span>
              <span style={{ color: t.cyan, marginLeft: '8px' }}>~</span>
              <span className={styles.cursor} style={{ backgroundColor: colors.accent, marginLeft: '8px' }}>&nbsp;</span>
            </div>
          </>
        );
    }
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
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default TerminalPreview;