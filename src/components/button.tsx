import React from 'react';
import { Button } from '@chakra-ui/react';

interface ButtonProps {
  title: string,
  onClickLink?: (event: React.MouseEvent) => void
}
// can add style adjustments here in future
const MainButton = (
  { 
    title, 
    onClickLink 
  }: ButtonProps
) => {
  return (
    <Button 
      colorScheme="teal"
      variant="outline"
      onClick={onClickLink}
    >
      {title}
    </Button>
  )
}

export default MainButton;
