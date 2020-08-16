import { authPage } from "../../page_objects/login.page";
import { LOGINGRADE } from "../../fixtures/constants";
import { RandomProff } from "../../utils/index";
import { RandomComments } from "../../utils/index";
import { RandomValues } from "../../utils/index";

/// <reference types  = "cypress" />

beforeEach(() => {
  cy.visit("/");
  authPage.login(LOGINGRADE.EMAIL, LOGINGRADE.PASSWORD);
  cy.wait(2000);
});

describe("Professors-all professors", () => {
  it(" All Professors Page -validate ", () => {
    cy.get("#navbardrop").click();
    cy.get('[href="/all-professors"]').click();
    cy.get(".h3").should("have.text", "All Professors Page");
    cy.get(".input").should("have.text", "Professors filter");
    cy.scrollTo("bottom");
  });

  it(" All Professors Page -find existing professors by first name ", () => {
    cy.get("#navbardrop").click();
    cy.get('[href="/all-professors"]').click();
    cy.get(".h3").should("have.text", "All Professors Page");
    cy.get(".input").should("have.text", "Professors filter");
    cy.get(".form-control").click();
    cy.get(".form-control").type("Boba");
    cy.wait(1000);
    cy.scrollTo("bottom");
  });

  it(" All Professors Page -find existing professors by last name ", () => {
    cy.get("#navbardrop").click();
    cy.get('[href="/all-professors"]').click();
    cy.get(".h3").should("have.text", "All Professors Page");
    cy.get(".input").should("have.text", "Professors filter");
    cy.get(".form-control").click();
    cy.get(".form-control").type("Stojsin");
    cy.wait(1000);
    cy.scrollTo("bottom");
  });
});
