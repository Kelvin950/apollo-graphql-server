const express = require("express");
const app = express();
const path = require("path");
const { connectDB } = require("./database/connectdb");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const {ApolloServer , gql}= require("apollo-server")
const typeDefs= require("./graphQl/schema");
const resolvers = require("./graphQl/resolver");

console.log(process.env.MongoURL);
app.use("/img", express.static(path.resolve(__dirname, "img")));

connectDB();

// app.use(
//   "/graphQl",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: resolver,
//     graphiql: true,
//   })
// );

const Server =new ApolloServer({typeDefs , resolvers , introspection:true})

// app.use((error, req, res, next) => {
//   console.log(error);
//   res.json({ error: error });
// });
// app.listen(3000, () => {
//   console.log("http://localhost:3000");
const port =  process.env.PORT || 4000

Server.listen({port}).then(({url})=>{
  console.log(`Server ready at ${url}`)
})