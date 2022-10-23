import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// function App(props) {

//     return (
//         <h1>¡{props.saludo}, {props.nombre}!</h1>
//     )
// }

// function withSaludo(WrappedComponent) {
//     return function WrappedComponentWithSaludo(saludo) {
//         return function ComponenteDeVerdad(props) {
//             return (
//                 <React.Fragment>
//                     <WrappedComponent {...props} saludo={saludo}/>
//                     <p>Estamos acompañando al WrappedComponent</p>  
//                 </React.Fragment>
//             )
//         }
//     }
// }

// const AppWithSaludo = withSaludo(App)("Wenas");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />

    // <AppWithSaludo nombre="Leyi"/>
);

