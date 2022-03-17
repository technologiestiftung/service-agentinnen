describe("Module Service Design", () => {
  beforeEach(() => {
    cy.visit("/module/service-design-und-nutzerorientierung/");
  });

  it("renders the main heading", () => {
    cy.findByRole("heading", {
      name: /Service Design und Nutzerorientierung/i,
    }).should("exist");
  });
});
