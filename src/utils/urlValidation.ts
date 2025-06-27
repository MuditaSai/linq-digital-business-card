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
