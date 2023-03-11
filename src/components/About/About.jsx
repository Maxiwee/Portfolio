import { Box, Flex, Image, Text } from '@chakra-ui/react';
import imgProfile from '../../assets/profile.jpg'

const About = () => {
  return (
    <Box>
      <Flex
        id='about'
        direction='column'
        align='center'
        gap='1.5rem'
        pt={{ base: '3.8rem', sm: '9rem' }}
        pb='4rem'
      >
        <Text
          fontWeight='bold'
          fontSize='2em'
          textAlign='center'
          mb='1rem'
          color='brand.yellowP'
          textShadow='-1px -1px #000000'
        >
          Sobre Mí
        </Text>
          <Flex 
            direction={{ base: 'column', xl: 'row' }}
            p={{ base: '0', sm: '2rem' }}
            align='center'
            w='100%'
            gap={{ base: '2rem', sm: '0rem' }}
          >
            <Box boxSize='lg' w={{ base: '40%', xl: '65%' }} h='max-content'>
              <Image w='100%' src={imgProfile} alt='Maximiliano Rocha'  borderRadius='full'/>
            </Box>
            <Flex
              id='about'
              direction='column'
              align='center'
              gap='1.5rem'
              h='max-content'
            >
              <Text
                fontWeight='bold'
                //mt={{ base: '0em', sm: '2rem' }}
                fontSize={{ base: '.9em', sm: '1.25em' }}
                w='80%'
              >
                Soy Argentino, tengo 25 años, actualmente me estoy desempeñando como desarrollador backend.
              </Text>
              <Text
                fontWeight='bold'
                fontSize={{ base: '.9em', sm: '1.25em' }}
                w='80%'
              >
                Estoy enfocado en él desarrolló web full stack. Soy una persona
                optimista, con pensamiento lógico, autodidacta y dedicado. Me
                desenvuelvo muy bien trabajando en equipo, ya que me gusta mucho
                cooperar y es la mejor manera de aprender como también compartir el
                conocimiento adquirido.
              </Text>
              <Text
                fontWeight='bold'
                fontSize={{ base: '.9em', sm: '1.2em' }}
                w='80%'
              >
                Descubrí mi pasión por la programación hace no mucho tiempo, este año
                obtuve un certificado de desarrollador web full stack y quiero
                compartir con ustedes mis habilidades. ¡¡ Bienvenidos !!
              </Text>
            </Flex>
          </Flex> 
      </Flex>
    </Box>
  );
};

export default About;
