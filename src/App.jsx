import React from 'react';
import { Header } from './components/Header';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Stats } from './components/Stats';
import { Contenedor } from './components/Contenedor';
import { guardado } from './contexto/local';
import "./styles/app.scss";
import "./styles/contenedor.scss";
import "./styles/header.scss";
import "./styles/menu.scss";
import "./styles/stats.scss";
export function App(){
    return(
        <HashRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Navigate to={"/menu/"+guardado.leer()}/>}/>
                <Route path='/menu' element={<Navigate to={"/menu/"+guardado.leer()}/>}/>
                <Route path='/menu/:id' element={<Contenedor/>}/>
                <Route path='/stats/:personaje' element={<Stats/>}/>
            </Routes>
        </HashRouter>
    );
}