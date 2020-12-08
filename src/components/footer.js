import React from "react";
import NavBar from "./navBar";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const LinkHome = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
`;

const Footer = ({title}) => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer
            css={css`
                background-color:rgba(44,62,80);
                margin-top: 5rem;
                padding: 1rem;
            `}
            >

            <div css={css`
                max-width: 1200px;
                margin: 0 auto;

                @media (min-width: 768px) {
                display: flex;
                align-items: center;
                justify-content: space-between;
                }
            `}
            >
                <NavBar />

                <LinkHome
                    to='/'
                >
                    <h1>Gatsby Hotel</h1>
                </LinkHome>        
            </div>

            </footer>
            <p css={css`
                text-align: center;
                color: #fff;
                background-color: rgb(33,44,55);
                margin: 0;
                padding: 1rem;
            `}            
            >
                {title}. All rights reserved {year} &copy;
            </p>
        </>
    );
}
  
export default Footer