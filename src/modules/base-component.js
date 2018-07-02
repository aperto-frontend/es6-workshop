class BaseComponent {
	constructor(element) {
		this.element = BaseComponent.selectElement(element);

		this.addClass('is-selected');
	}

	static selectElement(el) {
		return document.getElementById(el);
	}

	addClass(cl) {
		this.element.classList.add(cl);
	}
}


export default BaseComponent;