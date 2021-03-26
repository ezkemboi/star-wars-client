import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Flex, Grid, Heading, Link, Text, Box, Button } from "@chakra-ui/react";
import { GET_HOMEWORLD_DETAILS } from '../queries';

const HomeWorld: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search );
  const searchName = urlParams.get('homeWorldUrl');
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_HOMEWORLD_DETAILS, {
    variables: { homeWorldUrl: searchName}
  });

  console.log({ error })

  const goBack = () => {
    history.push('/');
  }

  return (
    <Flex direction="column" alignContent="center" padding="1%">
      {
        loading &&
        <Text textAlign="center">Loading....</Text>
      }
      <Grid display="flex" justifyContent="center">
        <Button colorScheme="teal" size="xs" onClick={goBack}>
          Go Back
        </Button>
      </Grid>
      {
        data &&
        <Grid display="flex" justifyContent="center">
          <Box 
            maxW="sm" 
            minW="40%" 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden"
            padding="10px"
            marginTop="20px"
          >
            <Heading 
              textAlign="center" 
              as="h3" 
              size="xl"
            >
              {data.getUserHomeWorld.name}
            </Heading>
            <Text><strong>Climate: </strong>{data.getUserHomeWorld.climate}</Text>
            <Text><strong>Gravity: </strong>{data.getUserHomeWorld.gravity}</Text>
            <Text><strong>Diameter: </strong>{data.getUserHomeWorld.diameter}</Text>
            <Text><strong>Population: </strong>{data.getUserHomeWorld.population}</Text>
            <Text><strong>Rotation Period: </strong>{data.getUserHomeWorld.rotation_period}</Text>
            <Text><strong>Orbital Period: </strong>{data.getUserHomeWorld.orbital_period}</Text>
            <Text><strong>Terrain: </strong>{data.getUserHomeWorld.terrain}</Text>
            <Text><strong>Surface Water: </strong>{data.getUserHomeWorld.surface_water}</Text>
            <Grid display="flex" flexDirection="column">
              <Text><strong>Residents</strong></Text>
              {
                data.getUserHomeWorld.residents.map((resident: string) => {
                  return (
                    <Link target="_blank" key={resident} href={resident}>{resident}</Link>
                  )
                })
              }
            </Grid>
            <Grid display="flex" flexDirection="column">
              <Text><strong>Films</strong></Text>
              {
                data.getUserHomeWorld.films.map((film: string) => {
                  return (
                    <Link target="_blank" key={film} href={film}>{film}</Link>
                  )
                })
              }
            </Grid>
          </Box>
        </Grid>
      }
      
    </Flex>
  );
};

export default HomeWorld;