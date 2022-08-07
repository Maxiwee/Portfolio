import { Box, Text, Link, Flex } from '@chakra-ui/react';
import {
  Github,
  Linkedin,
  Gmail,
  Whatsapp,
} from '@icons-pack/react-simple-icons';

const CardsNetworks = () => {
  return (
    <Flex justify={{ base: 'start', md: 'center' }}>
      <Flex
        justify={{ base: 'start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box
          display='flex'
          flexDirection='column'
          gap={{ base: '0rem', md: '2rem' }}
        >
          <Link
            href='mailto: maxi.jrocha97@gmail.com'
            target='_blank'
            _hover={{
              textDecoration: 'none',
            }}
            display='flex'
            alignItems='center'
            p={3}
          >
            <Gmail height='40' width='40' />
            <Text ml={5}>maxi.jrocha97@gmail.com </Text>
          </Link>

          <Link
            href='https://wa.me/5493512329263'
            target='_blank'
            _hover={{
              textDecoration: 'none',
            }}
            display='flex'
            alignItems='center'
            p={3}
          >
            <Whatsapp height='40' width='40' />
            <Text ml={5}>+54 9 387 6133601</Text>
          </Link>
        </Box>

        <Box
          display='flex'
          flexDirection='column'
          gap={{ base: '0rem', md: '2rem' }}
        >
          <Link
            href='https://www.linkedin.com/in/maxi-rocha-developer/'
            target='_blank'
            _hover={{
              textDecoration: 'none',
            }}
            display='flex'
            alignItems='center'
            p={3}
          >
            <Linkedin height='40' width='40' />
            <Text ml={5}>linkedin.com/in/maxi-rocha-developer/</Text>
          </Link>

          <Link
            href='https://github.com/Maxiwee'
            target='_blank'
            _hover={{
              textDecoration: 'none',
            }}
            display='flex'
            alignItems='center'
            p={3}
          >
            <Github height='40' width='40' />
            <Text ml={5}>github.com/Maxiwee</Text>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardsNetworks;
