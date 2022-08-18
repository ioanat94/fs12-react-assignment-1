import { HashLink } from 'react-router-hash-link';
import { NavLinkProps } from '../../types';

function NavLink({ link, name }: NavLinkProps) {
  return (
    <HashLink to={link} className='nav-link'>
      {name}
    </HashLink>
  );
}

export default NavLink;
