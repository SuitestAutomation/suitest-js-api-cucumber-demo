const suitest = require('suitest-js-api');
const {When} = require('@cucumber/cucumber');

/**
 * Remote Control
 */
When('user presses {word}', async key => {
	// Press remote control button
	await suitest.press(key.toUpperCase());
});

When('user presses {word} exactly {int} times', async (key, times) => {
	// Press remote control button several times
	await suitest.press(key.toUpperCase()).repeat(times);
});

When('user presses {word} every {int} seconds exactly {int} times', async (key, sec, times) => {
	// Press remote control button several times
	await suitest.press(key.toUpperCase()).repeat(times).interval(sec * 1000);
});
