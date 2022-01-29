
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

import React from 'react';
const Buscador = () => {
  return <div>
    <br></br>
  <ContainerBuscar>
  
                <BarraBuscar >
                <FontAwesomeIcon icon={faSearch}/>
                    <Busqueda type="text" placeholder="Sabor de guajolota, bebida..."/>
                    
                </BarraBuscar>
            </ContainerBuscar> 

  </div>;
};

const ContainerBuscar = styled.div`
display:flex;
gap: 5px;
justify-content: center;
`;

const BarraBuscar = styled.div`
    font-size: 20px; 
    border-radius: 20px;
    background: #D5D8DC; 
    padding: 10px;
    display:flex;
    width:100%;
    max-width:500px;
`;
const Busqueda = styled.input`
background: #D5D8DC; 
padding-left:10px;
font-size: 15px;
width: 100%;
outline: none;
  border: 0;
`;



export default Buscador;
