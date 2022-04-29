/* global cy */

describe('Pokedex', () => {
  it('should work properly', () => {
    cy.visit('http://localhost:3000')
    cy.contains('pikachu')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})
