/// <reference types="cypress" />

describe("Accomplishment dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should showcase error if information is missing", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My first accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I wrote my first cypress test"
    );
    cy.get(".Accomplishment-btn").click();
    cy.contains("Complete the items above to continue").should("be.visible");
  });

  it("should display validation component if all information is input", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My first accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I wrote my first cypress test"
    );
    cy.get("[type='checkbox").click();
    cy.get(".Accomplishment-btn").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
  });

  it("should return back to dashboard when 'Go Back' btn is clicked and input field should be reset to empty", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My first accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I wrote my first cypress test"
    );
    cy.get("[type='checkbox").click();
    cy.get(".Accomplishment-btn").click();
    cy.contains("Go Back").click();
    cy.get(".Accomplishment-btn").should("be.visible");
    cy.get("[data-cy='accomplishment-title-input']").should("have.value", "");
    cy.get("[data-cy='accomplishment-input']").should("have.value", "");
    cy.get("[type='checkbox").should("not.be.checked");
  });
});
