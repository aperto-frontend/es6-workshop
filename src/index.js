import say from './modules/greeting.module';
import Base from './modules/base';
import RenderComponent from './modules/render-component';
import loadImage from './modules/image-loader';

// Simple greeting module
console.log(say());

const app = new Base('app');
const tplComponent = new RenderComponent(
	{
		el: 'app',
		text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.',
		color: '#000'
	}
);
const imageComponent = new RenderComponent({
	el: 'images',
	text: 'Images Container',
	color: 'blue',
	imgs: [
		'https://placeimg.com/640/480/any',
		'https://placeimg.com/1280/780/any'
	]
});
const quotesComponent = new RenderComponent({
	el: 'quotes',
	text: 'Quotes Container'
});


Promise.all([
	loadImage('https://placeimg.com/640/480/any'),
	loadImage('https://placeimg.com/1280/780/any')
])
	.then(([ img1, img2 ]) => {
		const fetch1 = fetch('https://api.chucknorris.io/jokes/random')
			.then(res => res.json());
		const fetch2 = fetch('https://api.chucknorris.io/jokes/random')
			.then(res => res.json());

		return Promise.all([
			fetch1,
			fetch2
		])
	})
	.then(([ dataset1, dataset2 ]) => {
		quotesComponent.render({
			text: dataset2.value
		});
	})
	.catch(e => e);


imageComponent.render();


fetch('http://api.population.io:80/1.0/population/1980/Germany/')
	.then(res => res.json())
	.then((data) => {
		const test = data
			.filter(item => item.age >= 20 && item.age <= 40)
			.map(({ females, males, age }) => {
				return {
					females,
					males,
					age
				}
			});

		console.log('test: ', test);
	});


async function getPopulation() {
	const res = await fetch('http://api.population.io:80/1.0/population/1980/Germany/');
	const data = await res.json();
	const filteredAndMapped = data
		.map(({ females, males, age }) => {
			return {
				females,
				males,
				age
			}
		}).filter(item => item.age >= 20 && item.age <= 40);


	console.log('filteredAndMapped: ', filteredAndMapped);
}

// getPopulation();

function fetchMyStuff(arr) {
	return arr.reduce((acc, item) => {
		return acc.then((results) => {
			return fetch(item)
				.then(res => res.json())
				.then((data) => [...results, data]);
		})

	}, Promise.resolve([]));
}

async function fetchMyStuffWithAsync(arr) {
	return arr.reduce(async (acc, item) => {
		const currentAccData = await acc;
		const currentItemRes = await fetch(item);
		const currentItemData = await currentItemRes.json();

		return [...currentAccData, currentItemData];
	}, Promise.resolve([]));
}

fetchMyStuff([
	'http://api.population.io:80/1.0/population/1980/Germany/',
	'http://api.population.io:80/1.0/population/1985/Germany/'
]).then(data => {
	console.log('data: ', data);
});


fetchMyStuffWithAsync([
	'http://api.population.io:80/1.0/population/1980/Germany/',
	'http://api.population.io:80/1.0/population/1985/Germany/'
]).then(data => {
	console.log('data async: ', data);
});



// getPopulation();
