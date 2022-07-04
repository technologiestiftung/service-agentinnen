describe("Modules Overview", () => {
  beforeEach(() => {
    cy.visit("/module");
  });

  it("renders the main heading", () => {
    cy.findByRole("heading", {
      name: /Die 8 Module/i,
    }).should("exist");
  });

  it("renders the hero blocks", () => {
    cy.findAllByRole("listitem", {
      name: /Komponent des Moduls/i,
    }).should("have.length", 4);
  });

  it("renders links to all modules", () => {
    cy.findAllByRole("link", {
      name: /Link zu den Modul .+/i,
    }).should("have.length", 8);
  });

  it("renders images of to all modules", () => {
    const main = cy.findByRole("list", {
      name: /Liste aller Module/i,
    });
    main.findAllByRole("img").should("have.length", 8);
  });
});
