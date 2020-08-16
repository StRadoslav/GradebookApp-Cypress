import { authPage } from "../../page_objects/login.page";
import { LOGINGRADE } from "../../fixtures/constants";
import { RandomProff } from "../../utils/index";

/// <reference types  = "cypress" />

//UKOLIKO NE PRONADJE POSTOJECI VALUE OD PROFESORA PUSTITI PONOVO TEST!!!!!!!!!!!!
//TRAZI RANDOM

beforeEach(() => {
  cy.visit("/");
  authPage.login(LOGINGRADE.EMAIL, LOGINGRADE.PASSWORD);
  cy.wait(2000);
});

describe("Create Gradebook module - only with exist proffesor value", () => {
  it(" Create gradebook", () => {
    cy.get(".nav-link").contains("Create Gradebook").click();
    cy.get("#title").type("imeGradebooka");

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
    cy.wait(1000);
    cy.get(".btn ").contains("Submit").click();
    cy.wait(1000);
  });

  it(" Create gradebook", () => {
    cy.get(".nav-link").contains("Create Gradebook").click();
    cy.get("#title").type("imeGradebooka");
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
    cy.wait(1000);
    cy.get(".btn ").contains("Submit").click();
    cy.wait(1000);
  });

  it(" Create Gradebook -without title ", () => {
    cy.get(".nav-link").contains("Create Gradebook").click();
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
    cy.wait(1000);
    cy.get(".btn ").contains("Submit").click();
    cy.wait(1000);
    cy.get("div>.alert > :nth-child(1)>div").should(
      "have.text",
      '\n          [\n  "The title field is required."\n]\n        '
    );
  });

  it(" Create gradebook - without professor", () => {
    cy.get(".nav-link").contains("Create Gradebook").click();
    cy.get("#title").type("imeGradebooka");
    cy.wait(1000);
    cy.get(".btn ").contains("Submit").click();
    cy.wait(1000);
    cy.get("div>.alert > :nth-child(1)>div").should(
      "have.text",
      '\n          [\n  "The professor id field is required."\n]\n        '
    );
  });

  it(" Create gradebook - without title and professor ", () => {
    cy.get(".nav-link").contains("Create Gradebook").click();
    cy.get(".btn ").contains("Submit").click();
    cy.wait(1000);
    cy.get("div>.alert > :nth-child(1)>div").should(
      "have.text",
      '\n          [\n  "The title field is required."\n]\n        \n          [\n  "The professor id field is required."\n]\n        '
    );
  });
});
