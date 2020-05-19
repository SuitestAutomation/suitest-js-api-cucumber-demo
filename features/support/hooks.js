const {Before, AfterAll} = require('cucumber');
const suitest = require('suitest-js-api');

Before(async () => {
	// Before each scenario - start new Suitest test
	await suitest.startTest();
});

AfterAll(async () => {
	// Let Suitest know that we ended our testing, so that it kill connection to server and process could end naturally
	await suitest.closeSession();
});
