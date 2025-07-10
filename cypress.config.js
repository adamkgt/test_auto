const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/my_tests/**/*.cy.{js,ts}", // ścieżka do testów
    setupNodeEvents(on, config) {
      // opcjonalne eventy/pluginy
    },
  },
});
