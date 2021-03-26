import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { 
  Flex, 
  Grid, 
  Heading,
  Text
} from "@chakra-ui/react";
import Card from '../components/card';
import PersonInterface from '../utils/person-interface';
import { GET_PEOPLE } from '../queries';

const Home: React.FC = () => {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_PEOPLE, {
    variables: { page: 2}
  });

  const getPeopleByName = (name: string) => {
    // push to the same page
    history.push({
      pathname: '/people',
      search: `?name=${name}`
    })
  }

  const getHomeWorldDetails = (link: string) => {
    history.push({
      pathname: '/homeworld',
      search: `?homeWorldUrl=${link}`
    })
  }

  return (
    <div style={{ margin: '20px' }}>
      <Heading textAlign="center" marginBottom="6">
        Star Wars
      </Heading>
      {
        loading &&
        <Text textAlign="center">Loading....</Text>
      }
      {
        !loading && data.getPeople && data.getPeople.length > 0 &&
        <Flex direction="column">
          <Grid templateColumns="repeat(4, 1fr)" gap={3}>
            {
              data.getPeople.map((person: PersonInterface) => {
                return (
                  <Card 
                    key={person.name}
                    person={person} 
                    getPeopleByName={getPeopleByName} 
                    getHomeWorldDetails={getHomeWorldDetails}
                  />
                )
              })
            }
          </Grid>
          <div style={{textAlign: 'center', marginTop:"20px"}}>
            <div className="pagination">
              <a href="#">&laquo;</a>
              {
                data.getPeople.map((person: PersonInterface, index: number) => {
                  return (
                    <a key={person.name} href="#">{index+1}</a>
                  )
                })
              }
              <a href="#">&raquo;</a>
            </div>
          </div>
        </Flex>
      }
      {
        !loading && error &&
        <p>An Error occurred</p>
      }
    </div>
  );
};

export default Home;
