import connectDB from '../../utils/connectDB';
import Snapshot from '../../models/Snapshot';

// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const snapshots = await Snapshot.find();
      res.status(200).json({ success: true, data: snapshots });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}
