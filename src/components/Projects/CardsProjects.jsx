import { Box, useColorMode } from '@chakra-ui/react';
import CardProject from './CardProject';
import imgWeather from '../../assets/weatherApp.png';
import imgDog from '../../assets/dogApp.png';
import imgHenry from '../../assets/HenryBankApp.png';
import imgPortfolioB from '../../assets/portfolioBlackApp.png';
import imgPortfolioW from '../../assets/portfolioWhiteApp.png';
import imgDasies from '../../assets/daisies_login.png';

const CardsProjects = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Box
      display='flex'
      w='80%'
      justifyContent={'center'}
      flexDirection='column'
    >
      <CardProject
        img={imgWeather}
        title={'Weather App'}
        skills={'HTML, CSS, React'}
        description={
          'Single Page Aplication del clima que permite al usuario consultar el clima de diferentes países y ciudades, también ver con detalle los datos del tiempo haciendo clic sobre la carta de los países o ciudades buscados.'
        }
        urlProyect={'https://weather-app-mu-two-48.vercel.app/'}
        urlGitHub={'https://github.com/Maxiwee/Weather-App'}
      />
      <CardProject
        img={imgDog}
        title={'Dog App'}
        skills={
          'HTML, CSS, Javascript, React, Redux, PostgreSQL, Express, Node js, Sequelize'
        }
        description={
          'Single-Page-App donde el objetivo es ver distintos tipos de raza de perro y poder crear nuestra propia raza, ademas cuenta con un buscador y diferentes filtros para permitir al usuario hacer una busqueda personalizada de alguna raza de perro de su interes.'
        }
        urlGitHub={'https://github.com/Maxiwee/App-Dogs'}
      />
      <CardProject
        img={imgHenry}
        title={'Henry Bank App'}
        skills={
          'Javascript, React Native, CSS, Redux, Node js, Sequelize, Express, PostgreSQL, Git Hub, Figma, Trello, entre otras.'
        }
        description={
          'Mobile application que simula un banco para teléfonos celulares donde el usuario tiene la posibilidad de trasferir dinero como recibir dinero desde su cuenta, comprar y vender divisas, como también criptomonedas.'
        }
        urlGitHub={'https://github.com/SantiagoGomez1/client-HenryBank'}
      />
      <CardProject
        img={isDark ? imgPortfolioW : imgPortfolioB}
        title={'Portfolio'}
        skills={'HTML, CSS, React, Chakra'}
        description={
          'Portfolio realizado por mi persona desde cero y a medida que aprendo cosas nuevas intento mostrarlas en esta página, espero te guste!'
        }
        urlGitHub={'https://github.com/Maxiwee/Portfolio'}
      />
      </Box>
  );
};

export default CardsProjects;
