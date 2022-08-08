import { Box, Flex, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box>
      <Flex
        id='about'
        direction='column'
        align='center'
        gap='1.5rem'
        pt={{ base: '5rem', sm: '9rem' }}
        h='100vh'
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
        <Text
          fontWeight='bold'
          mt={{ base: '0em', sm: '2rem' }}
          fontSize={{ base: '1em', sm: '1.5em' }}
          w='80%'
        >
          Soy Argentino, tengo 25 años, actualmente estoy esperando mi primera
          oportunidad laboral para demostrar mis habilidades adquiridas y poder
          seguir ampliando mis conocimientos en este maravilloso mundo de la
          programación.
        </Text>
        <Text fontWeight='bold' fontSize={{ base: '1em', sm: '1.5em' }} w='80%'>
          Estoy enfocado en él desarrolló web full stack. Soy una persona
          optimista, con pensamiento lógico, autodidacta y dedicado. Me
          desenvuelvo muy bien trabajando en equipo, ya que me gusta mucho
          cooperar y es la mejor manera de aprender como también compartir el
          conocimiento adquirido.
        </Text>
        <Text fontWeight='bold' fontSize={{ base: '1em', sm: '1.5em' }} w='80%'>
          Descubrí mi pasión por la programación hace no mucho tiempo, este año
          obtuve un certificado de desarrollador web full stack y quiero
          compartir con ustedes mis habilidades. ¡¡ Bienvenidos !!
        </Text>
      </Flex>
    </Box>
  );
};

export default About;
