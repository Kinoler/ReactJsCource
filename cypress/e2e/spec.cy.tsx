import SearchForm from '../../src/components/SearchForm';
import { mount } from 'cypress/react'

describe('template spec', () => {
  beforeEach(() => {
    var initialSearch = "None";
    const onSearch = cy.stub().as('onSearch');
    mount(<SearchForm initialSearch={initialSearch} onSearch={onSearch}/>);
  })

  it('passes', () => {
    cy.get(`None`).type('fake@email.com')

    cy.get(`input`).should('have.value', 'Nonefake@email.com')
  })
})