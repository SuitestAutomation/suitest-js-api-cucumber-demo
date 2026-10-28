const {AfterAll} = require('@cucumber/cucumber');
const suitest = require('suitest-js-api');

AfterAll(async () => {
	// Let Suitest know that we ended our testing, so that it kill connection to server and process could end naturally
	await suitest.closeSession();
});
