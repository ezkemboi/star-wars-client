import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Button } from '@chakra-ui/react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  padding:"8px"  
  size:"xl"
`

const Navigation = (
  props: {
    historyLink: string
  }
) => {
  const { historyLink } = props;
  const history = useHistory();

  const navigateBack = () => {
    history.push(historyLink);
  }

  const navigateBackHome = () => {
    history.push('/')
  }

  return (
    <Grid display="flex" justifyContent="center">
      <StyledButton 
        colorScheme="teal"
        marginRight="6"
        onClick={navigateBack}
      >
        Go Back
      </StyledButton>
      <StyledButton
        colorScheme="teal"
        onClick={navigateBackHome}
      >
        Go Home
      </StyledButton>
    </Grid>
  )
}

export default Navigation;
