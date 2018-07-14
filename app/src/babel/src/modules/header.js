class Header extends Site {
	constructor(tagName, className, parent, link, alt) {
		super(tagName, className, parent, link, alt);
	}
	render() {
		const element = document.createElement(this.tagName);
		element.id = `header-${this.id}`;
		element.className = this.className;
		if(this.parent !== undefined) {
			this.parent.appendChild(element);
		}
		if(this.tagName === 'a') {
			element.href = this.link;
			element.textContent = this.alt;
		}
		if(this.tagName === 'img') {
			element.src = this.link;
			element.alt = this.alt;
		}
		return element;
	}
}

class Form extends Header {
	constructor(tagName, className,	parent, type, formId, placeholder, label) {
		super(tagName, className, parent);
		this.type = type;
		this.formId = formId;
		this.placeholder = placeholder;
		this.label = label;
	}
	init() {
		if(this.formId !== undefined){
			return this.inputRender();
		} else {
			const button = this.render();
			button.type = this.type;
			return button;
		}
	}
	inputRender(){
		const element = document.createElement(this.tagName);
		element.className = this.className;
		this.parent.appendChild(element);
		element.type = this.type;
		element.id = this.formId;
		element.placeholder = this.placeholder;
		element.setAttribute('aria-label', this.label);
		return element;
	}
}