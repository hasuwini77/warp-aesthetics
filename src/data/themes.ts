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
  category: 'Lofi' | 'Anime' | 'Retro' | 'Minimal' | 'Cyberpunk';
}

export const themes: Theme[] = [
  // --- LOFI CATEGORY ---
  {
    id: 'lofi-study',
    name: 'Lofi Study',
    author: 'AestheticWarp',
    description: 'The ultimate chill vibes. Soft purples and deep study focus.',
    category: 'Lofi',
    tags: ['Chill', 'Study', 'Purple'],
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
    id: 'rainy-night',
    name: 'Rainy Night',
    author: 'AestheticWarp',
    description: 'City lights blurred by rain on a window pane.',
    category: 'Lofi',
    tags: ['Rain', 'City', 'Blue'],
    backgroundImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80',
    opacity: 35,
    colors: {
      accent: '#4cc9f0',
      background: '#0b0c10',
      foreground: '#c5c6c7',
      terminal_colors: {
        normal: {
          black: '#0b0c10',
          red: '#f72585',
          green: '#4cc9f0',
          yellow: '#fee440',
          blue: '#4361ee',
          magenta: '#7209b7',
          cyan: '#4895ef',
          white: '#c5c6c7',
        },
      },
    },
  },
  {
    id: 'coffee-shop',
    name: 'Coffee Shop',
    author: 'AestheticWarp',
    description: 'Warm, cozy, and caffeinated. Perfect for morning coding.',
    category: 'Lofi',
    tags: ['Warm', 'Cozy', 'Brown'],
    backgroundImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    opacity: 45,
    colors: {
      accent: '#d4a373',
      background: '#1b1b1b',
      foreground: '#faedcd',
      terminal_colors: {
        normal: {
          black: '#1b1b1b',
          red: '#e07a5f',
          green: '#81b29a',
          yellow: '#f2cc8f',
          blue: '#3d405b',
          magenta: '#9d8189',
          cyan: '#abc4ff',
          white: '#faedcd',
        },
      },
    },
  },

  // --- ANIME CATEGORY ---
  {
    id: 'sakura-dream',
    name: 'Sakura Dream',
    author: 'AestheticWarp',
    description: 'Soft pastel pinks and cherry blossom aesthetics.',
    category: 'Anime',
    tags: ['Pastel', 'Pink', 'Spring'],
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
    id: 'shinkai-sky',
    name: 'Shinkai Sky',
    author: 'AnimeWarp',
    description: 'Vibrant blue skies and fluffy clouds. Inspired by Makoto Shinkai.',
    category: 'Anime',
    tags: ['Sky', 'Blue', 'Cloud'],
    backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    opacity: 30,
    colors: {
      accent: '#00b4d8',
      background: '#03045e',
      foreground: '#caf0f8',
      terminal_colors: {
        normal: {
          black: '#03045e',
          red: '#f07167',
          green: '#00afb9',
          yellow: '#fed9b7',
          blue: '#0077b6',
          magenta: '#90e0ef',
          cyan: '#00b4d8',
          white: '#caf0f8',
        },
      },
    },
  },

  // --- RETRO CATEGORY ---
  {
    id: 'nes-classic',
    name: 'NES Classic',
    author: 'PixelWarp',
    description: 'Authentic 8-bit aesthetic inspired by the legendary console.',
    category: 'Retro',
    tags: ['8-bit', 'Gaming', 'Red'],
    backgroundImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    opacity: 50,
    colors: {
      accent: '#f83800',
      background: '#000000',
      foreground: '#f8f8f8',
      terminal_colors: {
        normal: {
          black: '#000000',
          red: '#a80020',
          green: '#00a800',
          yellow: '#f8b800',
          blue: '#0058f8',
          magenta: '#bc00bc',
          cyan: '#3cbcfc',
          white: '#f8f8f8',
        },
      },
    },
  },
  {
    id: 'gameboy-green',
    name: 'Pocket Green',
    author: 'PixelWarp',
    description: 'The iconic 4-shade green palette of the original handheld.',
    category: 'Retro',
    tags: ['Handheld', 'Green', 'Dot-Matrix'],
    backgroundImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    opacity: 40,
    colors: {
      accent: '#306230',
      background: '#9bbc0f',
      foreground: '#0f380f',
      terminal_colors: {
        normal: {
          black: '#0f380f',
          red: '#306230',
          green: '#8bac0f',
          yellow: '#9bbc0f',
          blue: '#306230',
          magenta: '#8bac0f',
          cyan: '#8bac0f',
          white: '#9bbc0f',
        },
      },
    },
  },

  // --- MINIMAL CATEGORY ---
  {
    id: 'pastel-horizon',
    name: 'Pastel Horizon',
    author: 'SoftWarp',
    description: 'Serene pastel gradients and soft morning light.',
    category: 'Minimal',
    tags: ['Pastel', 'Soft', 'Serene'],
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
    id: 'snow-peak',
    name: 'Snow Peak',
    author: 'MinimalWarp',
    description: 'Clean, crisp, and cold. A high-contrast light theme.',
    category: 'Minimal',
    tags: ['White', 'Clean', 'Modern'],
    colors: {
      accent: '#2f3542',
      background: '#ffffff',
      foreground: '#2f3542',
      terminal_colors: {
        normal: {
          black: '#2f3542',
          red: '#ff4757',
          green: '#2ed573',
          yellow: '#ffa502',
          blue: '#1e90ff',
          magenta: '#70a1ff',
          cyan: '#7beded',
          white: '#ffffff',
        },
      },
    },
    opacity: 100,
  },

  // --- CYBERPUNK CATEGORY ---
  {
    id: 'neon-tokyo',
    name: 'Neon Tokyo',
    author: 'CyberWarp',
    description: 'Vibrant neon lights reflecting on wet city streets.',
    category: 'Cyberpunk',
    tags: ['Neon', 'Night', 'Vibrant'],
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
    id: 'cyber-vibe',
    name: 'Cyber Vibe',
    author: 'CyberWarp',
    description: 'Electric pink and deep blacks. High contrast, high energy.',
    category: 'Cyberpunk',
    tags: ['Pink', 'Electric', 'Dark'],
    colors: {
      accent: '#ff00ff',
      background: '#000000',
      foreground: '#ffffff',
      terminal_colors: {
        normal: {
          black: '#000000',
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
    opacity: 100,
  }
];
