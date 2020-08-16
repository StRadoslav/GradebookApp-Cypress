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

describe("My Gradebook -not existing", () => {
  it(" My gradebook -add student to not existing my gradebook", () => {
    cy.get('[href="/my-gradebook/690"]').contains("My Gradebook").click();
    cy.get(":nth-child(1) > .btn").contains("Add Student").click();
    cy.get(".alert").should(
      "have.text",
      "\n      Message: You dont have your diary. Please first set your own diary\n    "
    );
  });

  it(" My gradebook -add comment to not existing my gradebook", () => {
    cy.get('[href="/my-gradebook/690"]').contains("My Gradebook").click();
    cy.get(".form-control").click();
    cy.get(".form-control").type(RandomComments());
    cy.get(":nth-child(5) > .btn").click();
    cy.get(".alert").should(
      "have.text",
      "\n      Message: You dont have your diary. Please first set your own diary\n    "
    );
  });
});
