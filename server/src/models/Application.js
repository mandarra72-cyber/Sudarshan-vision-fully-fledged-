import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
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
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  
  // Address
  address: {
    street: String,
    city: String,
    state: String,
    pincode: String
  },
  
  // Academic Information
  programInterested: {
    type: String,
    required: true,
    enum: ['BA', 'BSc', 'BCom', 'BBA', 'BCA', 'MA', 'MSc', 'MCom']
  },
  previousEducation: {
    schoolName: String,
    board: String,
    percentage: Number,
    yearOfPassing: Number
  },
  
  // Status
  status: {
    type: String,
    enum: ['pending', 'under-review', 'accepted', 'rejected'],
    default: 'pending'
  },
  
  // Additional
  message: String,
  applicationNumber: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
});

// Generate application number before saving
applicationSchema.pre('save', async function(next) {
  if (!this.applicationNumber) {
    const count = await mongoose.model('Application').countDocuments();
    this.applicationNumber = `SEDC${new Date().getFullYear()}${String(count + 1).padStart(5, '0')}`;
  }
  next();
});

export default mongoose.model('Application', applicationSchema);
