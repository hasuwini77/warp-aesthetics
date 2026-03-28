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
  category: 'Lofi' | 'Anime' | 'Retro' | 'Minimal' | 'Cyberpunk' | 'Nature';
}

export const themes: Theme[] = [
  {
    "id": "cyberpunk-city-darky",
    "name": "City Darky",
    "author": "AestheticWarp",
    "description": "A beautiful cyberpunk theme inspired by City Darky.",
    "category": "Cyberpunk",
    "tags": [
      "Cyberpunk",
      "City Darky"
    ],
    "backgroundImage": "images/themes/cyberpunk/city-darky.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#00f2ff",
      "background": "#0a0a0a",
      "foreground": "#ffffff",
      "terminal_colors": {
        "normal": {
          "black": "#0a0a0a",
          "red": "#ff0055",
          "green": "#00ffcc",
          "yellow": "#fdfd96",
          "blue": "#0066ff",
          "magenta": "#cc00ff",
          "cyan": "#00f2ff",
          "white": "#ffffff"
        }
      }
    }
  },
  {
    "id": "cyberpunk-cyberpix",
    "name": "Cyberpix",
    "author": "AestheticWarp",
    "description": "A beautiful cyberpunk theme inspired by Cyberpix.",
    "category": "Cyberpunk",
    "tags": [
      "Cyberpunk",
      "Cyberpix"
    ],
    "backgroundImage": "images/themes/cyberpunk/cyberpix.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#00f2ff",
      "background": "#0a0a0a",
      "foreground": "#ffffff",
      "terminal_colors": {
        "normal": {
          "black": "#0a0a0a",
          "red": "#ff0055",
          "green": "#00ffcc",
          "yellow": "#fdfd96",
          "blue": "#0066ff",
          "magenta": "#cc00ff",
          "cyan": "#00f2ff",
          "white": "#ffffff"
        }
      }
    }
  },
  {
    "id": "cyberpunk-gloomycity",
    "name": "Gloomycity",
    "author": "AestheticWarp",
    "description": "A beautiful cyberpunk theme inspired by Gloomycity.",
    "category": "Cyberpunk",
    "tags": [
      "Cyberpunk",
      "Gloomycity"
    ],
    "backgroundImage": "images/themes/cyberpunk/gloomycity.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#00f2ff",
      "background": "#0a0a0a",
      "foreground": "#ffffff",
      "terminal_colors": {
        "normal": {
          "black": "#0a0a0a",
          "red": "#ff0055",
          "green": "#00ffcc",
          "yellow": "#fdfd96",
          "blue": "#0066ff",
          "magenta": "#cc00ff",
          "cyan": "#00f2ff",
          "white": "#ffffff"
        }
      }
    }
  },
  {
    "id": "neon-tokyo",
    "name": "Neon Tokyo",
    "author": "CyberWarp",
    "description": "Vibrant neon lights reflecting on wet city streets.",
    "category": "Cyberpunk",
    "tags": [
      "Neon",
      "Night",
      "Vibrant"
    ],
    "backgroundImage": "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
    "opacity": 30,
    "colors": {
      "accent": "#00f2ff",
      "background": "#0a0a0a",
      "foreground": "#ffffff",
      "terminal_colors": {
        "normal": {
          "black": "#0a0a0a",
          "red": "#ff0055",
          "green": "#00ffcc",
          "yellow": "#fdfd96",
          "blue": "#0066ff",
          "magenta": "#cc00ff",
          "cyan": "#00f2ff",
          "white": "#ffffff"
        }
      }
    }
  },
  {
    "id": "cyberpunk-outerview",
    "name": "Outerview",
    "author": "AestheticWarp",
    "description": "A beautiful cyberpunk theme inspired by Outerview.",
    "category": "Cyberpunk",
    "tags": [
      "Cyberpunk",
      "Outerview"
    ],
    "backgroundImage": "images/themes/cyberpunk/outerview.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#00f2ff",
      "background": "#0a0a0a",
      "foreground": "#ffffff",
      "terminal_colors": {
        "normal": {
          "black": "#0a0a0a",
          "red": "#ff0055",
          "green": "#00ffcc",
          "yellow": "#fdfd96",
          "blue": "#0066ff",
          "magenta": "#cc00ff",
          "cyan": "#00f2ff",
          "white": "#ffffff"
        }
      }
    }
  },
  {
    "id": "cyberpunk-sunstream",
    "name": "Sunstream",
    "author": "AestheticWarp",
    "description": "A beautiful cyberpunk theme inspired by Sunstream.",
    "category": "Cyberpunk",
    "tags": [
      "Cyberpunk",
      "Sunstream"
    ],
    "backgroundImage": "images/themes/cyberpunk/sunstream.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#00f2ff",
      "background": "#0a0a0a",
      "foreground": "#ffffff",
      "terminal_colors": {
        "normal": {
          "black": "#0a0a0a",
          "red": "#ff0055",
          "green": "#00ffcc",
          "yellow": "#fdfd96",
          "blue": "#0066ff",
          "magenta": "#cc00ff",
          "cyan": "#00f2ff",
          "white": "#ffffff"
        }
      }
    }
  },
  {
    "id": "lofi-aesthetico",
    "name": "Aesthetico",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Aesthetico.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Aesthetico"
    ],
    "backgroundImage": "images/themes/lofi/aesthetico.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "lofi-collapsed-hue",
    "name": "Collapsed Hue",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Collapsed Hue.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Collapsed Hue"
    ],
    "backgroundImage": "images/themes/lofi/collapsed-hue.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "lofi-darker-room",
    "name": "Darker Room",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Darker Room.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Darker Room"
    ],
    "backgroundImage": "images/themes/lofi/darker-room.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "lofi-glowinnight",
    "name": "Glowinnight",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Glowinnight.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Glowinnight"
    ],
    "backgroundImage": "images/themes/lofi/glowinnight.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "lofi-hotelrain",
    "name": "Hotelrain",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Hotelrain.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Hotelrain"
    ],
    "backgroundImage": "images/themes/lofi/hotelrain.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "lofi-leanerview",
    "name": "Leanerview",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Leanerview.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Leanerview"
    ],
    "backgroundImage": "images/themes/lofi/leanerview.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "lofi-leanview",
    "name": "Leanview",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Leanview.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Leanview"
    ],
    "backgroundImage": "images/themes/lofi/leanview.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "lofi-pixel-room",
    "name": "Pixel Room",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Pixel Room.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Pixel Room"
    ],
    "backgroundImage": "images/themes/lofi/pixel-room.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "rainy-night",
    "name": "Rainy Night",
    "author": "AestheticWarp",
    "description": "City lights blurred by rain on a window pane.",
    "category": "Lofi",
    "tags": [
      "Rain",
      "City",
      "Blue"
    ],
    "backgroundImage": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80",
    "opacity": 35,
    "colors": {
      "accent": "#4cc9f0",
      "background": "#0b0c10",
      "foreground": "#c5c6c7",
      "terminal_colors": {
        "normal": {
          "black": "#0b0c10",
          "red": "#f72585",
          "green": "#4cc9f0",
          "yellow": "#fee440",
          "blue": "#4361ee",
          "magenta": "#7209b7",
          "cyan": "#4895ef",
          "white": "#c5c6c7"
        }
      }
    }
  },
  {
    "id": "lofi-relax",
    "name": "Relax",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Relax.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Relax"
    ],
    "backgroundImage": "images/themes/lofi/relax.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "lofi-ultra-pastel",
    "name": "Ultra Pastel",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Ultra Pastel.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Ultra Pastel"
    ],
    "backgroundImage": "images/themes/lofi/ultra-pastel.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "lofi-windowgreen",
    "name": "Windowgreen",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Windowgreen.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Windowgreen"
    ],
    "backgroundImage": "images/themes/lofi/windowgreen.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "lofi-windownight",
    "name": "Windownight",
    "author": "AestheticWarp",
    "description": "A beautiful lofi theme inspired by Windownight.",
    "category": "Lofi",
    "tags": [
      "Lofi",
      "Windownight"
    ],
    "backgroundImage": "images/themes/lofi/windownight.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ffb3ba",
      "background": "#1a1a2e",
      "foreground": "#e0e0e0",
      "terminal_colors": {
        "normal": {
          "black": "#1a1a2e",
          "red": "#ff6b6b",
          "green": "#b8e994",
          "yellow": "#f9ed69",
          "blue": "#a29bfe",
          "magenta": "#fd79a8",
          "cyan": "#81ecec",
          "white": "#e0e0e0"
        }
      }
    }
  },
  {
    "id": "minimal-aguasky",
    "name": "Aguasky",
    "author": "AestheticWarp",
    "description": "A beautiful minimal theme inspired by Aguasky.",
    "category": "Minimal",
    "tags": [
      "Minimal",
      "Aguasky"
    ],
    "backgroundImage": "images/themes/minimal/aguasky.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#a29bfe",
      "background": "#f8f9fa",
      "foreground": "#2d3436",
      "terminal_colors": {
        "normal": {
          "black": "#2d3436",
          "red": "#ff7675",
          "green": "#55efc4",
          "yellow": "#ffeaa7",
          "blue": "#74b9ff",
          "magenta": "#a29bfe",
          "cyan": "#81ecec",
          "white": "#dfe6e9"
        }
      }
    }
  },
  {
    "id": "minimal-bednight",
    "name": "Bednight",
    "author": "AestheticWarp",
    "description": "A beautiful minimal theme inspired by Bednight.",
    "category": "Minimal",
    "tags": [
      "Minimal",
      "Bednight"
    ],
    "backgroundImage": "images/themes/minimal/bednight.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#a29bfe",
      "background": "#f8f9fa",
      "foreground": "#2d3436",
      "terminal_colors": {
        "normal": {
          "black": "#2d3436",
          "red": "#ff7675",
          "green": "#55efc4",
          "yellow": "#ffeaa7",
          "blue": "#74b9ff",
          "magenta": "#a29bfe",
          "cyan": "#81ecec",
          "white": "#dfe6e9"
        }
      }
    }
  },
  {
    "id": "minimal-bluecity",
    "name": "Bluecity",
    "author": "AestheticWarp",
    "description": "A beautiful minimal theme inspired by Bluecity.",
    "category": "Minimal",
    "tags": [
      "Minimal",
      "Bluecity"
    ],
    "backgroundImage": "images/themes/minimal/bluecity.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#a29bfe",
      "background": "#f8f9fa",
      "foreground": "#2d3436",
      "terminal_colors": {
        "normal": {
          "black": "#2d3436",
          "red": "#ff7675",
          "green": "#55efc4",
          "yellow": "#ffeaa7",
          "blue": "#74b9ff",
          "magenta": "#a29bfe",
          "cyan": "#81ecec",
          "white": "#dfe6e9"
        }
      }
    }
  },
  {
    "id": "minimal-calmer-si",
    "name": "Calmer Si",
    "author": "AestheticWarp",
    "description": "A beautiful minimal theme inspired by Calmer Si.",
    "category": "Minimal",
    "tags": [
      "Minimal",
      "Calmer Si"
    ],
    "backgroundImage": "images/themes/minimal/calmer-si.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#a29bfe",
      "background": "#f8f9fa",
      "foreground": "#2d3436",
      "terminal_colors": {
        "normal": {
          "black": "#2d3436",
          "red": "#ff7675",
          "green": "#55efc4",
          "yellow": "#ffeaa7",
          "blue": "#74b9ff",
          "magenta": "#a29bfe",
          "cyan": "#81ecec",
          "white": "#dfe6e9"
        }
      }
    }
  },
  {
    "id": "minimal-cloudywarm",
    "name": "Cloudywarm",
    "author": "AestheticWarp",
    "description": "A beautiful minimal theme inspired by Cloudywarm.",
    "category": "Minimal",
    "tags": [
      "Minimal",
      "Cloudywarm"
    ],
    "backgroundImage": "images/themes/minimal/cloudywarm.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#a29bfe",
      "background": "#f8f9fa",
      "foreground": "#2d3436",
      "terminal_colors": {
        "normal": {
          "black": "#2d3436",
          "red": "#ff7675",
          "green": "#55efc4",
          "yellow": "#ffeaa7",
          "blue": "#74b9ff",
          "magenta": "#a29bfe",
          "cyan": "#81ecec",
          "white": "#dfe6e9"
        }
      }
    }
  },
  {
    "id": "minimal-softbeam",
    "name": "Softbeam",
    "author": "AestheticWarp",
    "description": "A beautiful minimal theme inspired by Softbeam.",
    "category": "Minimal",
    "tags": [
      "Minimal",
      "Softbeam"
    ],
    "backgroundImage": "images/themes/minimal/softbeam.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#a29bfe",
      "background": "#f8f9fa",
      "foreground": "#2d3436",
      "terminal_colors": {
        "normal": {
          "black": "#2d3436",
          "red": "#ff7675",
          "green": "#55efc4",
          "yellow": "#ffeaa7",
          "blue": "#74b9ff",
          "magenta": "#a29bfe",
          "cyan": "#81ecec",
          "white": "#dfe6e9"
        }
      }
    }
  },
  {
    "id": "minimal-solar-slim",
    "name": "Solar Slim",
    "author": "AestheticWarp",
    "description": "A beautiful minimal theme inspired by Solar Slim.",
    "category": "Minimal",
    "tags": [
      "Minimal",
      "Solar Slim"
    ],
    "backgroundImage": "images/themes/minimal/solar-slim.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#a29bfe",
      "background": "#f8f9fa",
      "foreground": "#2d3436",
      "terminal_colors": {
        "normal": {
          "black": "#2d3436",
          "red": "#ff7675",
          "green": "#55efc4",
          "yellow": "#ffeaa7",
          "blue": "#74b9ff",
          "magenta": "#a29bfe",
          "cyan": "#81ecec",
          "white": "#dfe6e9"
        }
      }
    }
  },
  {
    "id": "minimal-sunbow",
    "name": "Sunbow",
    "author": "AestheticWarp",
    "description": "A beautiful minimal theme inspired by Sunbow.",
    "category": "Minimal",
    "tags": [
      "Minimal",
      "Sunbow"
    ],
    "backgroundImage": "images/themes/minimal/sunbow.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#a29bfe",
      "background": "#f8f9fa",
      "foreground": "#2d3436",
      "terminal_colors": {
        "normal": {
          "black": "#2d3436",
          "red": "#ff7675",
          "green": "#55efc4",
          "yellow": "#ffeaa7",
          "blue": "#74b9ff",
          "magenta": "#a29bfe",
          "cyan": "#81ecec",
          "white": "#dfe6e9"
        }
      }
    }
  },
  {
    "id": "nature-burned-view",
    "name": "Burned View",
    "author": "AestheticWarp",
    "description": "A beautiful nature theme inspired by Burned View.",
    "category": "Nature",
    "tags": [
      "Nature",
      "Burned View"
    ],
    "backgroundImage": "images/themes/nature/burned-view.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ccd5ae",
      "background": "#1b1b1b",
      "foreground": "#e9edc9",
      "terminal_colors": {
        "normal": {
          "black": "#1b1b1b",
          "red": "#e07a5f",
          "green": "#81b29a",
          "yellow": "#f2cc8f",
          "blue": "#3d405b",
          "magenta": "#9d8189",
          "cyan": "#abc4ff",
          "white": "#e9edc9"
        }
      }
    }
  },
  {
    "id": "nature-burnedstream",
    "name": "Burnedstream",
    "author": "AestheticWarp",
    "description": "A beautiful nature theme inspired by Burnedstream.",
    "category": "Nature",
    "tags": [
      "Nature",
      "Burnedstream"
    ],
    "backgroundImage": "images/themes/nature/burnedstream.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ccd5ae",
      "background": "#1b1b1b",
      "foreground": "#e9edc9",
      "terminal_colors": {
        "normal": {
          "black": "#1b1b1b",
          "red": "#e07a5f",
          "green": "#81b29a",
          "yellow": "#f2cc8f",
          "blue": "#3d405b",
          "magenta": "#9d8189",
          "cyan": "#abc4ff",
          "white": "#e9edc9"
        }
      }
    }
  },
  {
    "id": "nature-forester",
    "name": "Forester",
    "author": "AestheticWarp",
    "description": "A beautiful nature theme inspired by Forester.",
    "category": "Nature",
    "tags": [
      "Nature",
      "Forester"
    ],
    "backgroundImage": "images/themes/nature/forester.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ccd5ae",
      "background": "#1b1b1b",
      "foreground": "#e9edc9",
      "terminal_colors": {
        "normal": {
          "black": "#1b1b1b",
          "red": "#e07a5f",
          "green": "#81b29a",
          "yellow": "#f2cc8f",
          "blue": "#3d405b",
          "magenta": "#9d8189",
          "cyan": "#abc4ff",
          "white": "#e9edc9"
        }
      }
    }
  },
  {
    "id": "nature-forestshape",
    "name": "Forestshape",
    "author": "AestheticWarp",
    "description": "A beautiful nature theme inspired by Forestshape.",
    "category": "Nature",
    "tags": [
      "Nature",
      "Forestshape"
    ],
    "backgroundImage": "images/themes/nature/forestshape.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ccd5ae",
      "background": "#1b1b1b",
      "foreground": "#e9edc9",
      "terminal_colors": {
        "normal": {
          "black": "#1b1b1b",
          "red": "#e07a5f",
          "green": "#81b29a",
          "yellow": "#f2cc8f",
          "blue": "#3d405b",
          "magenta": "#9d8189",
          "cyan": "#abc4ff",
          "white": "#e9edc9"
        }
      }
    }
  },
  {
    "id": "nature-sunny-b",
    "name": "Sunny B",
    "author": "AestheticWarp",
    "description": "A beautiful nature theme inspired by Sunny B.",
    "category": "Nature",
    "tags": [
      "Nature",
      "Sunny B"
    ],
    "backgroundImage": "images/themes/nature/sunny-b.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#ccd5ae",
      "background": "#1b1b1b",
      "foreground": "#e9edc9",
      "terminal_colors": {
        "normal": {
          "black": "#1b1b1b",
          "red": "#e07a5f",
          "green": "#81b29a",
          "yellow": "#f2cc8f",
          "blue": "#3d405b",
          "magenta": "#9d8189",
          "cyan": "#abc4ff",
          "white": "#e9edc9"
        }
      }
    }
  },
  {
    "id": "retro-womanaze",
    "name": "Womanaze",
    "author": "AestheticWarp",
    "description": "A beautiful retro theme inspired by Womanaze.",
    "category": "Retro",
    "tags": [
      "Retro",
      "Womanaze"
    ],
    "backgroundImage": "images/themes/retro/womanaze.jpg",
    "opacity": 40,
    "colors": {
      "accent": "#f83800",
      "background": "#000000",
      "foreground": "#f8f8f8",
      "terminal_colors": {
        "normal": {
          "black": "#000000",
          "red": "#a80020",
          "green": "#00a800",
          "yellow": "#f8b800",
          "blue": "#0058f8",
          "magenta": "#bc00bc",
          "cyan": "#3cbcfc",
          "white": "#f8f8f8"
        }
      }
    }
  }
];
