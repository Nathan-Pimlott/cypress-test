import _ from "lodash";

describe("Basic test", () => {
  it("should visit the homepage", () => {
    cy.visit("/");
    cy.get("button[id=subtract-button]").click();
    cy.get("p[id=current-count]").should("contain", "Count is -1");
  });
  it("should add and subtract numbers correctly", () => {
    cy.visit("/");

    const subtractButton = cy.get("button[id=subtract-button]");
    const addButton = cy.get("button[id=add-button]");

    _.times(10, () => {
      subtractButton.click();
    });
    cy.get("p[id=current-count]").should("contain", "Count is -10");

    _.times(10, () => {
      addButton.click();
    });
    cy.get("p[id=current-count]").should("contain", "Count is 0");
  });
});
