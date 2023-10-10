import type { Options } from '@wdio/types'
import { browser } from '@wdio/globals'

export const config: Options.Testrunner = {
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 2,
    capabilities: [
        {
          maxInstances: 1,
          browserName: 'chrome',
          'goog:chromeOptions': {
            args: [
              '--no-sandbox',
              '--headless'
            ],
          },
        },
      ],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    framework: 'mocha',
    reporters: [
        'spec',
        [
          'allure',
          {
            outputDir: './allure-results',
            disableWebdriverScreenshotsReporting: false,
            disableWebdriverStepsReporting: true,
          },
        ],
      ],
    //
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.saveScreenshot(`./test/screenshots/${test.title}.png`);
        }
    },
}
