class Site extends Container {
	constructor(tagName, className, parent, link, alt) {
		super(className);
		this.tagName = tagName;
		this.parent = parent;
		this.link = link;
		this.alt = alt;
	}
	render() {
		const element = document.createElement(this.tagName);
		element.id = this.id;
		element.className = this.className;
		if(this.parent !== undefined) {
			this.parent.insertBefore(element, this.parent.firstChild);
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