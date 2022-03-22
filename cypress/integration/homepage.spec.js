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
    cy.findByRole("link", { name: /Link zu alle Module/i }).should("exist");
  });

  it("renders a link for more infos", () => {
    cy.findByRole("link", { name: /Link zum nächsten Abschnitt: Die Einführung/i }).should("exist");
  });

  it("links to the modules overview", () => {
    cy.findByRole("link", { name: /Link zu alle Module/i }).click();
    cy.findByRole("heading", {
      name: /Die 8 Module/i,
    }).should("exist");
  });
});

describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("rendres the website logo", () => {
    cy.findByRole("link", { name: /Hauptseite der Webseite/i }).should("exist");
  });

  it("rendres a link to all modules", () => {
    cy.findByRole("link", {
      name: /Übersichtseite aller 8 Module zur agilen Behördenarbeit/i,
    }).should("exist");
  });

  it("rendres a link to citylab", () => {
    cy.findByRole("link", {
      name: /Logo vom Projekt Citylab Berlin, der Technologiestiftung Berlin/i,
    }).should("exist");
  });
});

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the support call to action", () => {
    cy.findByRole("heading", {
      name: /Unter­stützungbenötigt/i,
    }).should("exist");
    cy.findByRole("img", {
      name: /Abstrakte Illustration mit Fragezeichen in der Mitte/i,
    }).should("exist");
    cy.findByRole("link", {
      name: /Kontakltieren Sie uns per E-Mail an info@citylab-berlin.org/i,
    }).should("exist");
  });

  it("renders the logo links in the footer", () => {
    const footer = cy.get("footer:last-of-type");
    footer
      .findByRole("link", {
        name: /Logo vom Projekt CityLab Berlin/i,
      })
      .should("exist");
    cy.findByRole("link", {
      name: /Logo der Technologiestiftung Berlin/i,
    }).should("exist");
    cy.findByRole("link", {
      name: /Logo von Berlin. Die Regierende Bürgermeisterin von Berlin - Senatskanzlei/i,
    }).should("exist");
  });

  it("renders the legal footer", () => {
    cy.findByText(/Illustrationen © Lea Scheidt/i).should("exist");
    cy.findByRole("link", {
      name: /CC BY/i,
    }).should("exist");
    cy.findByText(/© 2022 Technologiestiftung Berlin/i).should("exist");
    cy.findByRole("link", {
      name: /Kontakt/i,
    }).should("exist");
    cy.findByRole("link", {
      name: /Quellcode/i,
    }).should("exist");
    cy.findByRole("link", {
      name: /Probleme der Barrierfreiheit melden/i,
    }).should("exist");
    cy.findByRole("link", {
      name: /Datenschutz/i,
    }).should("exist");
    cy.findByRole("link", {
      name: /Impressum/i,
    }).should("exist");
  });
});
