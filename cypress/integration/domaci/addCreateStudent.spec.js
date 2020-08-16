import { authPage } from "../../page_objects/login.page";
import { LOGINGRADE } from "../../fixtures/constants";
import { RandomProff } from "../../utils/index";

/// <reference types  = "cypress" />

beforeEach(() => {
  cy.visit("/");
  authPage.login(LOGINGRADE.EMAIL, LOGINGRADE.PASSWORD);
  cy.wait(2000);
  cy.get(".nav-link").contains("Gradebooks").click();
  cy.get(".form-control").type("ime");
  cy.get(".btn ").contains("Search").click();
  cy.get('a[href*="/single-gradebook/676"]').click();
});

it(" Add student to selected gradebook ", () => {
  cy.get(".btn").contains("Add Student").click();
  cy.get("#firstName").type("Novi");
  cy.get("#lastName").type("student");
  cy.get(".btn").contains("Add images").click();
  cy.get(".form-group > div > .form-control").type(
    "https://i.ytimg.com/vi/5IpYOF4Hi6Q/hqdefault.jpg"
  );
  cy.get(".btn").contains("Submit").click();
});

it(" Add another student on the same gradebook without picture", () => {
  cy.get(".btn").contains("Add Student").click();
  cy.get("#firstName").type("Drugi");
  cy.get("#lastName").type("student");
  cy.get(".btn").contains("Submit").click();
  cy.wait(1000);
});

it(" Add student without first name", () => {
  cy.get(".btn").contains("Add Student").click();
  cy.get("#lastName").type("student");
  cy.get(".btn").contains("Submit").click();
  cy.wait(1000);
});

it(" Add student without last name", () => {
  cy.get(".btn").contains("Add Student").click();
  cy.get("#firstName").type("student");
  cy.get(".btn").contains("Submit").click();
  cy.wait(1000);
});
