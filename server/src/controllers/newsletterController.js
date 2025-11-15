import Newsletter from '../models/Newsletter.js';
import { validationResult } from 'express-validator';

export const subscribeNewsletter = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return res.status(400).json({
          success: false,
          message: 'Email already subscribed to newsletter'
        });
      } else {
        // Reactivate subscription
        existingSubscriber.isActive = true;
        existingSubscriber.subscribedAt = new Date();
        await existingSubscriber.save();
        
        return res.status(200).json({
          success: true,
          message: 'Newsletter subscription reactivated',
          data: existingSubscriber
        });
      }
    }

    const newsletter = new Newsletter({ email });
    await newsletter.save();

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: newsletter
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({
      success: false,
      message: 'Error subscribing to newsletter',
      error: error.message
    });
  }
};

export const unsubscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    const subscriber = await Newsletter.findOneAndUpdate(
      { email },
      { isActive: false },
      { new: true }
    );

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in newsletter subscribers'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed from newsletter',
      data: subscriber
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error unsubscribing from newsletter',
      error: error.message
    });
  }
};

export const getAllSubscribers = async (req, res) => {
  try {
    const { isActive, page = 1, limit = 10 } = req.query;
    const query = isActive !== undefined ? { isActive: isActive === 'true' } : {};

    const subscribers = await Newsletter.find(query)
      .sort({ subscribedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Newsletter.countDocuments(query);

    res.status(200).json({
      success: true,
      data: subscribers,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving subscribers',
      error: error.message
    });
  }
};
