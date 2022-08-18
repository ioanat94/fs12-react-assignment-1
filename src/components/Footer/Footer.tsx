import Social from '../Social/Social';

function Footer() {
  return (
    <footer className='footer'>
      <small> &copy; Company X 2022</small>
      <div className='footer__socials'>
        <Social img={'fb-icon.png'} title={'Facebook'} />
        <Social img={'linkedin-icon.png'} title={'LinkedIn'} />
        <Social img={'twitter-icon.png'} title={'Twitter'} />
      </div>
    </footer>
  );
}

export default Footer;
