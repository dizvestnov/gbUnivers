class LiveCart extends Site {
	constructor(tagName, className, parent, id) {
		super(tagName, className, parent);
		this.id = id;
	}
	render() {
		const element = document.createElement(this.tagName);
		element.id = this.id;
		element.className = this.className;
		if(this.parent !== undefined) {
			this.parent.append(element);
		}
		return element;
	}
}