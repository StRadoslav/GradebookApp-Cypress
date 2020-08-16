import { authPage } from "../../page_objects/login.page";
import { LOGINGRADE } from "../../fixtures/constants";
import { RandomProff } from "../../utils/index";

/// <reference types  = "cypress" />

beforeEach(() => {
  cy.visit("/");
  authPage.login(LOGINGRADE.EMAIL, LOGINGRADE.PASSWORD);
  cy.wait(2000);
});

describe("Filter on Home  Page", () => {
  it(" filtered by  existing Gradebook name", () => {
    cy.get(".form-control").click();
    cy.get(".form-control").type("River");
    cy.get(".btn").contains("Search").click();
    cy.wait(2000);
  });

  it(" filtered by only one character", () => {
    cy.get(".form-control").click();
    cy.get(".form-control").type("R");
    cy.get(".btn").contains("Search").click();
    cy.wait(2000);
  });

  it(" filtered not existing gradebook", () => {
    cy.get(".form-control").click();
    cy.get(".form-control").type("nepostoji");
    cy.get(".btn").contains("Search").click();
    cy.get("p")
      .contains("There is no more gradebooks in base, try again")
      .should("have.text", "There is no more gradebooks in base, try again");
    cy.get("tr > :nth-child(1)").should("be.visible");
    cy.get("tr > :nth-child(2)").should("be.visible");
    cy.get("tr > :nth-child(3)").should("be.visible");
    cy.wait(2000);
  });
});
