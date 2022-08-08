import { Box, Image, Link, Text } from '@chakra-ui/react';

const CardProject = ({ img, title, skills }) => {
  return (
    <Box p={4} display={{ md: 'flex' }}>
      <Box flexShrink={0}>
        <Image
          borderRadius='lg'
          width={'15rem'}
          src={img}
          alt='Woman paying for a purchase'
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight='bold'
          textTransform='uppercase'
          fontSize='md'
          letterSpacing='wide'
          color='brand.yellowP'
          textShadow='-1px -1px #00000030'
        >
          {title}
        </Text>
        <Text display='inline' mr='1'>
          Tecnologias:
        </Text>
        <Text color='gray.500' display='inline'>
          {skills}
        </Text>
        <Link
          mt={1}
          display='block'
          fontSize='sm'
          lineHeight='normal'
          fontWeight='semibold'
          href='#'
        >
          Más
        </Link>
      </Box>
    </Box>
  );
};

export default CardProject;
