import React from 'react';
import { Flex } from '@chakra-ui/react';

const Wrapper = (
  props: { 
    children: Array<object> 
  }
) => {
  return (
    <Flex 
      direction="column" 
      alignContent="center" 
      padding="1%"
    >
      {props.children}
    </Flex>
  )
}

export default Wrapper;
