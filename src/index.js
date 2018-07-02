import say from './modules/greetings.module';
import BaseComponent from './modules/base-component';
import TemplateComponent from './modules/template-component';

const base = new BaseComponent('app');

const templateComponent = new TemplateComponent({
	element: 'app',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias deserunt ea, fuga fugit quibusdam ratione rerum? Autem cum doloribus eligendi eos nam nobis ratione. Asperiores consequatur deleniti reprehenderit voluptas.'
}, 'test', 'whatever', 'and-so-on');

templateComponent.render();