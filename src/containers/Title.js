import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';


const Titled = () => {
  return <Container><Title>Nada como una Guajolota para empezar el dìa</Title></Container>
  ;
};



const Title = styled.h2`
text-align: center;
`;

export default Titled;
