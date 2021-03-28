import React from 'react';
import { Grid } from '@chakra-ui/react';
import ButtonLink from '../components/button-link';

interface NavigationProps  {
  historyLink: string
}

const Navigation = ({ historyLink }: NavigationProps) => {
  return (
    <Grid display="flex" justifyContent="center">
      <ButtonLink 
        url={historyLink}
        title='Go Back'
      />
      <ButtonLink 
        url='/'
        title='Go Home'
      />
    </Grid>
  )
}

export default Navigation;
