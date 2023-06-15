import React from 'react'
import Maps from './maps'

describe('<Maps />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Maps />)
  })
})