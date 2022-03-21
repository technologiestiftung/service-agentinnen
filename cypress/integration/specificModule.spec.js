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
      name: /Service Design und Nutzer:innenorientierung/i,
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
    cy.findByText(/Sicher kennen viele Menschen das Bild einer Behörden.+/i).should("exist");
  });

  it("renders the methods", () => {
    cy.findAllByRole("heading", {
      name: /Customer Journey/i,
    }).should("have.length", 2);
    cy.findAllByRole("link", {
      name: /Arbeitsblatt downloaden/i,
    }).should("have.length", 2);
    cy.findAllByText(/Im ersten Modul arbeiten wir mit der Methode .+/i).should("have.length", 3);
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
