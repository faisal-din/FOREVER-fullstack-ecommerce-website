import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectToCloudinary from './config/cloudinay.js';
import userRouter from './routes/userRouter.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectToCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Listener
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
