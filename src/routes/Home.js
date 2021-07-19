import React from 'react';
import {useQuery, gql} from '@apollo/client';


const GET_MOVIES = gql`
  {
  movies {
    id
    medium_cover_image
  }
}
`;

const Home = () => {
  const {loading} = useQuery(GET_MOVIES);
  console.log(loading)
    return 'Home'
};

export default Home;