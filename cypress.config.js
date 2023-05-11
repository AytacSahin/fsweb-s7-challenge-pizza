const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // base url verip tüm cpress teslerin çalışacağı başlangıcı veriyorum:
    baseUrl: "http://localhost:3000/"
  },
});
