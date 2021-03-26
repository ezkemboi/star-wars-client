import React from 'react';
import { 
  Box, 
  Grid, 
  Text, 
  Button 
} from "@chakra-ui/react";

const Card = (
  props: { 
    person : { 
      name : string ,
      homeworld: String,
      mass: String,
      gender: String,
    },
    getPeopleByName: Function,
    getHomeWorldDetails: Function
  }
) => {
  const {
    person,
    getPeopleByName,
    getHomeWorldDetails
  } = props;

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
        >
          Check homeworld details
        </Text>
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
      </Grid>
    </Box>
  )
}

export default Card;
