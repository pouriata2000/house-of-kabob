import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

// Navbar Container
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #d6cfbd;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// Nav Links (Desktop)
const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  list-style: none;

  a {
    text-decoration: none;
    color: black;
    transition: color 0.3s ease;
    padding: 8px 12px;
    border-radius: 5px;

    &:hover {
      color: red;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 768px) {
    display: none;  /* Hide on mobile */
  }
`;

// Wrapper for Social Icons & Burger Menu
const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// Social Icons
const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  svg {
    color: black;
    transition: color 0.3s ease;

    &:hover {
      color: red;
    }
  }
`;

// Hamburger Menu Button (☰)
const HamburgerMenu = styled.div`
  font-size: 2rem;
  cursor: pointer;
  display: block;  /* Ensures visibility */
  z-index: 1100;

  @media (min-width: 769px) {
    display: none;  /* Hide on larger screens */
  }
`;

// Mobile Menu
const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: #d6cfbd;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  z-index: 1000;
`;

// Mobile Menu Buttons
const MobileMenuButton = styled.div`
  width: 100%;
  text-align: center;
  padding: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    color: red;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <NavbarContainer>
        <img src="/images/logo.png" alt="House of Kabob Logo" height="50" />

        {/* Desktop Navigation */}
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/story">Our Story</Link>
        </NavLinks>

        {/* Social Icons + Burger Button */}
        <SocialWrapper>
        <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </HamburgerMenu>
          {/* Mobile Menu Dropdown */}
      <MobileMenu open={menuOpen}>
        <MobileMenuButton onClick={() => setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </MobileMenuButton>
        <MobileMenuButton onClick={() => setMenuOpen(false)}>
          <Link to="/menu">Menu</Link>
        </MobileMenuButton>
        <MobileMenuButton onClick={() => setMenuOpen(false)}>
          <Link to="/reservations">Reservations</Link>
        </MobileMenuButton>
        <MobileMenuButton onClick={() => setMenuOpen(false)}>
          <Link to="/contact">Contact Us</Link>
        </MobileMenuButton>
        <MobileMenuButton onClick={() => setMenuOpen(false)}>
          <Link to="/story">Our Story</Link>
        </MobileMenuButton>
      </MobileMenu>
          <SocialIcons>
            <FaInstagram />
          </SocialIcons>

          {/* Hamburger Menu (☰) - Only Shows on Mobile */}
          
        </SocialWrapper>
      </NavbarContainer>

      
    </>
  );
};

export default Navbar;

