import mongoose from 'mongoose';

const snapshotSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Snapshot || mongoose.model('Snapshot', snapshotSchema);


