import React, { useEffect, useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Flex, Heading, Link, Text, Box } from "@chakra-ui/react";
import { GET_HOMEWORLD_DETAILS } from '../queries';
import Loading from '../components/loading';
import Wrapper from '../components/wrapper';
import Header from '../components/header';
import Navigation from '../components/navigations';
import MainContext from '../context';
import updateLocationHistory from '../utils/update-location-history';

const HomeWorld: React.FC = () => {
  const { contextState, setContext } = useContext(MainContext);
  const screenWidth = window.innerWidth;
  const [isSmallScreen, setScreen] = useState(screenWidth < 700);
  const urlParams = new URLSearchParams(window.location.search );
  const searchName = urlParams.get('homeWorldUrl');
  const { loading, error, data } = useQuery(GET_HOMEWORLD_DETAILS, {
    variables: { homeWorldUrl: searchName}
  });

  useEffect(() => {
    const location: string = window.location.pathname + window.location.search;
    if(location !== contextState.currentPage) {
      updateLocationHistory(contextState, location, setContext);
    }
  })

  useEffect(() => {
    setScreen(screenWidth < 700);
  }, [screenWidth])

  return (
    <Wrapper>
      <Header title={"Star Wars"}/>
      <Navigation
        historyLink={contextState.prevPage}
      />
      {
        loading &&
        <Loading />
      }
      {
        data &&
        <Flex justifyContent="center">
          <Box 
            maxW="sm" 
            minW="70%" 
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
              borderBottom="1px solid"
              marginBottom="5px"
            >
              {data.getUserHomeWorld.name}
            </Heading>
            <Flex justifyContent="center" direction={isSmallScreen ? 'column' : 'row'}>
              <Box w={isSmallScreen ? '100%' : '33%'}>
                <Text><strong>Details</strong></Text>
                <Text><strong>Climate: </strong>{data.getUserHomeWorld.climate}</Text>
                <Text><strong>Gravity: </strong>{data.getUserHomeWorld.gravity}</Text>
                <Text><strong>Diameter: </strong>{data.getUserHomeWorld.diameter}</Text>
                <Text><strong>Population: </strong>{data.getUserHomeWorld.population}</Text>
                <Text><strong>Rotation Period: </strong>{data.getUserHomeWorld.rotation_period}</Text>
                <Text><strong>Orbital Period: </strong>{data.getUserHomeWorld.orbital_period}</Text>
                <Text><strong>Terrain: </strong>{data.getUserHomeWorld.terrain}</Text>
                <Text><strong>Surface Water: </strong>{data.getUserHomeWorld.surface_water}</Text>
              </Box>
              <Box w={isSmallScreen ? '100%' : '33%'}>
                <Grid display="flex" flexDirection="column">
                  <Text marginTop={isSmallScreen ? '2' : ''}><strong>Residents</strong></Text>
                  {
                    data.getUserHomeWorld.residents.map((resident: string) => {
                      return (
                        <Link color="teal" target="_blank" key={resident} href={resident}>{resident}</Link>
                      )
                    })
                  }
                </Grid>
              </Box>
              <Box w={isSmallScreen ? '100%' : '33%'}>
                <Grid display="flex" flexDirection="column">
                  <Text marginTop={isSmallScreen ? '2' : ''}><strong>Films</strong></Text>
                  {
                    data.getUserHomeWorld.films.map((film: string) => {
                      return (
                        <Link color="teal" target="_blank" key={film} href={film}>{film}</Link>
                      )
                    })
                  }
                </Grid>
              </Box>
            </Flex>
          </Box>
        </Flex>
      }
      {
        !loading && error &&
        <Text>An Error occurred</Text>
      }
    </Wrapper>
  );
};

export default HomeWorld;
