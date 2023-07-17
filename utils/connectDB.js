import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    // Add your MongoDB connection URI here
    const MONGODB_URI = 'mongodb+srv://aditya4sure:epaper@epaper.y2raity.mongodb.net/?retryWrites=true&w=majority';

    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    return;
  }
};

export default connectDb;
