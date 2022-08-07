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
          id='nav'
        >
          <Box fontSize={'30px'}>Portfolio.</Box>
          <Spacer />
          <HStack gap={'2em'}>
            <Box>
              <Link href='#about'>Sobre Mí</Link>
            </Box>
            <Box>
              <Link href='#projects'>Proyectos</Link>
            </Box>
            <Box>
              <Link href='#contact'>Contactame</Link>
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
        </Flex>
      ) : (
        <>
          <Box>
            <Flex bg={isDark ? 'brand.blackP' : 'white'} z-index='1' m='3'>
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
          >
            <DrawerOverlay />
            <DrawerContent bg={isDark ? 'brand.blackP' : 'white'} h='50%'>
              <DrawerHeader borderBottomWidth='1px'>Portfolio.</DrawerHeader>
              <DrawerBody>
                <VStack h='100%' fontSize='1.5em'>
                  <Box width='100%' p='2'>
                    <Link href='#about' onClick={onClose}>
                      Sobre Mí
                    </Link>
                  </Box>
                  <Box width='100%' p='2'>
                    <Link href='#project'>Proyectos</Link>
                  </Box>
                  <Box width='100%' p='2'>
                    <Link href='#contact'>Contactame</Link>
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
