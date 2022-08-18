import Arrow from '../Arrow/Arrow';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Stack from '../Stack/Stack';

function Content() {
  return (
    <div className='home__wrapper'>
      <Hero />
      <Arrow />
      <Services />
      <Stack />
      <Blogs />
      <Contact />
    </div>
  );
}

export default Content;
