// File contains element-related assertion
const {Then} = require('@cucumber/cucumber');
const suitest = require('suitest-js-api');
const {assert, PROP} = suitest;

const nodeAssert = require('assert');

const getSelector = require('../support/selectors');

const DEFAULT_TIMEOUT = 5000;

Then('{string} should be selected', async (selector) => {
	await assert.element(getSelector(selector)).matches(PROP.TEXT_COLOR, 'rgb(52, 191, 228)');
});

Then('video position should be {comparator} then {float} second(s)', async (comparator, seconds) => {
	await assert.video().matches(PROP.VIDEO_POSITION, seconds * 1000, comparator);
});

Then('element {string} exists', async selector => {
	// Make sure that element exists in DOM
	await assert.element(getSelector(selector)).exists().timeout(DEFAULT_TIMEOUT);
});

Then('element {string} does not exist', async selector => {
	// Make sure that element exists in DOM
	await assert.element(getSelector(selector)).doesNot().exist().timeout(DEFAULT_TIMEOUT);
});

Then('element {string} has property {string} equals {string}', async (selector, property, value) => {
	// Make sure that element property equals to given value
	await assert.element(getSelector(selector)).matches(property, value, suitest.COMP.EQUAL).timeout(DEFAULT_TIMEOUT);
});

Then('video is playing', async () => {
	// Wait for 10s max for video to start playback
	await assert.video().isPlaying().timeout(10000);
	// Make sure it's playing for at least 2s
	await assert.video().matches(suitest.PROP.VIDEO_POSITION, 2000, suitest.COMP.EQUAL_GREATER).timeout(3000);
});

Then('video is paused or stopped', async () => {
	// Example of custom assertion
	const video = await suitest.video();
	const videoStateIsCorrect = [suitest.VIDEO_STATE.PAUSED, suitest.VIDEO_STATE.STOPPED].includes(video.videoState);

	nodeAssert(videoStateIsCorrect, `Video state is ${video.videoState}, but expected PAUSED or STOPPED`);
});
