import { app } from './app';
import mongoose from 'mongoose';
import 'dotenv/config';

const PORT = 3000;
const HOSTNAME = 'http://localhost';

async function main() {
  await mongoose.connect(process.env.CONNECTIONSTRING);
  console.log('Database connected');
}

main().catch(error => {
  console.log(error);
});

app.listen(PORT, () => {
  console.log(`Server live on: ${HOSTNAME}:${PORT}`);
});
