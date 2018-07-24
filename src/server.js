import express from 'express';
import graphqlHTTP  from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

let port = 3000;
const app = express();
app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
  pretty: true
}));

mongoose.connect('mongodb://localhost');

app.listen(port);
console.log('Server running on port:'+ port);