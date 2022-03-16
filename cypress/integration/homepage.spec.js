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

  it("renders a link for more infos", () => {
    cy.findByRole("link", { name: /Mehr Informationen/i }).should("exist");
  });

  it("links to the modules overview", () => {
    cy.findByRole("link", { name: /Direkt zu den Modulen/i }).click();
    cy.findByRole("heading", {
      name: /Die 8 Module/i,
    }).should("exist");
  });
});
