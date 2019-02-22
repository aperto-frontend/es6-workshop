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
	text: 'Images Container'
});
const quotesComponent = new RenderComponent({
	el: 'quotes',
	text: 'Quotes Container'
});

const renderTplComponent = () => {
	fetch('https://api.chucknorris.io/jokes/random')
		.then(res => res.json())
		.then(data => tplComponent.render({ text: data.value }));

	tplComponent.render();
};

const renderImageComponent = () => {
	Promise.all([
		loadImage('https://placeimg.com/640/480/any'),
		loadImage('https://placeimg.com/1280/780/any')
	])
		.then((imgs) => {
			imageComponent.render({
				imgs
			});
		})
		.catch()
};


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

		document.body.append(`${dataset1.value}`);

	})
	.catch(e => e);


renderImageComponent();
renderTplComponent();








