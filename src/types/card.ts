export interface CardData {
  // Required fields
  name: string;

  // Optional basic info
  profileImage?: string;
  jobTitle?: string;
  company?: string;
  bio?: string;
  phone?: string;
  email?: string;
  website?: string;
  location?: string;

  // Social links
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;

  // Calendar/booking
  calendarLink?: string;

  // Custom links (up to 3)
  customLinks?: Array<{
    label: string;
    url: string;
  }>;

  // Template selection
  templateId?: string;
}
