import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from '@emotion/styled';

const Image = () => {

    const ImageBackground = styled(BackgroundImage)`
        height: 700px;
    `;

    const TextImage = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient( to top rgba(34,49,63,.8),rgba(34,49,63,.8) );
        color: #fff;
        height: 100%;

        h1 {
            font-size: 4rem;
            margin: 0%;

            @media(min-width: 992px){
                font-size: 5.8rem;
            }
        };
        p {
            font-size: 2rem;
            
            @media(min-width: 992px){
                font-size: 2.6rem;
            }
        }
    `;

    const { image } = useStaticQuery(graphql`
        query {
            image: file( relativePath: { eq:"8.jpg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (        
        <ImageBackground
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <TextImage>
                <h1>Welcome to Gatsby Hotel</h1>
                <p>The best hotel to your holiday</p>
            </TextImage>
        </ImageBackground>
    );
}

export default Image
