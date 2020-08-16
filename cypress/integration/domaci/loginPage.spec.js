import { LOGINGRADE } from "../../fixtures/constants";
import { RandomEmail } from "../../utils/index";

/// <reference types  = "cypress" />

beforeEach(() => {
  cy.visit("/");
});

describe("Login Page", () => {
  it(" Login page test -validation", () => {
    cy.get(".form-signin-heading").should("have.text", "Please login");
    cy.get(".form-control").should("be.visible");
    cy.get(".mt-3").should("be.visible");
    cy.get(".btn ").contains("Login").should("be.visible");
  });

  it(" Login page test -register user data", () => {
    cy.get(".form-signin-heading").should("have.text", "Please login");
    cy.get('[type="text"]').type(LOGINGRADE.EMAIL);
    cy.get(".form-control.mt-3").type(LOGINGRADE.PASSWORD);
    cy.get(".btn ").contains("Login").click();
    cy.wait(3000);
    cy.location("href").should(
      "eq",
      "https://gradebook.vivifyideas.com/gradebooks"
    );
  });

  it(" Login page test -with empty email field", () => {
    cy.get(".form-signin-heading").should("have.text", "Please login");
    cy.get(".form-control.mt-3").type(LOGINGRADE.PASSWORD);
    cy.get(".btn ").contains("Login").click();
    cy.get('[type="text"]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it(" Login page test -with empty password field", () => {
    cy.get(".form-signin-heading").should("have.text", "Please login");
    cy.get('[type="text"]').type(LOGINGRADE.EMAIL);
    cy.get(".btn ").contains("Login").click();
    cy.get(".form-control.mt-3").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it(" Login page test -with empty email and password field", () => {
    cy.get(".form-signin-heading").should("have.text", "Please login");
    cy.get(".btn ").contains("Login").click();
    cy.get('[type = "text"]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it(" Login page test - with not registered Email ", () => {
    cy.get(".form-signin-heading").should("have.text", "Please login");
    cy.get('[type="text"]').type(`${RandomEmail()}`);
    cy.get(".form-control.mt-3").type(LOGINGRADE.PASSWORD);
    cy.get(".btn ").contains("Login").click();
  });

  it(" Login page test - with not registered Password ", () => {
    cy.get(".form-signin-heading").should("have.text", "Please login");
    cy.get('[type="text"]').type(LOGINGRADE.EMAIL);
    cy.get(".form-control.mt-3").type("PASSWORD123");
    cy.get(".btn ").contains("Login").click();
  });
});
