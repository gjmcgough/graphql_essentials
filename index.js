import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express();

app.get('/', (req, res) => {
  res.send("GraphQL is amazing!");
});

const root = resolvers;

app.use("/graphql_essentials", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, () => console.log('Running server on Port localhost:8080/graphql_essentials'));
