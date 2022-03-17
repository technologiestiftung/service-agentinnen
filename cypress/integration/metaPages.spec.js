describe("Meta Pages", () => {
  it("has a sitemap", () => {
    cy.request("/sitemap.xml");
  });

  it("has a robots.txt", () => {
    cy.request("/robots.txt");
  });

  it("has a manifest", () => {
    cy.request("/manifest.webmanifest");
  });

  it("has the right icons", () => {
    cy.request("/favicon.ico");
    cy.request("/icon.svg");
    cy.request("/icon.png");
    cy.request("/icon-180.png");
    cy.request("/icon-192.png");
    cy.request("/icon-512.png");
  });
});
