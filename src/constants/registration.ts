export const REGISTRATION_VALIDATION = {
  EMAIL: {
    required: { value: true, message: 'This field is required' },
    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i
  },
  PASSWORD: {
    required: { value: true, message: 'This field is required' },
    minLength: { value: 6, message: 'This field must be at least 6 characters long' },
    maxLength: { value: 20, message: 'This field cannot be longer than 20' }
  }
};
