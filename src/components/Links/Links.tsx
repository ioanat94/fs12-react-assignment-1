import { useState } from 'react';
import NavLink from '../NavLink/NavLink';

function Links() {
  const [isActive, setIsActive] = useState(false);

  const handleHamburger = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <nav className='header__nav'>
        <a href='/'>Home</a>
        <NavLink link='/#services' name='Services' />
        <NavLink link='/#stack' name='Stack' />
        <NavLink link='/#blogs' name='Blogs' />
        <NavLink link='/#contact' name='Contact' />
      </nav>
      <button
        className={`hamburger hamburger--collapse hidden ${
          isActive ? 'is-active' : ''
        }`}
        type='button'
        onClick={handleHamburger}
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
      <nav
        className={`${
          isActive ? 'hamburger-nav-active' : 'hamburger-nav-hidden'
        }`}
        onClick={handleHamburger}
      >
        <a href='/'>Home</a>
        <NavLink link='/#services' name='Services' />
        <NavLink link='/#stack' name='Stack' />
        <NavLink link='/#blogs' name='Blogs' />
        <NavLink link='/#contact' name='Contact' />
      </nav>
    </>
  );
}

export default Links;
