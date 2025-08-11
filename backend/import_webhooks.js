const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const SAMPLE_DATA_DIR = path.join(__dirname, 'Sample_data');

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => { console.error(err); process.exit(1); });

const Message = mongoose.model(
  'Message',
  new mongoose.Schema(
    { _id: { type: mongoose.Schema.Types.Mixed } }, // Allow any type for _id
    { strict: false }
  )
);

async function importFiles() {
  try {
    const files = fs.readdirSync(SAMPLE_DATA_DIR).filter(f => f.endsWith('.json'));
    console.log(`Found ${files.length} files to import`);
    
    for (const file of files) {
      const filePath = path.join(SAMPLE_DATA_DIR, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      
      try {
        // Check if it's a status update
        if (data.metaData?.entry?.[0]?.changes?.[0]?.value?.statuses) {
          // Status update: update message status
          for (const status of data.metaData.entry[0].changes[0].value.statuses) {
            await Message.updateOne(
              { "metaData.entry.changes.value.messages.id": status.id },
              { $set: { "metaData.entry.changes.value.messages.$.status": status.status } },
              { upsert: false }
            );
            console.log(`Updated status for message id: ${status.id}`);
          }
        } else {
          // Regular message payload: insert as new document
          await Message.create(data);
          console.log(`Imported: ${file}`);
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err.message);
        // Continue with next file
      }
    }
  } catch (err) {
    console.error('Error reading sample data directory:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('Import completed');
  }
}

importFiles();
