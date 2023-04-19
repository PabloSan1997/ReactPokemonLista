import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provedor } from './contexto';

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(
    <Provedor>
         <App/>
    </Provedor>
);