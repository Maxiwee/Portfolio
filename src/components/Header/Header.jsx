import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      id='header'
      align='center'
      justify='center'
      h='100vh'
      direction='column'
    >
      <Box
        br='blue'
        fontSize={{
          base: '1.5rem',
          sm: '2em',
          md: '2.5em',
          lg: '3em',
          xl: '4em',
        }}
      >
        <Text
          fontSize={{
            base: '2.5rem',
            sm: '1em',
            md: '1em',
            lg: '1em',
            xl: '1em',
          }}
        >
          Hola,
        </Text>
        <Text
          fontSize={{
            base: '2.5rem',
            sm: '1em',
            md: '1em',
            lg: '1em',
            xl: '1em',
          }}
        >
          Soy{' '}
          <Text display={'inline'} color='brand.yellowP' fontWeight='bold'>
            Maximiliano
          </Text>
          ,
        </Text>
        <Text fontSize='1.1em' fontWeight='bold'>
          Full Stack Web Developer
        </Text>
      </Box>
      <Text mt='10'>KEPP CALM AND TRY CODING</Text>
    </Flex>
  );
};
//width={{ base: '100%', sm: '50%', md: '25%' }
export default Header;
