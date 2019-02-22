import Base from './base';
import tpl from '../templates/template';

export default class RenderComponent extends Base {
	constructor({el, text, color}) {
		super(el);

		this.text = text;
		this.color = color;
	}

	render({text, imgs}) {
		this.element.innerHTML = tpl({
			text: text || this.text,
			color: this.color,
			imgs
		});
	}
}
