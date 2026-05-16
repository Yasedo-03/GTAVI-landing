import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import JasonVideo from './sections/JasonVideo';
import { JasonNext } from './sections/JasonNext';
import SecondVideo from './sections/SecondVideo';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
      <JasonVideo />
      <JasonNext />
      <SecondVideo />
    </main>
  );
};

export default App;
