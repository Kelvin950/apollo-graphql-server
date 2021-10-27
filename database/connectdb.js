const mongoose =  require("mongoose");

 exports.connectDB = async ()=>{

 try {

    const connect=await 
 mongoose
   .connect(
     process.env.MongoURL , {
     
      
     }
 
   )
   console.log(`Mongo connected ${connect.connection.host}`)

 }
 catch(err){
     throw err
 }
}