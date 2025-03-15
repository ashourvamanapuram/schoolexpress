import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
