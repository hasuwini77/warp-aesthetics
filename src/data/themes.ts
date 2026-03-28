export interface ThemeColors {
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

export interface Theme {
  id: string;
  name: string;
  author: string;
  description: string;
  colors: ThemeColors;
  backgroundImage?: string;
  opacity?: number;
  tags: string[];
}

export const themes: Theme[] = [
  {
    id: 'cyber-wave',
    name: 'Cyber Wave',
    author: 'Warp Official',
    description: 'A futuristic neon aesthetic inspired by 80s synthwave.',
    tags: ['Neon', 'Cyberpunk', 'Purple'],
    colors: {
      accent: '#ff00ff',
      background: '#0d0221',
      foreground: '#ffffff',
      terminal_colors: {
        normal: {
          black: '#0d0221',
          red: '#ff0055',
          green: '#00ffcc',
          yellow: '#ffff00',
          blue: '#00ccff',
          magenta: '#ff00ff',
          cyan: '#00ffff',
          white: '#ffffff',
        },
      },
    },
    opacity: 60,
  },
  {
    id: 'lofi-room',
    name: 'Lofi Study',
    author: 'AestheticWarp',
    description: 'Relaxing lo-fi vibes for productive coding sessions.',
    tags: ['Lofi', 'Chill', 'Anime'],
    backgroundImage: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80',
    opacity: 40,
    colors: {
      accent: '#ffb3ba',
      background: '#1a1a2e',
      foreground: '#e0e0e0',
      terminal_colors: {
        normal: {
          black: '#1a1a2e',
          red: '#ff6b6b',
          green: '#b8e994',
          yellow: '#f9ed69',
          blue: '#a29bfe',
          magenta: '#fd79a8',
          cyan: '#81ecec',
          white: '#e0e0e0',
        },
      },
    },
  },
  {
    id: 'sakura-dream',
    name: 'Sakura Dream',
    author: 'AestheticWarp',
    description: 'Soft pastel pinks and cherry blossom aesthetics.',
    tags: ['Pastel', 'Anime', 'Pink'],
    backgroundImage: 'https://images.unsplash.com/photo-1528164344705-4754268799af?auto=format&fit=crop&w=1200&q=80',
    opacity: 50,
    colors: {
      accent: '#ff85a1',
      background: '#2d1b33',
      foreground: '#fceef5',
      terminal_colors: {
        normal: {
          black: '#2d1b33',
          red: '#ff4d6d',
          green: '#70e000',
          yellow: '#ffca3a',
          blue: '#1982c4',
          magenta: '#ff85a1',
          cyan: '#8ac926',
          white: '#fceef5',
        },
      },
    },
  },
  {
    id: 'neon-city',
    name: 'Neon Tokyo',
    author: 'CyberWarp',
    description: 'Vibrant neon lights reflecting on wet city streets.',
    tags: ['Cyberpunk', 'City', 'Night'],
    backgroundImage: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    opacity: 30,
    colors: {
      accent: '#00f2ff',
      background: '#0a0a0a',
      foreground: '#ffffff',
      terminal_colors: {
        normal: {
          black: '#0a0a0a',
          red: '#ff0055',
          green: '#00ffcc',
          yellow: '#fdfd96',
          blue: '#0066ff',
          magenta: '#cc00ff',
          cyan: '#00f2ff',
          white: '#ffffff',
        },
      },
    },
  },
  {
    id: 'pastel-sky',
    name: 'Pastel Horizon',
    author: 'SoftWarp',
    description: 'Serene pastel gradients and soft morning light.',
    tags: ['Pastel', 'Minimal', 'Soft'],
    backgroundImage: 'https://images.unsplash.com/photo-1519750783826-e2420f4d6871?auto=format&fit=crop&w=1200&q=80',
    opacity: 60,
    colors: {
      accent: '#a29bfe',
      background: '#f8f9fa',
      foreground: '#2d3436',
      terminal_colors: {
        normal: {
          black: '#2d3436',
          red: '#ff7675',
          green: '#55efc4',
          yellow: '#ffeaa7',
          blue: '#74b9ff',
          magenta: '#a29bfe',
          cyan: '#81ecec',
          white: '#dfe6e9',
        },
      },
    },
  },
  {
    id: 'adeberry',
    name: 'Adeberry',
    author: 'Warp Official',
    description: 'A sweet, berry-themed palette with soft purple hues.',
    tags: ['Purple', 'Soft', 'Minimal'],
    colors: {
      accent: '#a55eea',
      background: '#2d1b33',
      foreground: '#f4f4f9',
      terminal_colors: {
        normal: {
          black: '#2d1b33',
          red: '#eb3b5a',
          green: '#20bf6b',
          yellow: '#f7b731',
          blue: '#4b7bec',
          magenta: '#a55eea',
          cyan: '#0fb9b1',
          white: '#f4f4f9',
        },
      },
    },
    opacity: 90,
  }
];

