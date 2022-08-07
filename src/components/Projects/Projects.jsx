import { Flex, Text } from '@chakra-ui/react';
import CardsProjects from './CardsProjects';

const Projects = () => {
  return (
    <Flex
      id='projects'
      direction='column'
      align='center'
      pt={{ base: '0', sm: '9rem' }}
      mb={{ base: '0', sm: '8rem' }}
    >
      <Text
        fontWeight='bold'
        fontSize='2em'
        textAlign='center'
        mb={{ base: '0', sm: '4rem' }}
        width={'80%'}
      >
        Proyectos
      </Text>
      <CardsProjects />
    </Flex>
  );
};

export default Projects;
