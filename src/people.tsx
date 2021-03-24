import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import PersonInterface from './utils/person-interface';

const GET_PEOPLE_BYNAME = gql`
  query People($name: String!) {
    getPeopleByName(name: $name) {
      name,
      gender
      mass
      homeworld
    }
  }
`

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
      <button
        onClick={goBack}
        style={{ 
          backgroundColor: 'red', 
          color: 'white', 
          padding: '5px', 
          cursor: 'pointer'
        }}
      >
        Go Back
      </button>
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
