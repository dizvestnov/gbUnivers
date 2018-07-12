// class Site extends Container {
// 	constructor(className, child) {
// 		super(className);
// 		this.child = child;
// 	}
// 	render() {
// 		const element = document.createElement(this.tagName);
// 		element.id = `${this.className}\-${this.id}`;
// 		element.className = this.className;
// 		console.log(this.child !== undefined);
// 		if(this.child !== undefined) {
// 			element.append(this.child.render());
// 		}
// 		return element;
// 	}
// }
//
// class Header extends Site {
// 	constructor(className) {
// 		super(className);
// 		this.tagName = 'header';
// 		// this.child = child;
// 	}
// 	render() {
// 		super.render();
// 	}
// }
//
// function createSite() {
// 	const header = new Header('header');
//
// 	const mysite = new Site('site', header);
// 	document.body.appendChild(mysite.render());
// 	mysite.append(header.render());
// }
// createSite();