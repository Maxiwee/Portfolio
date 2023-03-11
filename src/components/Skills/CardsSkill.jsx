import { Box } from '@chakra-ui/react';
import CardSkill from './CardSkill.jsx';
import {
  Html5,
  CssThree,
  ReactJs,
  Redux,
  Nodedotjs,
  Express,
  Postgresql,
  Chakraui,
  Git,
  Gnubash,
  Javascript,
  Sequelize,
  Github,
  Typescript,
  Mongodb
} from '@icons-pack/react-simple-icons';

const CardsSkill = () => {
  return (
    <Box display='flex' flexWrap='wrap' w='80%' justifyContent={'center'}>
      <CardSkill Icon={Html5} text={'HTML5'} />
      <CardSkill Icon={CssThree} text={'CSS3'} />
      <CardSkill Icon={Javascript} text={'Javascript'} />
      <CardSkill Icon={ReactJs} text={'React'} />
      <CardSkill Icon={Redux} text={'Redux'} />
      <CardSkill Icon={Chakraui} text={'Chakra UI'} />
      <CardSkill Icon={Nodedotjs} text={'Node Js'} />
      <CardSkill Icon={Express} text={'Express'} />
      <CardSkill Icon={Sequelize} text={'Sequelize'} />
      <CardSkill Icon={Postgresql} text={'PostgreSQL'} />
      <CardSkill Icon={Git} text={'Git'} />
      <CardSkill Icon={Github} text={'Github'} />
      <CardSkill Icon={Typescript} text={'Typescript'} />
      <CardSkill Icon={Mongodb} text={'MongoDB'} />
    </Box>
  );
};

export default CardsSkill;
