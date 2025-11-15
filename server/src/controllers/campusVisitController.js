import CampusVisit from '../models/CampusVisit.js';
import { validationResult } from 'express-validator';

export const scheduleCampusVisit = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const campusVisit = new CampusVisit(req.body);
    await campusVisit.save();

    res.status(201).json({
      success: true,
      message: 'Campus visit scheduled successfully',
      data: campusVisit
    });
  } catch (error) {
    console.error('Error scheduling campus visit:', error);
    res.status(500).json({
      success: false,
      message: 'Error scheduling campus visit',
      error: error.message
    });
  }
};

export const getAllCampusVisits = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const query = status ? { status } : {};

    const visits = await CampusVisit.find(query)
      .sort({ preferredDate: 1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await CampusVisit.countDocuments(query);

    res.status(200).json({
      success: true,
      data: visits,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving campus visits',
      error: error.message
    });
  }
};

export const updateCampusVisitStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const visit = await CampusVisit.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!visit) {
      return res.status(404).json({
        success: false,
        message: 'Campus visit not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Campus visit status updated',
      data: visit
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating campus visit',
      error: error.message
    });
  }
};
