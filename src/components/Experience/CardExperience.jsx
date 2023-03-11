import { Box, Flex, Image, Link, Text, Spacer } from '@chakra-ui/react';
import ModalExperience from './ModalExperince.jsx';

const CardExperience = ({
  img,
  title,
  skills,
  description,
  urlProyect,
  urlGitHub,
  date,
}) => {
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
            <Flex  
              id='cardExperience'
              direction='row'
              align='center'
              flexDirection='center'
            >
              <Text
                display='inline'
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='1.2rem'
                letterSpacing='wide'
                color='brand.yellowP'
                textShadow='-1px -1px #00000080'
              >
                {title}
              </Text>
              <Spacer />
              <Text 
                display='inline-block'
                ml='1rem'
                fontSize='.9rem'
                mr='1rem'  
              >
                {date || null}
              </Text>
            </Flex>
            <Text display='inline' mr='1'>
              Tecnologias:
            </Text>
            <Text color='gray.500' display='inline'>
              {skills}
            </Text>
            <ModalExperience
              img={img}
              title={title}
              descrption={description}
              urlProyect={urlProyect}
              urlGitHub={urlGitHub}
            />
          </Box>
        </Box>
    );
}

export default CardExperience