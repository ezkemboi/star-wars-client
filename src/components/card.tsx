import React from 'react';
import { 
  Box, 
  Grid, 
  Text, 
  Button 
} from "@chakra-ui/react";

interface CardProps {
  person : { 
    name : string,
    homeworld: string,
    mass: string,
    gender: string,
  },
  getPeopleByName?: Function,
  getHomeWorldDetails: Function,
  isByName?: boolean
}

const Card = (
  { 
    person, 
    getPeopleByName, 
    getHomeWorldDetails, 
    isByName
  }: CardProps
) => {
  return (
    <Box 
      maxW="sm" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden"
      key={person.name} 
    >
      <Grid 
        display="flex" 
        flexDirection="column"
        padding="5"
      >
        <Text><strong>Name: </strong>{person.name}</Text>
        <Text><strong>Mass: </strong>{person.mass}</Text>
        <Text><strong>Gender: </strong>{person.gender}</Text>
        <Text 
          color="teal.500" 
          onClick={() => getHomeWorldDetails(person.homeworld)}
          cursor="pointer"
          marginTop="3px"
        >
          Check homeworld details
        </Text>
        {
          !isByName && getPeopleByName &&
          <Grid 
            display="flex"
            marginTop="4"
          >
            <Button 
              colorScheme="teal" 
              variant="outline"
              onClick={() => getPeopleByName(person.name)}
            >
              View By Name
            </Button>
          </Grid>
        }
      </Grid>
    </Box>
  )
}

export default Card;
