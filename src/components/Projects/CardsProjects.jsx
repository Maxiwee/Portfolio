import { Box } from '@chakra-ui/react';
import CardProject from './CardProject';

const CardsProjects = () => {
  return (
    <Box
      display='flex'
      f
      w='80%'
      justifyContent={'center'}
      flexDirection='column'
    >
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
    </Box>
  );
};

export default CardsProjects;
