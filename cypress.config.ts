// api-test-framework/cypress.config.ts
export default {
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    supportFile: 'cypress/support/e2e.ts',
    video: true,
    reporter: "mocha-junit-reporter",
    reporterOptions: {
      mochaFile: "cypress/reports/test-results-[hash].xml"
    }
  }
};