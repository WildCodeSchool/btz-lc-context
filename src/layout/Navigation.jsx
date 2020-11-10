import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import authContext from '../contexts/Auth';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navItems] = useState([
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Profile',
      route: '/profile',
    },
    {
      label: 'Users',
      route: '/users',
    },
  ]);
  const { token, avatar } = useContext(authContext);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">
        {token || 'livecoding'}
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {navItems.map((item) => {
            return (
              <NavItem key={item.route}>
                <NavLink tag={Link} to={item.route}>
                  {item.label}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
        <img src={avatar} alt="" style={{ maxHeight: 40 }} />
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
