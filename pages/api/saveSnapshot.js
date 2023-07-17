import connectDB from '../../utils/connectDB';
import Snapshot from '../../models/Snapshot';

connectDB();

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set the desired maximum request body size
    },
  },
};

export default async function handler(req, res) {
  try {
    const { snapshots } = req.body;

    const savedSnapshots = await Promise.all(
      snapshots.map(async (snapshot) => {
        const newSnapshot = new Snapshot({
          image: snapshot,
        });

        await newSnapshot.save();
        return newSnapshot;
      })
    );

    res.status(200).json({ success: true, data: savedSnapshots });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
