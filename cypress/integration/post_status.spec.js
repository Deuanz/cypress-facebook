context("Facebook", () => {
  describe("Test Post status on Facebook", () => {
    it("Post status", () => {
      cy.visit("web.facebook.com/");
      cy.get('[data-testid="royal_email"]').type("{USERNAME}");
      cy.get('[data-testid="royal_pass"]').type("{PASSWORD}");
      cy.get('[data-testid="royal_login_button"]').click();
      cy.contains("What's on your mind, Rattanawadi?").click();
    });
  });
});
