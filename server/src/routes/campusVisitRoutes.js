import express from 'express';
import {
  scheduleCampusVisit,
  getAllCampusVisits,
  updateCampusVisitStatus
} from '../controllers/campusVisitController.js';
import { validateCampusVisit } from '../middleware/validators.js';

const router = express.Router();

// Public routes
router.post('/', validateCampusVisit, scheduleCampusVisit);

// Admin routes (in production, add authentication middleware)
router.get('/', getAllCampusVisits);
router.patch('/:id/status', updateCampusVisitStatus);

export default router;
