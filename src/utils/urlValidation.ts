// URL validation utilities for social media platforms

export const socialMediaValidation = {
  linkedin: {
    pattern: /^https:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/,
    example: 'https://www.linkedin.com/in/your-username',
    isValid: (url: string) => {
      if (!url.trim()) return true; // Allow empty
      return socialMediaValidation.linkedin.pattern.test(url);
    },
  },

  github: {
    pattern: /^https:\/\/github\.com\/[\w-]+\/?$/,
    example: 'https://github.com/your-username',
    isValid: (url: string) => {
      if (!url.trim()) return true; // Allow empty
      return socialMediaValidation.github.pattern.test(url);
    },
  },

  twitter: {
    pattern: /^https:\/\/(www\.)?(x\.com|twitter\.com)\/[\w]+\/?$/,
    example: 'https://x.com/your-username',
    isValid: (url: string) => {
      if (!url.trim()) return true; // Allow empty
      return socialMediaValidation.twitter.pattern.test(url);
    },
  },

  instagram: {
    pattern: /^https:\/\/(www\.)?instagram\.com\/[\w.]+\/?$/,
    example: 'https://www.instagram.com/your-username',
    isValid: (url: string) => {
      if (!url.trim()) return true; // Allow empty
      return socialMediaValidation.instagram.pattern.test(url);
    },
  },
};

// Email and phone validation
export const contactValidation = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    isValid: (email: string) => {
      if (!email.trim()) return true; // Allow empty
      return contactValidation.email.pattern.test(email);
    },
  },

  phone: {
    // International phone number pattern (allows various formats)
    pattern: /^[\+]?[1-9][\d\s\-\(\)]{7,}$/,
    isValid: (phone: string) => {
      if (!phone.trim()) return true; // Allow empty
      // Remove common formatting characters for validation
      const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
      return contactValidation.phone.pattern.test(cleanPhone);
    },
  },
};

export const getSocialMediaError = (
  platform: keyof typeof socialMediaValidation,
  url: string
): string | null => {
  if (!url.trim()) return null;

  const validator = socialMediaValidation[platform];
  if (!validator.isValid(url)) {
    return `Please use the format: ${validator.example}`;
  }

  return null;
};

export const getContactError = (
  type: keyof typeof contactValidation,
  value: string
): string | null => {
  if (!value.trim()) return null;

  const validator = contactValidation[type];
  if (!validator.isValid(value)) {
    if (type === 'email') {
      return 'Please enter a valid email address';
    } else if (type === 'phone') {
      return 'Please enter a valid phone number';
    }
  }

  return null;
};
