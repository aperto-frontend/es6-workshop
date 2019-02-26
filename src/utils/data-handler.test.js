import * as dataHandler from './data-handler';

const mockData = [];

function generateMockItem(idx) {
	return {
		females: Math.random(),
		males: Math.random(),
		age: idx,
		year: 1985,
		country: 'Germany'
	}
}

// Let's create a simple mock object
beforeAll(() => {
	for(let i = 0; i < 100; i++) {
		mockData.push(generateMockItem(i));
	}

});

describe('concatenate() function', () => {
	it('concatenates multiple arrays to one', () => {
		const mock = [
			[
				'item',
				'item2',
				'item3'
			],
			[
				'item4'
			],
			[
				'item3',
				'item5'
			]
		];
		const expected = [
			'item',
			'item2',
			'item3',
			'item4',
			'item3',
			'item5'
		];

		expect(dataHandler.concatenate(mock)).toEqual(expected)
	});
});

describe('removeDuplicates() function', () => {
	it('removes duplicate entries by using indexOf()', () => {
		const mock = [
			'item',
			'item2',
			'item3',
			'item4',
			'item3',
			'item5'
		];
		const expected = [
			'item',
			'item2',
			'item3',
			'item4',
			'item5'
		];

		expect(dataHandler.removeDuplicates(mock)).toEqual(expected)
	});
});

describe('filterByAge() function', () => {
	it('returns entities at the age from 20 until 40', () => {
		expect(dataHandler.filterByAge(mockData).length).toBe(21);
	});
});


describe('mapPopulation() function', () => {
	it('returns entities mapped to a new structure', () => {
		const expected = ['females', 'males', 'age'];
		const mock = [];

		mock.push(generateMockItem(0));

		expect(Object.keys(dataHandler.mapPopulation(mock)[0])).toEqual(expected);
	});
});

