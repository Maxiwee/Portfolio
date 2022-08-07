import { Box, Text } from '@chakra-ui/react';

const CardSkill = ({ Icon, text }) => {
  return (
    <Box boxSizing='content-box' p={8} _hover={{ transform: 'scale(1.1)' }}>
      <Icon height='70' width='70' />
      <Text pt={2} textAlign='center' color='textColor'>
        {text}
      </Text>
    </Box>
  );
};

export default CardSkill;
