import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[SUCCESS] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[ERROR] MongoDB Connection Error: ${error.message}`);
    console.log('[WARNING] Server will continue without database. Data will not be saved.');
    console.log('[INFO] To fix: Install and start MongoDB, or use MongoDB Atlas (cloud)');
  }
};

export default connectDB;
