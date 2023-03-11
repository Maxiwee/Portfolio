import { Flex, Text } from '@chakra-ui/react';
import CardsExperience from './CardsExperience';

const Experience = () => {
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
            color='brand.yellowP'
            textShadow='-1px -1px #000000'
          >
            Experiencia
          </Text>
          <CardsExperience/>
        </Flex> 
    );
}

export default Experience