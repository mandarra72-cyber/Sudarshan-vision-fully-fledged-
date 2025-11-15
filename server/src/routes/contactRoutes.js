import express from 'express';
import {
  createContact,
  getAllContacts,
  updateContactStatus
} from '../controllers/contactController.js';
import { validateContact } from '../middleware/validators.js';

const router = express.Router();

// Public routes
router.post('/', validateContact, createContact);

// Admin routes (in production, add authentication middleware)
router.get('/', getAllContacts);
router.patch('/:id/status', updateContactStatus);

export default router;
