/// <reference types="Cypress" />

import { watchFile } from "fs";

context('编辑商户', () => {
  const href = 'http://localhost:3000'
  // sign in
  before(() =>{
    cy.login();
  })

  it('编辑商户页面', () => {
    cy.visit(`${href}/seller/edit`)
    cy.get('.login');
  })

})
