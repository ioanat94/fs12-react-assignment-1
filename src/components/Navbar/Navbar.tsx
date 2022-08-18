import Links from '../Links/Links';

function Navbar() {
  return (
    <header className='header'>
      <img src={require('../../assets/logo.png')} alt='Logo' />
      <Links />
    </header>
  );
}

export default Navbar;
