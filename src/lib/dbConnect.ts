import mongoose from "mongoose"
type connectionObject = {
   isConnected?: number
}
const connection : connectionObject={}
async function dbConnect(): Promise<void>{
    if (connection.isConnected) {
        console.log("Already connected to database.");
        return
    }
    try {
     const db  =   await mongoose.connect(process.env.MONGODB_URI || '' ,{})
     connection.isConnected = db.connections[0].readyState
     console.log("DB Connected Successfully.");
     console.log("db is here",db);
     console.log("db connection is here",db.connections);
     
     
     
    } catch (error) {
       console.log("DB connection failed",error);
       process.exit(1); 
         
    }
}
export default dbConnect;