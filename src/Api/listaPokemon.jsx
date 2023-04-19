import axios from "axios";
import React from "react";


export function useListaPokemon(){
    const [limi, setLimi] = React.useState(0);
    const [lista, setLista] = React.useState([]);
    React.useEffect(()=>{
        (async ()=>{
            const solicitud = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${limi}`);
            const datos = await solicitud.data.results;
            const masDatos = await Promise.all(datos.map(
                async (ele)=> {
                   const mira =  await axios.get(ele.url)
                   const conseguir = await mira.data;
                   const objeto = {
                    name:ele.name,
                    id:conseguir.id,
                    foto:conseguir.sprites.front_default
                   }
                   return objeto;
                }
            )); 
            setLista(masDatos);
        })();
    },[limi]);
    return {lista, setLimi};
}