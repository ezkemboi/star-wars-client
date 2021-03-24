import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import PersonInterface from './utils/person-interface';

const GET_PEOPLE = gql`
  query PeopleQuery($page: Int!) {
    getPeople(page: $page) {
      name,
      gender
      mass
      homeworld
    }
  }
`

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

  return (
    <div style={{ margin: '20px' }}>
      {
        loading &&
        <p>Loading....</p>
      }
      {
        !loading && data.getPeople && data.getPeople.length > 0 &&
        data.getPeople.map((person: PersonInterface) => {
          return (
            <div 
              key={person.name} 
              style={{ padding: '5px', margin: '10px', border: '1px solid', cursor: 'pointer'}}
              onClick={() => getPeopleByName(person.name)}
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

export default Home;
