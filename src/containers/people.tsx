import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Text } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
import PersonInterface from '../utils/person-interface';
import { GET_PEOPLE_BYNAME } from '../queries';
import Card from '../components/card';
import Loading from '../components/loading';
import Wrapper from '../components/wrapper';
import Header from '../components/header';
import GoBack from '../components/go-back';

const Person: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search );
  const searchName = urlParams.get('name');
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_PEOPLE_BYNAME, {
    variables: { name: searchName}
  });

  const getHomeWorldDetails = (link: string) => {
    history.push({
      pathname: '/homeworld',
      search: `?homeWorldUrl=${link}`
    })
  }

  return (
    <Wrapper>
      <Header />
      <GoBack
        historyLink='/'
      />
      {
        loading &&
        <Loading />
      }
      {
        !loading && data.getPeopleByName && data.getPeopleByName.length > 0 &&
        <Grid display="flex" justifyContent="center" marginTop="6">
          {
            data.getPeopleByName.map((person: PersonInterface) => {
              return (
                <Card 
                  key={person.name}
                  person={person} 
                  getHomeWorldDetails={getHomeWorldDetails}
                  isByName={true}
                />
              )
            })
          }
        </Grid>
      }
      {
        !loading && error &&
        <Text>An Error occurred</Text>
      }
    </Wrapper>
  );
};

export default Person;
