const mongoose =  require("mongoose")
const Schema =  mongoose.Schema ;

const replySchema =  new Schema({

    reply:String,
    author:String

} , {
    timestamps:true
})

const commentSchema  = new Schema({

    comment:{
        type:String ,
        required:true 
    } ,
    author:{
        type:String,
        required:true
    },
reply:[
    replySchema
]
    
} , 

{
    timestamps:true
})

const blogSchema =  new Schema({


    title:{
        type:String ,
        required:true
    } ,
    content:{
        type:String ,
        required:true
    }

    ,
    author:{
        type:Schema.Types.ObjectId,
        required:true
        ,
        ref:"Author"
    }
    ,
   banner:String ,
   comment:[commentSchema]

} ,  {
    timestamps:true
});


module.exports =  mongoose.model("Blog" , blogSchema);