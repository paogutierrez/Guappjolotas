import React  from 'react';
import {Url} from '../helpers/Url';

export function Guajolotas(){
  return (
    <ul>
        {Url.map((guajolotas) => {
          return <p>{guajolotas.nombre}</p>
          })}
    </ul>
  )
}