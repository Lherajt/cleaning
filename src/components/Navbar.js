import React from 'react'
import { Navbar as NavbarBootstrap, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <NavbarBootstrap
    color="dark"
    dark
    expand="md"
    // fixed="top"
    full
  >
    <NavbarBrand className="p-0 my-n2">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >LOGO</Link>

      </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            About
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
          {/* <DropdownItem className="text-center nav-contact-link">
                <a className="h1 text-dark h-100 m-0" target="_blank" href="https://twitter.com/LukasHerajt" rel="noopener noreferrer"><FontAwesomeIcon className="h-100 align-middle" icon={faTwitterSquare}></FontAwesomeIcon></a>
              </DropdownItem>
              <DropdownItem className="text-center">
                <a className="h1 text-dark h-100 m-0" target="_blank" href="https://github.com/Lherajt" rel="noopener noreferrer"><FontAwesomeIcon className="h-100 align-middle" icon={faGithubSquare}></FontAwesomeIcon></a>
              </DropdownItem>
              <DropdownItem className="text-center">
                <a className="h1 text-dark h-100 m-0" target="_blank" href="mailto:lherajt@gmail.com" rel="noopener noreferrer"><FontAwesomeIcon className="h-100 align-middle" icon={faEnvelopeSquare}></FontAwesomeIcon></a>
              </DropdownItem>
              <DropdownItem className="text-center">
                <a className="h1 text-dark h-100 m-0" target="_blank" href="tel:201-640-7892" rel="noopener noreferrer"><FontAwesomeIcon className="h-100 align-middle" icon={faPhoneSquare}></FontAwesomeIcon></a>
              </DropdownItem> */}
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </NavbarBootstrap>
  )
}
