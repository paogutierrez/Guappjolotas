import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route} 
    from 'react-router-dom';
import { Bebidas} from '../containers/Bebidas';
import { Guajolotas } from '../containers/Guajolotas';
import { Tamales} from '../Containers/Tamales';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/Bebidas" element={<Bebidas/>}/>
                    <Route exact path="/Tamales" element={<Tamales/>}/>
                    <Route exact path="/Guapjolotas" element={<Guajolotas/>}/>
                </Routes>
            </Router>
        </div>
    )
}
