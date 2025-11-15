import { body } from 'express-validator';

export const validateApplication = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('dateOfBirth').isISO8601().withMessage('Valid date of birth is required'),
  body('gender').isIn(['male', 'female', 'other']).withMessage('Valid gender is required'),
  body('programInterested').isIn(['BA', 'BSc', 'BCom', 'BBA', 'BCA', 'MA', 'MSc', 'MCom']).withMessage('Valid program is required')
];

export const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

export const validateCampusVisit = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('preferredDate').isISO8601().withMessage('Valid date is required'),
  body('preferredTime').isIn(['morning', 'afternoon', 'evening']).withMessage('Valid time slot is required')
];

export const validateNewsletter = [
  body('email').isEmail().withMessage('Valid email is required')
];
