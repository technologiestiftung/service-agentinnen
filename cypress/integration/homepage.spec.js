describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the main heading", () => {
    cy.findByRole("heading", {
      name: /In 8 Modulen zur agilen Behördenarbeit/i,
    }).should("exist");
  });

  it("renders a link to the module overview", () => {
    cy.findByRole("link", { name: /Direkt zu den Modulen/i }).should("exist");
  });
});
