import { authPage } from "../../page_objects/login.page";
import { LOGINGRADE } from "../../fixtures/constants";
import { RandomProff } from "../../utils/index";
import { RandomComments } from "../../utils/index";

/// <reference types  = "cypress" />

beforeEach(() => {
  cy.visit("/");
  authPage.login(LOGINGRADE.EMAIL, LOGINGRADE.PASSWORD);
  cy.wait(2000);
  cy.get(":nth-child(2) > tr > :nth-child(1)").eq(0).click();
});
describe("Comments on gradebook", () => {
  it(" Add comments to selected gradebook ", () => {
    cy.get(".form-control").click();
    cy.get(".form-control").type("komentar12345");
    cy.get(".btn").contains("Submit Comment").click();
    cy.wait(1000);
  });

  it("Add 5 comments", () => {
    for (let i = 0; i < 5; i++) {
      cy.get(".form-control").click();
      cy.get(".form-control").type(RandomComments());
      cy.get(".btn").contains("Submit Comment").click();
      cy.wait(2000);
    }
  });

  it("Delete Comment", () => {
    cy.get(".comments-box > :nth-child(2) > div > .btn").click();
  });

  it("Delete all  comments", () => {
    for (let i = 0; i < 100; i++) {
      cy.get(".comments-box > :nth-child(2) > div > .btn")
        .contains("Delete")
        .should("be.visible");
      cy.get(".comments-box > :nth-child(2) > div > .btn").click();
      cy.wait(2000);
    }
  });
});
