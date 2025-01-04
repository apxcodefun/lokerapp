import mongoose from 'mongoose';

let connection = false; // Status koneksi

const connectDB = async () => {
  if (connection) {
    console.log('Database already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE, {
      connectTimeoutMS: 30000, // Timeout koneksi (30 detik)
      socketTimeoutMS: 45000, // Timeout socket (45 detik)
    });
    connection = true;
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Error connecting to database:', err.message);
    process.exit(1); // Hentikan aplikasi jika gagal
  }
};

export default connectDB;
