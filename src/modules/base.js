export default class Base {
	constructor(el) {
		this.element = Base.$(el);

		this.addClassToEl();
	}

	static $(el) {
		return document.getElementById(el);
	}

	addClassToEl() {
		this.element.classList.add('is-initialized');
	}
}