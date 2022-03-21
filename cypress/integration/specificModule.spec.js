describe("Module Service Design", () => {
  beforeEach(() => {
    cy.visit("/module/service-design-und-nutzer:innenorientierung/");
  });

  it("renders the hero correctly", () => {
    cy.findByRole("link", {
      name: /Alle Module/i,
    }).should("exist");
    cy.findByRole("heading", {
      name: /Modul Nummer: .+/i,
    }).should("exist");
    cy.findByRole("heading", {
      name: /Service Design und Nutzer:innen­orientierung/i,
    }).should("exist");
    cy.findByRole("img", {
      name: /Menschen, die sich an den Händen fassen und Objekte austauschen/i,
    }).should("exist");
  });

  it("renders the hypotheses", () => {
    cy.findByRole("listitem", {
      name: /Hypothese 1/i,
    }).should("exist");
    cy.findByRole("img", {
      name: /Aufzählungspunkt Illustration/i,
    }).should("exist");
  });

  it("renders the content", () => {
    cy.get("p").should("have.length.gte", 1);
  });

  it("renders the example", () => {
    cy.findByRole("heading", {
      name: /Beispiel/i,
    }).should("exist");
    cy.findByRole("img", {
      name: /Drei Hände und ein Smartphone/i,
    }).should("exist");
    cy.findByText(
      /Sicher kennen viele Menschen das Bild einer Behörde.+/i
    ).should("exist");
  });

  it("renders the methods", () => {
    cy.findByRole("heading", {
      name: /Customer Journey/i,
    }).should("exist");
    cy.findByRole("link", {
      name: /Arbeitsblatt downloaden/i,
    }).should("exist");
    cy.findByText(/Im ersten Modul arbeiten wir mit der Methode .+/i).should(
      "exist"
    );
  });

  it("renders the further links", () => {
    cy.findByRole("heading", {
      name: /Weiterführende Links/i,
    }).should("exist");
    cy.findAllByRole("link", {
      name: /Link zu: .+/i,
    }).should("have.length.gte", 1);
  });
});
