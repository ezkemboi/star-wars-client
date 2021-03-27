import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Button } from '@chakra-ui/react';


const GoBack = (
  props: {
    historyLink: string
  }
) => {
  const { historyLink } = props;
  const history = useHistory();

  const navigateBack = () => {
    history.push(historyLink);
  }

  return (
    <Grid display="flex" justifyContent="center">
      <Button 
        padding="8px" 
        colorScheme="teal" 
        size="xl" 
        onClick={navigateBack}
      >
        Go Back
      </Button>
    </Grid>
  )
}

export default GoBack;
