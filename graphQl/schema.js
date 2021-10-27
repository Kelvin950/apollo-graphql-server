const {buildSchema} =  require("graphql")



module.exports =  buildSchema(`

type blog{
_id:ID!
title:String!
content:String!
banner:String!
author:Author
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
}
type RootMutation{
    createAuthor(authorInput:authorData):Author!
    createBlog(blogInput:blogData):blog!
}
schema{

    query:RootQuery
    mutation:RootMutation

}


`)