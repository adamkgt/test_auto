const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// cypress.config.js
module.exports = {
  e2e: {
    integrationFolder: "test_auto",  // ścieżka do folderu z testami
  },
}

// cypress.config.js
module.exports = {
  e2e: {
    specPattern: "cypress/my_tests/**/*.js", // Ścieżka do testów
  },
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/my_tests/**/*.feature"
  }
});