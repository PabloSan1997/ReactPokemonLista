import React from 'react'

import { useContexto } from '../contexto';
import { useParams } from 'react-router-dom';

export function Stats() {
  const {info, setNombres} = useContexto();
  const {personaje} = useParams();
  React.useEffect(()=>{
    setNombres(personaje);
  },[personaje]);
  return (
    <div className="stats">
      {info.length>0?
      <Vista nombre={info[0].name} urlImagen={info[0].sprites.other.home.front_default}/>
      :null}
    </div>
  );
}
function Vista({nombre, urlImagen}){
  console.log(urlImagen);
  return (
    <>
      <img src={urlImagen} alt="" className="imagen" />
    </>
  );
}