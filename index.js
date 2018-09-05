import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send("GraphQL is amazing!");
});

class Friend {
  constructor(id, { firstName, lastName, gender, language, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
  }
}

const friendDatabase = {};

const root = {
  friend: () => {
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
      ],
    }
  } ,
  createFriend: ({input}) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id] = input;
    return new Friend(id, input);
  }
};

app.use("/graphql_essentials", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, () => console.log('Running server on Port localhost:8080/graphql_essentials'));
