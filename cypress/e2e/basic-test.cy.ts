import _ from "lodash";

import { selectors } from "../store/selectors";

describe("Basic test", () => {
  it("should visit the homepage", () => {
    cy.visit("/");
    cy.get(selectors.subtractButton).click();
    cy.get(selectors.currentCount).should("contain", "Count is -1");
  });
  it("should add and subtract numbers correctly", () => {
    cy.visit("/");

    const subtractButton = cy.get(selectors.subtractButton);
    const addButton = cy.get(selectors.addButton);

    _.times(10, () => {
      subtractButton.click();
    });
    cy.get(selectors.currentCount).should("contain", "Count is -10");

    _.times(10, () => {
      addButton.click();
    });
    cy.get(selectors.currentCount).should("contain", "Count is 0");
  });
});
