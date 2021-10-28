const {buildSchema} =  require("graphql")



module.exports =  buildSchema(`
type reply{
    _id:ID!
    reply:String!
    author:String!
    createdAt:String
    updatedAt:String
}

input replyData{
    reply:String!
    _commentID:String!
    author:String!
    _blogId:String!
}


type comment{

    _id:ID!
    comment:String!
    author:String!
    reply:[reply]
    createdAt:String!
    updatedAt:String!
}

input commentData{
    _blogId:String!
    comment:String!
    author:String!
}

type blog{
_id:ID!
title:String!
content:String!
banner:String!
author:Author
comment:[comment]!
createdAt:String!
updatedAt:String!
} 


input blogData{
    title:String!
    content:String!
    banner:String!
    authorID:String!
}
type Author{
    _id:ID!
    name:String
    profession:String
    age:String
    gender:String
   blogs: [blog]
}
input authorData{
    name:String!
    profession:String!
    age:String
    gender:String
}
type AuthorsData{
    authors:[Author]!
}
type BlogsData{
    blogs:[blog]!
}
type RootQuery{

    authors:AuthorsData!
    blogs:BlogsData!
   
     author(id:ID!):Author!
    blog(id:ID!):blog!
    comment(blogid:ID! , commentid:ID!):comment!
    reply(blogid:ID! , commentid:ID! , replyid:ID!):reply!
}
type RootMutation{
    createAuthor(authorInput:authorData):Author!
    createBlog(blogInput:blogData):blog!
    createComment(commentInput:commentData):comment!
    createReply(replyInput:replyData):reply!
}
schema{

    query:RootQuery
    mutation:RootMutation

}


`)