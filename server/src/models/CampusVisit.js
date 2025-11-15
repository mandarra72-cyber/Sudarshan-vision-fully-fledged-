import mongoose from 'mongoose';

const campusVisitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  preferredDate: {
    type: Date,
    required: true
  },
  preferredTime: {
    type: String,
    required: true,
    enum: ['morning', 'afternoon', 'evening']
  },
  numberOfVisitors: {
    type: Number,
    default: 1,
    min: 1
  },
  programInterest: {
    type: String,
    enum: ['BA', 'BSc', 'BCom', 'BBA', 'BCA', 'MA', 'MSc', 'MCom', 'General']
  },
  message: String,
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export default mongoose.model('CampusVisit', campusVisitSchema);
