import React from 'react'
import { Navbar as NavbarBootstrap, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <NavbarBootstrap
    color="light"
    light
    expand="md"
    // fixed="top"
    full
    className="Navbar"
  >
    <NavbarBrand className="p-0 my-n2">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
        LOGO
        </Link>

      </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
        <NavLink>

          <Link to="/">
            Home
          </Link>
        </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
          <Link to="/about">

            About
          </Link>
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Contact Us
          </DropdownToggle>
          <DropdownMenu right>
          <DropdownItem className="text-center nav-contact-link">
               
              </DropdownItem>
              <DropdownItem className="text-center">
                <a className="h1 text-dark h-100 m-0" target="_blank" href="mailto:lherajt@gmail.com" rel="noopener noreferrer"><FontAwesomeIcon className="h-100 align-middle" icon={faEnvelopeSquare}></FontAwesomeIcon></a>
              </DropdownItem>
              <DropdownItem className="text-center">
                <a className="h1 text-dark h-100 m-0" target="_blank" href="tel:201-640-7892" rel="noopener noreferrer"><FontAwesomeIcon className="h-100 align-middle" icon={faPhoneSquare}></FontAwesomeIcon></a>
              </DropdownItem>
           
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </NavbarBootstrap>
  )
}
