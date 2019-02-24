import Base from './base';
import tpl from '../templates/template';
import loadImage from './image-loader';

export default class RenderComponent extends Base {
	constructor({el, text, color, imgs = []}) {
		super(el);

		this.text = text;
		this.color = color;
		this.imgs = imgs;
	}

	fetchImages() {
		const imgPromise = [];

		this.imgs.forEach(img => {
			imgPromise.push(loadImage(img));
		});

		return Promise.all(imgPromise);
	}

	async render({text, imgs} = {}) {
		const images = imgs || await this.fetchImages();

		this.element.innerHTML = tpl({
			text: text || this.text,
			color: this.color,
			imgs: images
		});
	}
}
