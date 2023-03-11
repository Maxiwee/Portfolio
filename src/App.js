import { Divider } from '@chakra-ui/react';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Networks from './components/Networks/Networks.jsx';
import Projects from './components/Projects/Projects.jsx';

import { Skills } from './components/Skills/Skills.jsx';

function App() {
  // const bg = useColorModeValue('yellow', 'black');
  // const color = useColorModeValue('black', 'yellow');

  return (
    <div>
      <Nav />
      <Header />
      <Divider />
      <About />
      <Skills />
      <Divider />
      <Projects />
      <Experience/>
      <Divider />
      <Networks />
    </div>
  );
}

export default App;
