import { 
  GET_PEOPLE, 
  GET_PEOPLE_BYNAME, 
  GET_HOMEWORLD_DETAILS 
} from '../queries';

const mocks = [
  {
    request: {
      query: GET_PEOPLE,
      variables: { page: 1 }
    },
    result: {
      data: {
        getPeople: {
          people: [
            {
              name: 'Ezrqn Kemboi',
              height: '5.9',
              mass: '60',
              gender: 'male',
              homeworld: 'http://swapi.dev/api/planets/8/'
            },
            {
              name: 'James Kariuki',
              height: '5.8',
              mass: '55',
              gender: 'male',
              homeworld: 'http://swapi.dev/api/planets/1/'
            },
          ],
          count: 60
        }
      }
    }
  },
  {
    request: {
      query: GET_PEOPLE_BYNAME,
      variables: { name: 'Ezrqn Kemboi' }
    },
    result: {
      data: {
        getUserHomeWorld: {
          name: 'Kapsowar',
          rotation_period: '',
          orbital_period: '',
          diameter: '121',
          climate: 'temperate',
          gravity: '1 standard',
          terrain: 'grassy hills, swamps, forests, mountains',
          surface_water: '39',
          population: '10,000',
          residents: [
            'https://swapi.dev/api/people/66/',
            'https://swapi.dev/api/people/66/'
          ],
          films: [
            'https://swapi.dev/api/films/3/'
          ],
        }
      }
    }
  },
  {
    request: {
      query: GET_HOMEWORLD_DETAILS,
      variables: { name: 'Ezrqn Kemboi' }
    },
    result: {
      data: {
        getPeopleByName: {
          people: [
            {
              name: 'Ezrqn Kemboi',
              height: '5.9',
              mass: '60',
              gender: 'male',
              homeworld: 'http://swapi.dev/api/planets/8/'
            }
          ]
        }
      }
    }
  }
]
export default mocks;
