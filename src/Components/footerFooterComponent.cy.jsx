import React from 'react'
import FooterComponent from './footer'

describe('<FooterComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FooterComponent />)
  })
})