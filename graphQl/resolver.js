const Author = require("../Model/Author");
const Blog =  require("../Model/Blog");
const mongoDb =  require("mongodb")
module.exports = {
  createAuthor: async function ({ authorInput }, req) {
    const newAuthor = await new Author({
      name: authorInput.name,
      profession: authorInput.profession,
      age: authorInput.age,
      gender: authorInput.gender,
    }).save();

    return {
      ...newAuthor._doc,
      _id: newAuthor._id.toString(),
      name: newAuthor.name,
      profession: newAuthor.profession,
      age: newAuthor.age,
      gender: newAuthor.gender,
    };
  },
  authors: async () => {
    const authors = await Author.find();
    if (!authors) {
      const error = new Error("NO authors found");
      throw error;
    }
  
        return {
            authors: authors.map((author) => {
              return {
                ...author._doc,
                 _id:author._id.toString(),
             
              };
            }),
          };
},

createBlog : async  function({blogInput}){


    const newblog= await  new Blog({

        title:blogInput.title ,
        content:blogInput.title,
        banner:blogInput.banner ,
        author:mongoDb.ObjectId(blogInput.authorID)
    }).save();
 
    const author = await Author.findById(blogInput.authorID);
        console.log(author);
    if(!author){
        const error =  new Error("No user with this id found");
        throw error;
    }
   author.blogs.push(newblog._id);
   await author.save();
   
    return {

        ...newblog._doc , _id:newblog._id.toString() , title:newblog.title , content:newblog.content , banner:newblog.banner , author:{...author._doc , name:author.name  } , createdAt:newblog.createdAt.toISOString() , updatedAt:newblog.updatedAt.toISOString()
    }
},
blogs : async function(){

     const blogs =  await Blog.find().populate("author");
     
      if(!blogs){
        const error = new Error("NO blocks found");
        throw error;
      }

      return {
         
        blogs: blogs.map((blog)=>{
            return {
             ...blog._doc , title:blog.title , content:blog.content , banner:blog.banner , author:blog.author  , createdAt:blog.createdAt.toISOString() , updatedAt:blog.updatedAt.toISOString()

            }
        })
      }
}
}