import SignIn from "./SignIn"
describe('SignIn Page', () => {
  it('Should render the SignIn page using cy.mount', () => {
    
    // Monta el componente SignIn en el DOM
    cy.mount(
      <SignIn />      
    );

    // Verifica que el componente SignIn se haya renderizado correctamente
    cy.get('[data-cy=sign-in-page]').should('exist');

    // Puedes realizar más verificaciones según tus necesidades
  });

  it('Should submit the form using cy.mount', () => {
    cy.visit('/');
    
    // Monta el componente SignIn en el DOM
    cy.mount(
      `<div data-cy="sign-in-page">
        <SignIn />
      </div>`
    );

  });

  // Agrega más pruebas según sea necesario
});