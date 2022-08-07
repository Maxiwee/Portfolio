import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import CardsSkill from './CardsSkill';

export const Skills = () => {
  return (
    <Flex direction='column' align='center' mb={{ base: '0', sm: '4rem' }}>
      <Text
        fontWeight='bold'
        fontSize='2em'
        textAlign='center'
        width={'80%'}
        pt={{ base: '0', sm: '2rem' }}
        mb={{ base: '0', sm: '2rem' }}
      >
        Habilidades
      </Text>
      <CardsSkill />
    </Flex>
  );
};
