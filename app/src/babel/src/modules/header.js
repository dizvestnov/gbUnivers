class Header extends Site {
	constructor(tagName, className, parent, link, alt) {
		super(tagName, className, parent, link, alt);
	}
	render() {
		const element = document.createElement(this.tagName);
		element.id = `${this.id}`;
		element.className = this.className;
		if(this.parent !== undefined) {
			this.parent.append(element);
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