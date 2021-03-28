import React from 'react';
import { Flex } from '@chakra-ui/react';

interface WrapperProps {
  children: Array<object> 
}

const Wrapper = (
  { children }: WrapperProps
) => {
  return (
    <Flex 
      direction="column" 
      alignContent="center" 
      padding="1%"
    >
      {children}
    </Flex>
  )
}

export default Wrapper;
