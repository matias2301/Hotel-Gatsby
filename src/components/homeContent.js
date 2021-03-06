import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const TextHome = styled.div`

  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  
  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  p {
    line-height: 1.5;
    margin-top: 2rem;
  }

`;

const HomeContent = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsPage(filter: {slug: {eq: "home"}}) {
        nodes {
          title
          subtitle
          content
          image {
            fluid {
                ...GatsbyDatoCmsFluid        
            }
          }
        }
      }
    }
  `)

  const { title, subtitle, content, image } = data.allDatoCmsPage.nodes[0];

  return (
    // <pre>{JSON.stringify(data, null, 4)}</pre>
    <>
      <h2 css={css`
        text-align: center;
        font-size: 4rem;
        margin-top: 4rem;  
      `}>{ subtitle }</h2>

      <TextHome>
        <p>{ content }</p>
        <Image fluid={ image.fluid }/>
      </TextHome>
    </>
  )
}

export default HomeContent