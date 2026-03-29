import { Theme } from '@/data/themes';
import JSZip from 'jszip';

export const generateThemeYaml = (theme: Theme, isLocal: boolean = false, blur: number = 0): string => {
  const { colors, backgroundImage, opacity, id } = theme;
  
  let yaml = '';
  
  // If the user tweaked the blur in the Aesthetic Lab, leave a helpful comment!
  if (blur > 0) {
    yaml += `# Note: For the best aesthetic, enable background blur in Warp's appearance settings.\n`;
    yaml += `# Recommended blur radius: ${blur}px\n\n`;
  }

  yaml += `accent: '${colors.accent}'\n`;
  yaml += `background: '${colors.background}'\n`;
  yaml += `details: 'darker'\n`;
  yaml += `foreground: '${colors.foreground}'\n`;
  
  if (backgroundImage) {
    yaml += `background_image:\n`;
    const imagePath = isLocal ? `${id}.jpg` : backgroundImage;
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

export const downloadTheme = async (theme: Theme, blur: number = 0) => {
  const zip = new JSZip();
  
  // 1. Add the YAML to the ROOT of the zip
  const yaml = generateThemeYaml(theme, true, blur);
  zip.file(`${theme.id}.yaml`, yaml);

  // 2. Fetch and add the image to the ROOT of the zip if it exists
  if (theme.backgroundImage) {
    try {
      const response = await fetch(theme.backgroundImage);
      const blob = await response.blob();
      zip.file(`${theme.id}.jpg`, blob);
    } catch (err) {
      console.error('Failed to bundle image:', err);
    }
  }

  // 3. Generate and download zip
  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${theme.id}.zip`;
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
