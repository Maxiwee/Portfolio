import { Box, useColorMode } from '@chakra-ui/react';
import CardProject from './CardProject';
import imgWeather from '../../assets/weatherApp.png';
import imgDog from '../../assets/dogApp.png';
import imgHenry from '../../assets/HenryBankApp.png';
import imgPortfolioB from '../../assets/portfolioBlackApp.png';
import imgPortfolioW from '../../assets/portfolioWhiteApp.png';

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
      />
      <CardProject
        img={imgDog}
        title={'Dog App'}
        skills={
          'HTML, CSS, Javascript, React, Redux, PostgreSQL, Express, Node js, Sequelize'
        }
      />
      <CardProject
        img={imgHenry}
        title={'Henry Bank App'}
        skills={'React Native, Nodejs, entre otras.'}
      />
      <CardProject
        img={isDark ? imgPortfolioW : imgPortfolioB}
        title={'Portfolio'}
        skills={'HTML, CSS, React, Chakra'}
      />
    </Box>
  );
};

export default CardsProjects;
