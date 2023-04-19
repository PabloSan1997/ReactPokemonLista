import React from 'react'
import { Menu } from './Menu'
import { useNavigate, useParams } from 'react-router-dom'
import "../styles/contenedor.scss";
import { useContexto } from '../contexto';
import { guardado } from '../contexto/local';

export function Contenedor() {
  const { id } = useParams();
  const { setLimi, lista, limitePokemones } = useContexto();
  React.useEffect(
    () => {
      if (Number(id)<limitePokemones) {
        guardado.guardar(id);
        const numero = Number(id) * 10;
        setLimi(numero)
      }
    }
    , [id]);
  return (
    <>
      <div className="contenedor">
        {Number(id)<limitePokemones?(
          <div className="derecha">
          {lista.map(ele =>
          (
            <Lista key={`id${ele.id}`} nombre={ele.name} url={ele.foto} />
          )
          )}
        </div>
        ):<p>Not found 404</p>}
      </div>
      <Menu />
    </>
  )
}

function Lista({ nombre, url }) {
  const navegar = useNavigate();
  const { presentar } = useContexto();
  return (
    <div className="caja" onClick={() => navegar(`/stats/${nombre}`)}>
      <img src={url} alt={nombre} className="foto" />
      <h2>{presentar(nombre)}</h2>
    </div>
  );
}
