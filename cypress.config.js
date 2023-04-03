const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    allureReuseAfterSpec: true,
  },

  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
  chromeWebSecurity: false,
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 200000,
  trashAssetsBeforeRuns: true,
  headless: true,
});