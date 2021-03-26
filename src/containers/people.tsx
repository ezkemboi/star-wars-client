import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import PersonInterface from '../utils/person-interface';
import { GET_PEOPLE_BYNAME } from '../queries';
import Card from '../components/card';

const Person: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search );
  const searchName = urlParams.get('name');
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_PEOPLE_BYNAME, {
    variables: { name: searchName}
  });

  const goBack = () => {
    history.push('/');
  }

  const getHomeWorldDetails = (link: string) => {
    history.push({
      pathname: '/homeworld',
      search: `?homeWorldUrl=${link}`
    })
  }

  return (
    <div style={{ margin: '20px' }}>
      <Button 
        colorScheme="teal" 
        size="xs" 
        marginBottom="20px" 
        onClick={goBack}
      >
        Go Back
      </Button>
      {
        loading &&
        <p>Loading....</p>
      }
      {
        !loading && data.getPeopleByName && data.getPeopleByName.length > 0 &&
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
      {
        !loading && error &&
        <p>An Error occurred</p>
      }
    </div>
  );
};

export default Person;
