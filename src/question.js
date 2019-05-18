import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

const Img = styled.img`
  ${width}
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Root = styled.div([], {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    
});

const Title = styled.span`
  font-size: 50px;
  ${space}
`;


const ImgCenter = styled.div`
  display: flex;
`



export const Question = () => (
  <Root>
    <Center>
      <ImgCenter>
        <Img src={"./img/duv.gif"} width={800}/>
      </ImgCenter>
      <Title mt={20}>Some question ?</Title>
    </Center>
  </Root>
);