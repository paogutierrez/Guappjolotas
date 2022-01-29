import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components'


 function App (){
    return(
        <BrowserRouter>
            <Header className="header">
                <nav>
                <Link className="link" to="/Guajolotas">Guajolotas</Link>
                <Link className="link" to="/Bebidas">Bebidas</Link>
                <Link className="link" to="/Tamales">Tamales</Link> 
                </nav>
            </Header>
        </BrowserRouter>
    )    
}

export const Header = styled.header
`

`


export default App;