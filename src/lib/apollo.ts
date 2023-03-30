// NOTE - biblioteca de requisições GraphQL
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clfv8il8q4es301unaeag9k3z/master',
  cache: new InMemoryCache(),
});
