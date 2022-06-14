import mongoose, { connection } from 'mongoose';

const connectMongo = async () => {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    // console.log('connection mongo',connection.isConnected)
};

export default connectMongo;