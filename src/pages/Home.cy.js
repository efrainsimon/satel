import React from 'react';
import Home from './Home'; // Ajusta la ruta según tu estructura de archivos
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase.config'; // Ajusta la ruta según tu estructura de archivos

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Montar el componente Home con Cypress
const mountHomeComponent = () => {
  // Antes de montar el componente, asegúrate de que Firebase esté inicializado
  cy.mount(<Home/>);
};
//cambiar **
describe('Home Page Render Test', () => {
  it('Should render the home page', () => {
    mountHomeComponent();    
    // Puedes agregar más aserciones según la estructura específica de tu componente
  });
});