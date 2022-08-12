import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  useColorMode,
  useDisclosure,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

const Nav = () => {
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState('left');

  console.log(colorMode);
  return (
    <div>
      {isLargerThan500 ? (
        <Flex
          p='2'
          borderBottom='1px'
          borderBottomColor={isDark ? 'white' : 'black'}
          w='100%'
          position='fixed'
          z-index='100'
          bg={isDark ? 'brand.blackP' : 'white'}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Box fontSize={'30px'}>
            <Link href='#header'>Portfolio.</Link>
          </Box>
          <Spacer />
          <Box
            display='flex'
            justifyContent={'space-between'}
            fontSize={{ base: '.85rem', lg: '1rem' }}
          >
            <HStack gap={{ base: '1rem', lg: '2rem' }}>
              <Box>
                <Link href='#about'>Sobre Mí</Link>
              </Box>
              <Box>
                <Link href='#projects'>Proyectos</Link>
              </Box>
              <Box>
                <Link href='#contact'>Contactame</Link>
              </Box>
              <Box>
                <Link
                  href='https://drive.google.com/file/d/1JANvVa3t1ZS814SuxAySU2RQGpErg9Mp/view?usp=sharing'
                  target='_blank'
                >
                  CV
                </Link>
              </Box>
            </HStack>
            <Box ml={'150'}>
              <IconButton
                boxShadow='dark-lg'
                icon={isDark ? <FaSun color='white' /> : <FaMoon />}
                isRound='true'
                onClick={toggleColorMode}
                w='10'
              ></IconButton>
            </Box>
          </Box>
        </Flex>
      ) : (
        <>
          <Box>
            <Flex
              bg={isDark ? 'brand.blackP' : 'white'}
              z-index='100'
              p='3'
              w='100%'
              position='fixed'
            >
              <IconButton
                icon={<FaBars />}
                onClick={onOpen}
                id='nav'
                bg='tranparent'
                fontSize='2em'
              ></IconButton>
              <Spacer />
              <IconButton
                boxShadow='dark-lg'
                icon={isDark ? <FaSun color='white' /> : <FaMoon />}
                isRound='true'
                onClick={toggleColorMode}
                w='10'
              ></IconButton>
            </Flex>
          </Box>
          <Drawer
            placement={placement}
            onClose={onClose}
            isOpen={isOpen}
            size={'full'}
            returnFocusOnClose={false}
          >
            <DrawerOverlay />
            <DrawerContent bg={isDark ? 'brand.blackP' : 'white'} h='50%'>
              <DrawerHeader borderBottomWidth='1px'>
                <Link href='#header' onClick={onClose}>
                  Portfolio.
                </Link>
              </DrawerHeader>
              <DrawerBody>
                <VStack h='100%' fontSize='1.5em'>
                  <Box width='100%' p='2'>
                    <Link href='#about' onClick={onClose}>
                      Sobre Mí
                    </Link>
                  </Box>
                  <Box width='100%' p='2'>
                    <Link href='#projects' onClick={onClose}>
                      Proyectos
                    </Link>
                  </Box>
                  <Box width='100%' p='2'>
                    <Link href='#contact' onClick={onClose}>
                      Contactame
                    </Link>
                  </Box>
                  <Box width='100%' p='2'>
                    <Link
                      href='https://drive.google.com/file/d/1JANvVa3t1ZS814SuxAySU2RQGpErg9Mp/view?usp=sharing'
                      target='_blank'
                      onClick={onClose}
                    >
                      CV
                    </Link>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </div>
  );
};

export default Nav;
