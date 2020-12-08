import React from "react";
import Layout from "../components/Layout";
import { css } from '@emotion/core';
import Image from "../components/image";
import HomeContent from "../components/homeContent";
import PreviewRoom from "../components/previewRoom";
import useRooms from "../hooks/useRooms";
import styled from '@emotion/styled';

const IndexPage = () => {

  const ListRooms = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media(min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3rem;
    }
  `;

  const rooms = useRooms();

  return(
    <Layout>
      <Image />
      <HomeContent />

      <h2 css={css`
            text-align: center;
            margin-top: 5rem;
            font-size: 3rem;
          `}
      >
        Our Rooms
      </h2>
      
      <ListRooms>
        { rooms.map( room => (
            <PreviewRoom
              key={room.id}
              room={room}
            />
          ))
        }
      </ListRooms>
    </Layout>
  )
}

export default IndexPage