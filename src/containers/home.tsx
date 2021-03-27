import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Flex, Grid, Text } from "@chakra-ui/react";
import Card from '../components/card';
import PersonInterface from '../utils/person-interface';
import { GET_PEOPLE } from '../queries';
import Loading from '../components/loading';
import Wrapper from '../components/wrapper';
import Pagination from '../components/pagination';
import Header from '../components/header';
import MainContext from '../context';
import updateLocationHistory from '../utils/update-location-history';

const Home: React.FC = () => {
  const { contextState, setContext } = useContext(MainContext);
  const history = useHistory();
  const [page, setPage]= useState(1); // default being 1
  
  const { loading, error, data, refetch } = useQuery(GET_PEOPLE, {
    variables: { page: page }
  });

  useEffect(() => {
    const location: string = window.location.pathname + window.location.search;
    if(location !== contextState.currentPage) {
      updateLocationHistory(contextState, location, setContext);
    }
  })

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

  const fetchByPageNumber = (pageNumber: number) => {
    setPage(pageNumber);
    refetch({ page: pageNumber})
  }
  let pages = [];
  let count = data && data.getPeople.count;
  if(count) {
    // calculate all pages
    for(let i = 1; i <= Math.ceil(count / 10); i++) {
      pages.push(i);
    }
  }

  return (
    <Wrapper>
      <Header />
      {
        loading &&
        <Loading />
      }
      {
        !loading && data.getPeople.people && data.getPeople.people.length > 0 &&
        <Flex direction="column">
          <Grid templateColumns="repeat(4, 1fr)" gap={3}>
            {
              data.getPeople.people.map((person: PersonInterface) => {
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
          {
            !loading && data.getPeople.people &&
            <Pagination 
              fetchByPageNumber={fetchByPageNumber}
              pages={pages}
              page={page}
            />
          }
        </Flex>
      }
      {
        !loading && error &&
        <Text>An Error occurred</Text>
      }
    </Wrapper>
  );
};

export default Home;
