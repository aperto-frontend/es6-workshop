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
		return Promise.all(this.imgs.map(img => loadImage(img)));
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
