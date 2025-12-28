export const theme = {
  colors: {
    // Primary Colors - Only Two Blues
    primary: {
      black: '#000000',
      deepBlue: '#0E2A47',
    },
    // Accent Color
    accent: {
      neonBlue: '#4DA6FF',
    },
    // Text Colors - Near White
    text: {
      primary: '#FFFFFF',
      secondary: '#E5E5E5',
      muted: '#B0B0B0',
    },
    // Background Colors - Blackish
    background: {
      primary: '#000000',
      secondary: '#0A0A0A',
      card: 'rgba(14, 42, 71, 0.3)',
      cardHover: 'rgba(14, 42, 71, 0.5)',
    },
    // Border Colors
    border: {
      default: 'rgba(77, 166, 255, 0.2)',
      hover: 'rgba(77, 166, 255, 0.4)',
      active: 'rgba(77, 166, 255, 0.6)',
    },
  },

  // Gradient Definitions
  gradients: {
    primary: 'linear-gradient(180deg, #000000 0%, #0A0A0A 50%, #0E2A47 100%)',
    card: 'linear-gradient(135deg, rgba(14, 42, 71, 0.3) 0%, rgba(14, 42, 71, 0.1) 100%)',
    accent: 'linear-gradient(90deg, #4DA6FF 0%, #0E2A47 100%)',
    glow: 'radial-gradient(circle, rgba(77, 166, 255, 0.15) 0%, transparent 70%)',
  },

  // Animation/Transition Timings
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Shadow Definitions
  shadows: {
    glow: '0 0 20px rgba(77, 166, 255, 0.3)',
    glowStrong: '0 0 30px rgba(77, 166, 255, 0.5)',
    card: '0 4px 24px rgba(0, 0, 0, 0.5)',
  },

  // Border Radius
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  },
};

export type Theme = typeof theme;
