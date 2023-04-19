import React from 'react'
import { Menu } from './Menu'
import { useNavigate, useParams } from 'react-router-dom'
import "../styles/contenedor.scss";
import { useContexto } from '../contexto';

export function Contenedor() {
  const { id } = useParams();
  const { setLimi, lista } = useContexto();
  React.useEffect(
    () => {
      const numero = Number(id) * 10;

      setLimi(numero)
    }
    , [id]);
  return (
    <>
      <div className="contenedor">
        <div className="derecha">
          {lista.map(ele =>
          (
            <Lista key={`id${ele.id}`} nombre={ele.name} url={ele.foto} />
          )
          )}
        </div>
      </div>
      <Menu />
    </>
  )
}

function Lista({ nombre, url }) {
  const navegar = useNavigate();

  const presentar = () => {
    if (!!nombre) {
      const cadena = nombre.split("");
      cadena[0] = cadena[0].toLocaleUpperCase();
      return cadena.join("");
    }
    return nombre;
  }

  return (
    <div className="caja" onClick={()=>navegar(`/stats/${nombre}`)}>
      <img src={url} alt={nombre} className="foto" />
      <h2>{presentar()}</h2>
    </div>
  );
}
