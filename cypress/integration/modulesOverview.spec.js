describe("Modules Overview", () => {
  beforeEach(() => {
    cy.visit("/module");
  });

  it("renders the main heading", () => {
    cy.findByRole("heading", {
      name: /Die 8 Module/i,
    }).should("exist");
  });
});
