import React from 'react';
import { Link } from "gatsby";
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem; 
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const NavLink = styled(Link)`
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    padding: 1rem;
    margin-right: 1rem;
    text-decoration: none;
    
    &:last-of-type {
        margin-right: 0;
    };
    &.pagina-actual {
        border-bottom: 2px solid #fff;
    };
    
    /* &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    } */
`;

const NavBar = () => {
    return (
        <Nav>
            <NavLink
                to={'/'}
                activeClassName="pagina-actual"
            >Home</NavLink>
            <NavLink
                to={'/about'}
                activeClassName="pagina-actual"
            >About</NavLink>
        </Nav>
    )
}

export default NavBar
