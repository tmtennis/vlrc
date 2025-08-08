/**
 * Calculate relative luminance of a color
 * @param hex - hex color code (with or without #)
 * @returns luminance value between 0 and 1
 */
function getLuminance(hex: string): number {
  // Remove # if present
  const cleanHex = hex.replace('#', '');
  
  // Parse RGB values
  const r = parseInt(cleanHex.substr(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substr(2, 2), 16) / 255;
  const b = parseInt(cleanHex.substr(4, 2), 16) / 255;
  
  // Apply gamma correction
  const gammaCorrect = (c: number) => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  
  const rLinear = gammaCorrect(r);
  const gLinear = gammaCorrect(g);
  const bLinear = gammaCorrect(b);
  
  // Calculate relative luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

/**
 * Get readable text color based on background color contrast
 * @param bgHex - background color hex code
 * @returns "#111" for light backgrounds, "#fff" for dark backgrounds
 */
export function getReadableTextColor(bgHex: string): string {
  const luminance = getLuminance(bgHex);
  
  // Use white text on dark backgrounds (luminance < 0.5)
  // Use dark text on light backgrounds (luminance >= 0.5)
  return luminance < 0.5 ? "#fff" : "#111";
}
