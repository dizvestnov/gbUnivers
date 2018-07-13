class MyAcc {
	constructor(tagName, className, parent, id, text) {
		this.tagName = tagName;
		this.className = className;
		this.parent = parent;
		this.id = id;
		this.text = text;
	}
	render() {
		const element = document.createElement(this.tagName);
		element.id = this.id;
		element.className = this.className;
		element.textContent = this.text;
		if(this.parent !== undefined) {
			this.parent.append(element);
		}
		return element;
	}
}