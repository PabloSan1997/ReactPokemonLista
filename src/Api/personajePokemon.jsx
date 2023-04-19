import axios from 'axios';
import React from 'react';

export function usePersonaje() {
    const [info, setInfo] = React.useState([]);
    const [nombres, setNombres] = React.useState("kricketune");
    React.useEffect(()=>{
        (async ()=>{
            setInfo([]);
            const datos = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombres}`);
            const data =await datos.data;
            setInfo([data]);
        })();
    },[nombres]);
    return { setNombres, info, nombres};
}