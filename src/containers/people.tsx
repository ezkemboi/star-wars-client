import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import PersonInterface from '../utils/person-interface';
import { GET_PEOPLE_BYNAME } from '../queries';

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

  return (
    <div style={{ margin: '20px' }}>
      <Button colorScheme="teal" size="xs" onClick={goBack}>
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
            <div 
              key={person.name} 
              style={{ padding: '5px', margin: '10px', border: '1px solid' }}
            >
              <p>{person.name}</p>
              <p>{person.homeworld}</p>
              <p>{person.mass}</p>
              <p>{person.gender}</p>
            </div>
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
