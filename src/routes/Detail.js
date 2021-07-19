import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
`;

const GET_MOVIE = gql`
  query getMovie($id: Int!) { 
    Movie(id : $id){
    title
    medium_cover_image
    language
    rating
    description_intro
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
  
  return (
    <Container>
      <Column>
        <Title>Name</Title>
        <Subtitle>English * 4.3</Subtitle>
        <Description>hello everyone. Nice to meet you!</Description>
      </Column>
      <Poster></Poster>
    </Container>
  )
};

export default Detail;