import { Box, Image, Link, Text } from '@chakra-ui/react';
import ModalProject from './ModalProject';

const CardProject = ({
  img,
  title,
  skills,
  description,
  urlProyect,
  urlGitHub,
}) => {
  return (
    <Box p={4} display={{ md: 'flex' }}>
      <Box flexShrink={0}>
        <Image
          borderRadius='lg'
          width={'15rem'}
          src={img}
          alt={`Project ${title}`}
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight='bold'
          textTransform='uppercase'
          fontSize='1.2rem'
          letterSpacing='wide'
          color='brand.yellowP'
          textShadow='-1px -1px #00000080'
        >
          {title}
        </Text>
        <Text display='inline' mr='1'>
          Tecnologias:
        </Text>
        <Text color='gray.500' display='inline'>
          {skills}
        </Text>
        <ModalProject
          img={img}
          title={title}
          descrption={description}
          urlProyect={urlProyect}
          urlGitHub={urlGitHub}
        />
      </Box>
    </Box>
  );
};

export default CardProject;
