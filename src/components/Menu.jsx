import React from 'react';
import { NavLink} from 'react-router-dom';
import { useContexto } from '../contexto';
export function Menu() {
    const {limitePokemones} = useContexto();
    const [limites, setLimites]=React.useState({inicio:0, fin:10});
    const generarArreglo = ()=>{
      const arreglo = [];
      for(let i=limites.inicio;i<=limites.fin;i++){
        arreglo[i]=i;
      }
      return arreglo;
    }
    const moverDerecha =()=>{
      if(limites.fin<limitePokemones){
        const limite1 = limites.inicio+10;
        const limite2 = limites.fin+10; 
        setLimites({inicio:limite1,fin:limite2});
      }
    }
    const moverIzquierda =()=>{
      if(limites.inicio>0){
        const limite1 = limites.inicio-10;
        const limite2 = limites.fin-10; 
        setLimites({inicio:limite1,fin:limite2});
      }
    }
  return (
    <div className="menu">
      <div className="mover mover1" onClick={moverIzquierda}>{"<"}</div>
      <nav>
        <ul>
         {generarArreglo().map(ele=>
          (<Lista key={ele} num={ele}/>)
          )
          }
        </ul>
      </nav>
      <div className="mover mover2" onClick={moverDerecha}>{">"}</div>
    </div>
  )
}
function Lista({num}){
  return (
    <li>
      <NavLink to={"/menu/"+num} className={(parame)=>parame.isActive?"activar":null} >{num}</NavLink>
    </li>
  );
}
