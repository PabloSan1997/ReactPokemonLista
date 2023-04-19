
export const guardado  = {
    guardar:(num)=>{
        localStorage.seccion=num
    },
    leer:()=>{
        if(!localStorage.seccion){
            localStorage.seccion=0;
        }
        return Number(localStorage.seccion)
    }
}