import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

interface LinkProps {
  url: string,
  title: string,
}

const ButtonLink = (
  { 
    url,
    title
  }: LinkProps
) => {
  // can validate url here
  return (
    <Button 
      colorScheme="teal"
      variant="outline"
      margin="3"
    >
      <Link to={url}>{title}</Link>
    </Button>
  )
}

export default ButtonLink;
