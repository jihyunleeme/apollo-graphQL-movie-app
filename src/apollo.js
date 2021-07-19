import { ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/', // specifies the URL of our GraphQl server
  cache: new InMemoryCache() //cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
})

export default client;