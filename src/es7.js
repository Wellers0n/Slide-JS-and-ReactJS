import React from 'react';
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  color: white;
  margin-top: 15px;
`;

const Container = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  `;

const Img = styled.img`
  max-width: 600px;
`;


export const Es7 = () => (
  <Container>     
    <h4>Link to an article of callbacks, async/await and promise</h4>
    <Img src={'./img/es7.jpeg'}/>
    <Link  target="_blank" href="https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298">Article medium</Link>
  </Container>
);
