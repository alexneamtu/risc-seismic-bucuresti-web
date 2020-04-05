// npm
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap';

// components
import Logo from '../components/logo/Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <div className="container">
        <NavbarBrand href="/">
          <Logo />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavLink to="map">Harta cladiri</NavLink>
          <NavLink target="_blank" href="https://github.com/alexneamtu/risc-seismic-bucuresti-web/issues">Raporteaza bug</NavLink>
        </Collapse>
      </div>
    </Navbar>
  );
};
