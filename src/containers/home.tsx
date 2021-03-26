import React, { useState } from 'react';
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
  const [page, setPage]= useState(1); // default being 1
  const { loading, error, data, refetch } = useQuery(GET_PEOPLE, {
    variables: { page: page }
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
    <div style={{ margin: '20px' }}>
      <Heading textAlign="center" marginBottom="6">
        Star Wars
      </Heading>
      {
        loading &&
        <Text textAlign="center">Loading....</Text>
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
          <div style={{textAlign: 'center', marginTop:"20px"}}>
            <div className="pagination">
              <Text 
                cursor="pointer" 
                onClick={() => fetchByPageNumber(page - 1)}
              >
                &laquo;
              </Text>
              {
                data.getPeople && pages.map((pageNo: number) => {
                  return (
                    <Text 
                      key={pageNo} 
                      cursor="pointer"
                      className={page === pageNo ? 'active' : ''}
                      onClick={() => fetchByPageNumber(pageNo)}
                    >
                      {pageNo}
                    </Text>
                  )
                })
              }
              <Text 
                cursor="pointer" 
                onClick={() => fetchByPageNumber(page + 1)}
              >
                &raquo;
              </Text>
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
