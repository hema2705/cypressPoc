const { defineConfig } = require('cypress')
// const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  // Start--Bthe reporter options
  reporter: 'cypress-mochawesome-reporter',
  // reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportFilename:'datetime-report',
    timestamp: "longDate",
  },
  //End--the reporter options
  e2e: {
    screenshotOnRunFailure:true,
    baseUrl:'https://shop.demoqa.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
})