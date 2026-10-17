export interface WaitlistFormData {
  fullName: string;
  email: string;
  whatsappPhone: string;
  userType: string;
  servicesInterest: string[];
  companyName?: string;
  needsDescription?: string;
}

export interface ValidationError {
  [key: string]: string;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  // Remove common formatting characters
  const cleaned = phone.replace(/[\s\-()]/g, '');
  // Check if it's a valid international phone number format (7-15 digits)
  return /^\+?[1-9]\d{6,14}$/.test(cleaned);
};

export const validateWaitlistForm = (data: WaitlistFormData): ValidationError => {
  const errors: ValidationError = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.whatsappPhone || !validatePhoneNumber(data.whatsappPhone)) {
    errors.whatsappPhone = 'Please enter a valid phone number.';
  }

  if (!data.userType) {
    errors.userType = 'Please select your user type.';
  }

  if (!data.servicesInterest || data.servicesInterest.length === 0) {
    errors.servicesInterest = 'Please select at least one service of interest.';
  }

  return errors;
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .slice(0, 500) // Limit length
    .replace(/[<>]/g, ''); // Remove potential HTML tags
};