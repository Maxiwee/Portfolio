import { Box, useColorMode } from '@chakra-ui/react';
import CardExperience from './CardExperience.jsx';
import imgDasies from '../../assets/daisies_login.png';

const CardsExperience = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    return (
      <Box
        display='flex'
        w='80%'
        justifyContent={'center'}
        flexDirection='column'
      >
        <CardExperience
          img={imgDasies}
          title={'Daisies'}
          skills={'Node js, Express, MongoDB, Mongoose, Typescript, SCRUM, AWS, Firabase'}
          description={
            'Daisies en una aplicación web-app de telemedicina destinada a las mujeres, me desmepeño en el equipo de backend, mi dia a dia es el de desarollar nuevas funcionalidades, uso de AWS básico, subir a producción las nuevas implementaciónes, solucionar bugs y proponer ideas para un mejor funciónamiento del servidor. Implementación de API externas.'
          }
          date={'01/09/23 - Act'}
          urlProyect={'https://daisies.mx/'}
        />
      </Box>
    );
}

export default CardsExperience