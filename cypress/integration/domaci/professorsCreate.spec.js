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

describe("Professors-create professors", () => {
  it(" Create professor -valid data", () => {
    cy.get("#navbardrop").click();
    cy.get('[href="/create-professor"]').click();
    cy.get("#firstName").type(RandomComments());
    cy.get("#lastName").type(RandomComments());
    cy.get(".btn").contains("Add images").click();
    cy.get(".form-control").type(
      "https://cloudcherry.com/wp-content/uploads/2015/10/206customer-experience-lessons-postman.png"
    );
    cy.get(".btn").contains("Submit").click();
    cy.wait(1000);
  });

  it(" Create professor -without first name data", () => {
    cy.get("#navbardrop").click();
    cy.get('[href="/create-professor"]').click();
    cy.get("#lastName").type(RandomComments());
    cy.get(".btn").contains("Add images").click();
    cy.get(".form-control").type(
      "https://cloudcherry.com/wp-content/uploads/2015/10/206customer-experience-lessons-postman.png"
    );
    cy.get(".btn").contains("Submit").click();
    cy.wait(1000);
    cy.get("#firstName").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it(" Create professor -without last name data", () => {
    cy.get("#navbardrop").click();
    cy.get('[href="/create-professor"]').click();
    cy.get("#firstName").type(RandomComments());
    cy.get(".btn").contains("Add images").click();
    cy.get(".form-control").type(
      "https://cloudcherry.com/wp-content/uploads/2015/10/206customer-experience-lessons-postman.png"
    );
    cy.get(".btn").contains("Submit").click();
    cy.wait(1000);
    cy.get("#lastName").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it(" Create professor -without image Url data", () => {
    cy.get("#navbardrop").click();
    cy.get('[href="/create-professor"]').click();
    cy.get("#firstName").type(RandomComments());
    cy.get("#lastName").type(RandomComments());
    cy.get(".btn").contains("Add images").click();
    cy.get(".btn").contains("Submit").click();
    cy.wait(1000);
    cy.get(".form-control").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it(" Create professor -with random char in URL", () => {
    cy.get("#navbardrop").click();
    cy.get('[href="/create-professor"]').click();
    cy.get("#firstName").type("Boba123");
    cy.get("#lastName").type("Radoslav1");
    cy.get(".btn").contains("Add images").click();
    cy.get(".form-control").type(RandomComments());
    cy.get(".btn").contains("Submit").click();
    cy.wait(1000);
    cy.get(".form-control").click();
    cy.get(".form-control").type("Boba");
  });

  it(" Create professor -and try move image DOWN", () => {
    cy.get("#navbardrop").click();
    cy.get('[href="/create-professor"]').click();
    cy.get("#firstName").type(RandomComments());
    cy.get("#lastName").type(RandomComments());
    cy.get(".btn").contains("Add images").click();
    cy.get(".form-control").type(
      "https://cloudcherry.com/wp-content/uploads/2015/10/206customer-experience-lessons-postman.png"
    );
    cy.get(".btn").contains("Add images").click();
    cy.get(":nth-child(4) > div > .form-control").type(
      "https://i.ytimg.com/vi/5IpYOF4Hi6Q/hqdefault.jpg"
    );
    cy.get(".btn").contains("Move image down").click();
    cy.wait(2000);
    cy.get(".btn").contains("Submit").click();
    cy.wait(2000);
    cy.scrollTo("bottom");
    cy.wait(2000);
  });
  it(" Create professor -and try move image UP", () => {
    cy.get("#navbardrop").click();
    cy.get('[href="/create-professor"]').click();
    cy.get("#firstName").type(RandomComments());
    cy.get("#lastName").type(RandomComments());
    cy.get(".btn").contains("Add images").click();
    cy.get(".form-control").type(
      "https://cloudcherry.com/wp-content/uploads/2015/10/206customer-experience-lessons-postman.png"
    );
    cy.get(".btn").contains("Add images").click();
    cy.get(":nth-child(4) > div > .form-control").type(
      "https://i.ytimg.com/vi/5IpYOF4Hi6Q/hqdefault.jpg"
    );
    cy.get(".btn").contains("Move image up").click();
    cy.wait(2000);
    cy.get(".btn").contains("Submit").click();
    cy.wait(2000);
    cy.scrollTo("bottom");
    cy.wait(2000);
  });
});
