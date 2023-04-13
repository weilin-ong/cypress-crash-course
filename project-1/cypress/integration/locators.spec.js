/// <reference types="cypress" />

describe("locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("should locate elements with get", () => {
    //get all elements by tag name
    cy.get("button");

    //get all elements by class name
    cy.get(".btn-with-class");

    //get all elements with specific unique classes
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

    //get all elements by id
    cy.get("#btn-with-id");

    //get all elements by specific attribute
    cy.get("[type='submit']");

    //get all elements by tag name AND class
    cy.get("button.Elements-btn");

    //get all elements by tag name AND class AND id
    cy.get("button.Elements-btn#btn-with-id");

    //get all elements by tag name AND class AND type attribute
    cy.get("button.Elements-btn[type='submit']");

    //get all elements with specific data test id
    cy.get("[data-cy='btn-id-1']");
    //after configure in support/commands
    cy.getByTestId("btn-id-1");
  });

  it("should locate elements with contains", () => {
    //get element by text
    cy.contains("Unique Text");

    //when text is not unique, it finds the first matched element
    cy.contains("Not Unique Text");

    //with selector
    cy.contains("[type='submit']", "Not Unique Text");
    cy.contains("form", "Not Unique Text");
    cy.get("[type='submit']").contains("Not Unique Text");
  });

  it("should locate elements with find", () => {
    cy.get("#form-1").find(".btn-1");
  });
});
