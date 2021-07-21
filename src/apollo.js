import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://apollo-movie-server.herokuapp.com/', // specifies the URL of our GraphQl server
  cache: new InMemoryCache() //cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
})

export default client;