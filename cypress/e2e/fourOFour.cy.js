describe("Module Service Design", () => {
  beforeEach(() => {
    cy.visit("/404.html");
  });

  it("renders the main heading", () => {
    cy.findByRole("heading", {
      name: /Seite nicht gefunden/i,
    }).should("exist");
  });

  it("includes a link to the home page", () => {
    cy.findByRole("link", {
      name: /Zur Startseite/i,
    }).should("exist");
  });
});
