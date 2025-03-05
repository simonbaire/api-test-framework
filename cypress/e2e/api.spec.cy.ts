// api-test-framework/cypress/integration/api.spec.ts
describe('API Tests', () => {
  it('should return a list of users', () => {
    cy.request('GET', '/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });
});
