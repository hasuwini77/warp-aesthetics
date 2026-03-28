import { Theme } from '@/data/themes';
import JSZip from 'jszip';

export const generateThemeYaml = (theme: Theme, isLocal: boolean = false): string => {
  const { colors, backgroundImage, opacity, id } = theme;
  
  let yaml = '';
  yaml += `accent: '${colors.accent}'\n`;
  yaml += `background: '${colors.background}'\n`;
  yaml += `details: 'darker'\n`;
  yaml += `foreground: '${colors.foreground}'\n`;
  
  if (backgroundImage) {
    yaml += `background_image:\n`;
    // If it's for a local zip download, we point to the image in the zip's structure
    // Otherwise, we use the original URL (e.g., Unsplash or local dev path)
    const imagePath = isLocal ? `images/${id}.jpg` : backgroundImage;
    yaml += `  path: '${imagePath}'\n`;
    yaml += `  opacity: ${opacity || 100}\n`;
  }
  
  yaml += `terminal_colors:\n`;
  yaml += `  bright:\n`;
  yaml += `    black: '${colors.terminal_colors.normal.black}'\n`;
  yaml += `    blue: '${colors.terminal_colors.normal.blue}'\n`;
  yaml += `    cyan: '${colors.terminal_colors.normal.cyan}'\n`;
  yaml += `    green: '${colors.terminal_colors.normal.green}'\n`;
  yaml += `    magenta: '${colors.terminal_colors.normal.magenta}'\n`;
  yaml += `    red: '${colors.terminal_colors.normal.red}'\n`;
  yaml += `    white: '${colors.terminal_colors.normal.white}'\n`;
  yaml += `    yellow: '${colors.terminal_colors.normal.yellow}'\n`;
  yaml += `  normal:\n`;
  yaml += `    black: '${colors.terminal_colors.normal.black}'\n`;
  yaml += `    blue: '${colors.terminal_colors.normal.blue}'\n`;
  yaml += `    cyan: '${colors.terminal_colors.normal.cyan}'\n`;
  yaml += `    green: '${colors.terminal_colors.normal.green}'\n`;
  yaml += `    magenta: '${colors.terminal_colors.normal.magenta}'\n`;
  yaml += `    red: '${colors.terminal_colors.normal.red}'\n`;
  yaml += `    white: '${colors.terminal_colors.normal.white}'\n`;
  yaml += `    yellow: '${colors.terminal_colors.normal.yellow}'\n`;
  
  return yaml;
};

export const downloadTheme = async (theme: Theme) => {
  const zip = new JSZip();
  const folder = zip.folder(theme.id);
  
  if (!folder) return;

  // 1. Add the YAML
  const yaml = generateThemeYaml(theme, true);
  folder.file(`${theme.id}.yaml`, yaml);

  // 2. Fetch and add the image if it exists
  if (theme.backgroundImage) {
    try {
      const response = await fetch(theme.backgroundImage);
      const blob = await response.blob();
      folder.file(`images/${theme.id}.jpg`, blob);
    } catch (err) {
      console.error('Failed to bundle image:', err);
      // Fallback: still download the YAML even if image fetch fails
    }
  }

  // 3. Generate and download zip
  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${theme.id}-package.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy: ', err);
    return false;
  }
};
