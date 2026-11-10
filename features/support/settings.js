const {setDefaultTimeout, defineParameterType} = require('@cucumber/cucumber');
const {COMP} = require('suitest-js-api');

const comparatorMap = {
	greater: COMP.GREATER,
	less: COMP.LESSER,
};

defineParameterType({
	name: 'comparator',
	regexp: /greater|less/,
	transformer(value) {
		return comparatorMap[value];
	},
});

setDefaultTimeout(60 * 1000);
