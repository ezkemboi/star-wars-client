import React from 'react';
import { Heading } from "@chakra-ui/react";

interface HeaderProps {
  title: String
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Heading 
      textAlign="center" 
      marginBottom="6"
    >
      { title}
    </Heading>
  )
}

export default Header;
