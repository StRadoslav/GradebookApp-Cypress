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

describe("Edit Gradebook", () => {
  it(" Edit gradebook -validation", () => {
    cy.get(":nth-child(2) > .btn")
      .contains("Edit Gradebook")
      .should("be.visible");
    cy.get(":nth-child(2) > .btn").contains("Edit Gradebook").click();
    cy.get("#title").should("be.visible");
    cy.get("#professor").should("be.visible");
  });

  it(" Edit gradebook -edit title", () => {
    cy.get(":nth-child(2) > .btn")
      .contains("Edit Gradebook")
      .should("be.visible");
    cy.get(":nth-child(2) > .btn").contains("Edit Gradebook").click();
    cy.get("#title").click();
    cy.get('[type="text"]').clear();
    cy.get("#title").type(RandomComments());
    cy.get(".btn").contains("Submit").click();
    cy.wait(1000);
  });

  it(" Edit gradebook -edit professor", () => {
    cy.get(":nth-child(2) > .btn")
      .contains("Edit Gradebook")
      .should("be.visible");
    cy.get(":nth-child(2) > .btn").contains("Edit Gradebook").click();

    //UKOLIKO NE PRONADJE POSTOJECI VALUE PROFESORA PUSTITI PONOVO TEST!!!!!!!!!!!!
    function userID_Alpha() {
      var text = "";
      var possible = "12334567890";
      for (var i = 0; i < 3; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
    cy.get("#professor").contains("Professor").click({ force: true });
    cy.wait(1000);
    cy.get("select").select(userID_Alpha(), { force: true }).invoke("val");
    cy.get(".btn").contains("Submit").click();
    cy.wait(1000);
  });

  it(" Edit gradebook -without title", () => {
    cy.get(":nth-child(2) > .btn")
      .contains("Edit Gradebook")
      .should("be.visible");
    cy.get(":nth-child(2) > .btn").contains("Edit Gradebook").click();
    cy.get("#title").click();
    cy.get('[type="text"]').clear();

    cy.get(".btn").contains("Submit").click();
    cy.wait(1000);
  });
});
