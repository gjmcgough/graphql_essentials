import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send("GraphQL is amazing!");
});

const root = { friend: () => {
  return {
    "id": 120,
    "firstName": "Wu",
    "lastName": "Tang",
    "gender": "Male",
    "language": "Spanish",
    "emails": [
      {"email" : "is_for@the.children"},
      {"email" : "old@dirty.bastard"},
      {"email" : "ghost@face.killah"}
    ]
  }
} };

app.use("/graphql_essentials", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, () => console.log('Running server on Port localhost:8080/graphql_essentials'));
