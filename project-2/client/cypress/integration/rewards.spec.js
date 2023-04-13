/// <reference types="cypress"/>

describe("Rewards dashboard", () => {
  beforeEach(() => {
    //also test server
    cy.visit("/rewards");
  });

  it("should display a list of rewards", () => {
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight");
  });

  it("should display a list of rewards with mock", () => {
    //intercepts http request with fixture
    cy.intercept("GET", "http://localhost:4000/rewards", {
      fixture: "rewards.json",
    });

    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight");
  });
});
