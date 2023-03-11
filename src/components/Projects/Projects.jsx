import { Flex, Text } from '@chakra-ui/react';
import CardsProjects from './CardsProjects';

const Projects = () => {
  return (
    <Flex
      id='projects'
      direction='column'
      align='center'
      pt={{ base: '0', sm: '9rem' }}
    >
      <Text
        fontWeight='bold'
        fontSize='2em'
        textAlign='center'
        mb={{ base: '0', sm: '4rem' }}
        width={'80%'}
        color='brand.yellowP'
        textShadow='-1px -1px #000000'
      >
        Proyectos
      </Text>
      <CardsProjects />
    </Flex>
  );
};

export default Projects;
