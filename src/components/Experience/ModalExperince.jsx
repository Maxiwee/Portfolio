import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
    Flex,
    Link,
    useColorMode,
    background,
    color,
    border,
  } from '@chakra-ui/react';
  import { Github } from '@icons-pack/react-simple-icons';
  import { ExternalLinkIcon } from '@chakra-ui/icons';

const ModalExperince = ({ img, title, descrption, urlProyect, urlGitHub }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    return (
      <Box>
        <Button
          onClick={onOpen}
          bg={isDark ? 'white' : 'brand.blackP'}
          color={isDark ? 'brand.blackP' : 'white'}
          zIndex='0'
          _hover={
            isDark
              ? {
                  bg: 'brand.blackP',
                  color: 'white',
                  border: '1px',
                  borderColor: 'white',
                }
              : {
                  bg: 'white',
                  color: 'brand.blackP',
                  border: '1px',
                  borderColor: 'brand.blackP',
                }
          }
        >
          Más
        </Button>
  
        <Modal
          closeOnOverlayClick={false}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <ModalOverlay />
          <ModalContent bg={isDark ? 'brand.blackP' : null}>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box display={'flex'} justifyContent='center' width={'100%'} mb='5'>
                <Image
                  borderRadius='lg'
                  src={img}
                  alt='Woman paying for a purchase'
                />
              </Box>
              {descrption}
            </ModalBody>
            <ModalFooter>
              <Flex gap={'5'}>
                <Link _hover='none' href={urlGitHub} target='_blank'>
                  <Button
                    bg='white'
                    color='black'
                    leftIcon={<Github color='black' />}
                  >
                    Código
                  </Button>
                </Link>
                {urlProyect ? (
                  <Link _hover='none' href={urlProyect} target='_blank'>
                    <Button
                      bg='white'
                      color='black'
                      leftIcon={<ExternalLinkIcon />}
                    >
                      Página
                    </Button>
                  </Link>
                ) : null}
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
}

export default ModalExperince