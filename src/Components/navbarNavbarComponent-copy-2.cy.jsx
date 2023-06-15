import React from 'react'
import NavbarComponent from './navbar'

describe('<NavbarComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavbarComponent />)
  })
})