import React from 'react'
import "../styles/stats.scss";
import { useContexto } from '../contexto';
import { useNavigate, useParams } from 'react-router-dom';
import { guardado } from '../contexto/local';

export function Stats() {
  const { info, setNombres } = useContexto();
  const { personaje } = useParams();
  const navergar = useNavigate();
  React.useEffect(() => {
    setNombres(personaje);
  }, [personaje]);
  return (
    <div className="stats">
      <div className="areaBoton">
        <button className='regresar' onClick={() => navergar("/menu/" + guardado.leer())}>{"<--"}</button>
      </div>
      <div className="infor">
        {info.length > 0 ?
          <Vista
            nombre={info[0].name}
            urlImagen={info[0].sprites.other.home.front_default}
            abilities={info[0].abilities}
            peso={info[0].weight}
            altura={info[0].height}
            species={info[0].species.name}
            tipo={info[0].types}
            moves={info[0].moves}
          />
          : null}
      </div>
    </div>
  );
}
function Vista({ nombre, urlImagen, abilities, peso, altura, species, tipo, moves }) {
  console.log(moves);
  const { presentar } = useContexto();
  const tipoTexto = tipo.map(ele=>presentar(ele.type.name)).join(", ");
  const habilidadesTexto = abilities.map(ele=>presentar(ele.ability.name)).join(", ");
  return (
    <>
      <div className="area-imagen">
        <img src={urlImagen} alt={nombre} className="imagen" />
      </div>
      <div className="areatexto">
        <h2>{presentar(nombre)}</h2>
        <div className="tabla">
          <div className="fila">
            <div className="col col1">Peso</div>
            <div className="col col2">{peso}</div>
          </div>
          <div className="fila">
            <div className="col col1">Altura</div>
            <div className="col col2">{altura}</div>
          </div>
          <div className="fila">
            <div className="col col1">Especie</div>
            <div className="col col2">{presentar(species)}</div>
          </div>
          <div className="fila">
            <div className="col col1">Tipo</div>
            <div className="col col2">{tipoTexto}</div>
          </div>
          <div className="fila">
            <div className="col col1">Habilidades</div>
            <div className="col col2">{habilidadesTexto}</div>
          </div>
        </div>
      </div>
    </>
  );
}