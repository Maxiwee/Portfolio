import { Box, Flex, Text } from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import CardsNetworks from './CardsNetworks';
import FormMessage from './FormMessage';

const Networks = () => {
  return (
    <Box>
      <Flex
        id='contact'
        direction='column'
        align='center'
        pt={{ base: '0', sm: '9rem' }}
        h='100vh'
      >
        <Text
          fontWeight='bold'
          fontSize='2em'
          textAlign='center'
          mb={{ base: '0', sm: '4rem' }}
          width={'80%'}
        >
          Contactame
        </Text>
        <CardsNetworks />
        <Flex w='100%' h='100%' justify={'end'} align='end' pr='3'>
          <Footer />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Networks;
