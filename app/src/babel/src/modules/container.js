class Container {
	constructor(className) {
		this.tagName = "div";
		this.className = className;
		this.id = Math.ceil(Math.random() * 30000);
	}

	render() {
		const element = document.createElement(this.tagName);
		element.id = this.id;
		element.className = this.className;
		return element;
	}
}