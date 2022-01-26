describe('user can calculate BMI value based on individual measure', () => {

    describe('by filling in the form and clicking the button', () => {
        describe('as Roberto', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3474') // ARRANGE
            // ACT
            cy.get('[data-cy=weight-input]').type('110')
            cy.get('[data-cy=height-input]').type('1.87')
            cy.get('[data-cy=calculate-button]').click()
        });

            it('is expected to display his BMI value', () => {
                // ASSERT
                cy.get('[data-cy=results]').should('contain.text', "Your BMI value is 31.5")
        });
    });    
    });
  
});
