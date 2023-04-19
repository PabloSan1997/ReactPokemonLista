import React from 'react';
import { useListaPokemon } from '../Api/listaPokemon';
import { usePersonaje } from '../Api/personajePokemon';

const Contexto = React.createContext();

export function Provedor({children}){
    const limitePokemones = 110;
    const {lista, setLimi} = useListaPokemon();
    const {setNombres, info} = usePersonaje();
    const presentar = (nose) => {
        if (!!nose) {
          const cadena = nose.split("");
          cadena[0] = cadena[0].toLocaleUpperCase();
          return cadena.join("");
        }
        return nose;
      }
    return (
        <Contexto.Provider
            value={
                {
                   limitePokemones ,
                   setLimi,
                   lista,
                   setNombres,
                   info,
                   presentar
                }
            }
        >
            {children}
        </Contexto.Provider>
    );
}

export const useContexto = () =>{
    const auth = React.useContext(Contexto);
    return auth;
}