const {Given, Then} = require('@cucumber/cucumber');
const suitest = require('suitest-js-api');
const getTestId = require('../support/testEditorTests');
const {assert} = suitest;

/**
 * Application-specific element assertions
 */
Given('application is open', async () => {
	await assert.openApp();
	await assert.runTest(getTestId('Home page opened'));
});

Then('user waiting {float} second(s)', async (seconds) => {
	await assert.sleep(seconds * 1000);
});

Then('run Test Editor snippet {string}', async testName => {
	// Run pre-defined test editor test snippet
	await suitest.assert.runTest(getTestId(testName));
});
