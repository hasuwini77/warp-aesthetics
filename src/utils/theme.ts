import { Theme } from '@/data/themes';

export const generateThemeYaml = (theme: Theme): string => {
  const { colors, backgroundImage, opacity } = theme;
  
  let yaml = '';
  yaml += `accent: '${colors.accent}'\n`;
  yaml += `background: '${colors.background}'\n`;
  yaml += `details: 'darker'\n`;
  yaml += `foreground: '${colors.foreground}'\n`;
  
  if (backgroundImage) {
    yaml += `background_image:\n`;
    yaml += `  path: '${backgroundImage}'\n`;
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

export const downloadTheme = (theme: Theme) => {
  const yaml = generateThemeYaml(theme);
  const blob = new Blob([yaml], { type: 'text/yaml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${theme.id}.yaml`;
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
