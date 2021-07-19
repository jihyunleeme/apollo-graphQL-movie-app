import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_MOVIE = gql`
  query getMovie($id: Int!) { 
    Movie(id : $id){
    id
    title
  }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const {loading, data} = useQuery(GET_MOVIE, {
    variables: { id }
  });
  console.log(loading, data)

  if (loading) {return "loading";}
  if (data && data.movie) {return data.movie.title;}
  return 'Detail'
};

export default Detail;