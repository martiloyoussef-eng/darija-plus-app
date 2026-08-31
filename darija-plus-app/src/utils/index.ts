// Color constants matching the design
export const Colors = {
  primary: '#C1440E',
  primaryLight: '#E8603A',
  primaryDark: '#8B2F08',
  accent: '#00897B',
  gold: '#D4A017',
  amazigh: '#6A3FA0',
  dark: '#0D0D0D',
  card: '#161616',
  border: '#2a2a2a',
  gray: '#B3B3B3', // Fixed for contrast
  grayDark: '#888',
  light: '#F5F0EB',
  white: '#fff',
};

// Accessibility helpers
export const A11y = {
  ariaLabel: (label: string) => ({ 'aria-label': label }),
  ariaDescribedBy: (id: string) => ({ 'aria-describedby': id }),
  ariaLive: (polite: boolean = true) => ({
    'aria-live': polite ? 'polite' : 'assertive',
  }),
  role: (role: string) => ({ role }),
};

// Format helpers
export const formatters = {
  price: (price: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  },

  rating: (rating: number) => {
    return rating.toFixed(2);
  },

  date: (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  },

  time: (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  },

  xp: (xp: number) => {
    if (xp >= 1000000) return `${(xp / 1000000).toFixed(1)}M`;
    if (xp >= 1000) return `${(xp / 1000).toFixed(1)}K`;
    return xp.toString();
  },
};

// Validation helpers
export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  password: (password: string): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];
    if (password.length < 8)
      errors.push('Password must be at least 8 characters');
    if (!/[A-Z]/.test(password))
      errors.push('Password must contain an uppercase letter');
    if (!/[a-z]/.test(password))
      errors.push('Password must contain a lowercase letter');
    if (!/[0-9]/.test(password))
      errors.push('Password must contain a number');
    return { valid: errors.length === 0, errors };
  },

  phone: (phone: string): boolean => {
    // Basic international phone validation
    return /^\+?[\d\s\-\(\)]{10,}$/.test(phone);
  },

  url: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
};

// Storage helpers (with fallback for non-browser environments)
export const storage = {
  set: (key: string, value: any) => {
    try {
      const item =
        typeof value === 'string' ? value : JSON.stringify(value);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, item);
      }
    } catch (error) {
      console.warn('Storage set error:', error);
    }
  },

  get: (key: string) => {
    try {
      if (typeof localStorage !== 'undefined') {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      }
    } catch (error) {
      console.warn('Storage get error:', error);
    }
    return null;
  },

  remove: (key: string) => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.warn('Storage remove error:', error);
    }
  },

  clear: () => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.clear();
      }
    } catch (error) {
      console.warn('Storage clear error:', error);
    }
  },
};

// Analytics helper
export const analytics = {
  trackEvent: (eventName: string, eventData?: Record<string, any>) => {
    console.log(`📊 Event: ${eventName}`, eventData || '');
    // Integrate with Amplitude or similar
  },

  trackPage: (pageName: string) => {
    console.log(`📄 Page: ${pageName}`);
  },

  trackError: (error: Error, context?: string) => {
    console.error(`❌ Error${context ? ` (${context})` : ''}:`, error);
    // Integrate with Sentry or similar
  },
};

// Debounce helper
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle helper
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (!timeout) {
      func(...args);
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
    }
  };
};

// Retry helper
export const retry = async <T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: Error;
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (i < maxAttempts - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError!;
};
