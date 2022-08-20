const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name) {
	const matchingDrivers = array.filter(a => a.toLowerCase().includes(name.toLowerCase()));
	return matchingDrivers;
};

function fuzzyMatch(array, string) {
	const length = string.length;
	const matching = array.filter(b => b.slice(0, length) === string);
	return matching;
};

function matchName(array, name) {
	const matchingDriverName = array.filter(c => c.name === name);
	return matchingDriverName;
};
