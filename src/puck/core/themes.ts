/**
 * Theme System for Puck Components
 *
 * Defines brand themes with consistent color palettes and typography.
 * Each theme provides primary, secondary, accent colors and font families.
 */

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
    muted: string;
  };
  fonts: {
    heading: string;
    body: string;
    accent: string;
  };
}

// Dzidzor Brand Theme
export const dzidzorTheme: Theme = {
  name: 'Dzidzor',
  colors: {
    primary: '#022b39',
    secondary: '#d88535',
    accent: '#088cbc',
    text: '#010101',
    background: '#ffffff',
    muted: '#f5f8ff',
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
    accent: "'Fredoka One', cursive",
  },
};

// Default Modern Theme
export const modernTheme: Theme = {
  name: 'Modern',
  colors: {
    primary: '#1a1a2e',
    secondary: '#16213e',
    accent: '#0f3460',
    text: '#1a1a1a',
    background: '#ffffff',
    muted: '#f8f9fa',
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    accent: "'Inter', sans-serif",
  },
};

// Warm Theme
export const warmTheme: Theme = {
  name: 'Warm',
  colors: {
    primary: '#2d3436',
    secondary: '#e17055',
    accent: '#fdcb6e',
    text: '#2d3436',
    background: '#ffeaa7',
    muted: '#fff8e7',
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Source Sans Pro', sans-serif",
    accent: "'Playfair Display', serif",
  },
};

// Tech Theme
export const techTheme: Theme = {
  name: 'Tech',
  colors: {
    primary: '#0a0a0a',
    secondary: '#6366f1',
    accent: '#22d3ee',
    text: '#0a0a0a',
    background: '#ffffff',
    muted: '#f1f5f9',
  },
  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'IBM Plex Sans', sans-serif",
    accent: "'JetBrains Mono', monospace",
  },
};

// Non-profit Theme
export const nonprofitTheme: Theme = {
  name: 'Non-profit',
  colors: {
    primary: '#1e3a5f',
    secondary: '#28a745',
    accent: '#ffc107',
    text: '#212529',
    background: '#ffffff',
    muted: '#f0f7f0',
  },
  fonts: {
    heading: "'Merriweather', serif",
    body: "'Open Sans', sans-serif",
    accent: "'Merriweather', serif",
  },
};

export const themes: Record<string, Theme> = {
  dzidzor: dzidzorTheme,
  modern: modernTheme,
  warm: warmTheme,
  tech: techTheme,
  nonprofit: nonprofitTheme,
};

export const getTheme = (name: string): Theme => themes[name] || modernTheme;
