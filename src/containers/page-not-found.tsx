import React from 'react';
import { Grid, Text } from '@chakra-ui/react';
import ButtonLink from '../components/button-link';

const PageNotFound = () => {

  return (
    <Grid 
      display="flex" 
      flexDirection="column" 
      alignItems="center"
      marginTop="20%"
    >
      <Text fontSize="2xl">Ops, page not found</Text>
      <ButtonLink title='Go Home' url='/' />
    </Grid>
  )
}

export default PageNotFound;
