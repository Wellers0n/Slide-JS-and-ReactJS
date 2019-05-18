import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

import { Root } from './Intro';

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #FDAA4C;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: #57ad50;
  ${space} 
`;

const ImgCenter = styled.div`
  display: flex;
`



export const Cover = () => (
  <Root>
    <Center>
      <ImgCenter>
        <Img src={"./img/js.png"}  width={200}  /> 
        <Img src={"./img/react.png"} width={200}/>
      </ImgCenter>
      <Title mt={20}>Intro to javascript and reactJS</Title>
      <Subtitle mt={20}>Go</Subtitle>
      <MeName mt={100}>Wellerson</MeName>
    </Center>
  </Root>
);
