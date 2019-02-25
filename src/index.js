import say from './modules/greetings.module';
import BaseComponent from './modules/base-component';
import TemplateComponent from './modules/template-component';
import loadImage from './modules/image-loader';

const base = new BaseComponent('app');

const templateComponent = new TemplateComponent({
	element: 'app',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias deserunt ea, fuga fugit quibusdam ratione rerum? Autem cum doloribus eligendi eos nam nobis ratione. Asperiores consequatur deleniti reprehenderit voluptas.'
}, 'test', 'whatever', 'and-so-on');

templateComponent.render();

loadImage('https://placeimg.com/640/480/any', () => {
	loadImage('https://placeimg.com/720/320/any', () => {
		loadImage('https://placeimg.com/1920/1080/any', () => {
			console.log('All images loaded!');
		})
	})
});
