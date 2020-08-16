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
  cy.get(":nth-child(2) > tr > :nth-child(1)").eq(0).click();
});

describe("Delete Gradebook", () => {
  it(" Delete gradebook -validation", () => {
    cy.get('[width="200"] > :nth-child(1) > .btn')
      .contains("Delete Gradebook")
      .should("be.visible");
    cy.get('[width="200"] > :nth-child(1) > .btn')
      .contains("Delete Gradebook")
      .click();
    cy.wait(2000);
  });
});
