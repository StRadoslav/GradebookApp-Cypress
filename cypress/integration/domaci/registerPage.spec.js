/// <reference types  = "cypress" />

beforeEach(() => {
  cy.visit("/");
  cy.get(".nav-link").contains("Register").click();
});

describe("Register Page", () => {
  it(" Register page test -validation", () => {
    cy.get("h2").should("have.text", "Register");
    cy.get("#firstName").should("be.visible");
    cy.get("#lastName").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get("#passwordConfirmation").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get("#termsAndConditions").should("be.visible");
    cy.get(":nth-child(7) > label").should(
      "have.text",
      "Accept terms and conditions"
    );
    cy.get(".btn").should("be.visible");
  });

  it("Register page -valid data and default checked Accept terms", () => {
    cy.get("h2").should("have.text", "Register");
    cy.get("#firstName").type("Radoslav1");
    cy.get("#lastName").type("Stojsin");
    cy.get("#password").type("Radoslav1234");
    cy.get("#passwordConfirmation").type("Radoslav1234");
    cy.get("#email").type("Radoslav@gmail.com");
    cy.get(".btn").contains("Submit").click();
    cy.wait(3000);
  });

  it("Register page -empty First Name", () => {
    cy.get("h2").should("have.text", "Register");
    cy.get("#lastName").type("Stojsin");
    cy.get("#password").type("Radoslav1234");
    cy.get("#passwordConfirmation").type("Radoslav1234");
    cy.get("#email").type("Radoslav@gmail.com");
    cy.get(".btn").contains("Submit").click();
    cy.wait(3000);
    cy.get("#firstName").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it("Register page -empty Last Name", () => {
    cy.get("h2").should("have.text", "Register");
    cy.get("#firstName").type("Radoslav1");
    cy.get("#password").type("Radoslav1234");
    cy.get("#passwordConfirmation").type("Radoslav1234");
    cy.get("#email").type("Radoslav@gmail.com");
    cy.get(".btn").contains("Submit").click();
    cy.wait(3000);
    cy.get("#lastName").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it("Register page -empty password field", () => {
    cy.get("h2").should("have.text", "Register");
    cy.get("#firstName").type("Radoslav1");
    cy.get("#lastName").type("Stojsin");
    cy.get("#passwordConfirmation").type("Radoslav1234");
    cy.get("#email").type("Radoslav@gmail.com");
    cy.get(".btn").contains("Submit").click();
    cy.wait(3000);
    cy.get("#password").then(($input) => {
      // expect($alert.validationMessage).to.eq(
      //  "Your passwords doesn`t match, try again, please");
    });
  });

  it("Register page -empty password confirmation  field", () => {
    cy.get("h2").should("have.text", "Register");
    cy.get("#firstName").type("Radoslav1");
    cy.get("#lastName").type("Stojsin");
    cy.get("#password").type("Radoslav1234");
    cy.get("#email").type("Radoslav@gmail.com");
    cy.get(".btn").contains("Submit").click();
    cy.wait(3000);
    cy.get("#password").then(($input) => {
      // expect($alert.validationMessage).to.eq(
      //  "Your passwords doesn`t match, try again, please" );
    });
  });

  it("Register page - password invalid format", () => {
    cy.get("h2").should("have.text", "Register");
    cy.get("#firstName").type("Radoslav1");
    cy.get("#lastName").type("Stojsin");
    cy.get("#password").type("Rad12");
    cy.get("#passwordConfirmation").type("Rad12");
    cy.get("#email").type("Radoslav@gmail.com");
    cy.get(".btn").contains("Submit").click();
    cy.wait(3000);
    cy.get("#password").then(($input) => {
      expect($input[0].validationMessage).to.eq(
        "Please match the requested format."
      );
    });
  });

  it("Register page -empty email  field", () => {
    cy.get("h2").should("have.text", "Register");
    cy.get("#firstName").type("Radoslav1");
    cy.get("#lastName").type("Stojsin");
    cy.get("#password").type("Radoslav1234");
    cy.get("#passwordConfirmation").type("Radoslav1234");
    cy.get(".btn").contains("Submit").click();
    cy.wait(3000);
    cy.get("#email").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it("Register page - uncheked Accept ", () => {
    cy.get("h2").should("have.text", "Register");
    cy.get("#firstName").type("Radoslav1");
    cy.get("#lastName").type("Stojsin");
    cy.get("#password").type("Radoslav1234");
    cy.get("#passwordConfirmation").type("Radoslav1234");
    cy.get("#email").type("Radoslav@gmail.com");
    cy.get("#termsAndConditions").click();
    cy.get(".btn").contains("Submit").click();
    cy.wait(3000);
  });
});
