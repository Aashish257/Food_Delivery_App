import React from 'react'
import styled from 'styled-components';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
`;
const NavContainer = styled.div``;
const NavLogo = styled.div``;
const Logo = styled.div``;
const NavItems = styled.div``;
const Navlink = styled.div``;
const ButtonContainer = styled.div``;

const Navbar = () => {
    return <Nav>
        <NavContainer>
            <NavLogo to="/">
                <Logo />
            </NavLogo>
            <NavItems>
                <Navlink to="/">Home</Navlink>
                <Navlink to="/dishes">Dishes</Navlink>
                <Navlink to="/orders">Orders</Navlink>
                <Navlink to="/contact">Contact</Navlink>
            </NavItems>
        </NavContainer>
    </Nav>;
}

export default Navbar;
