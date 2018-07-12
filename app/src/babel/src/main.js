

window.onload = function () {
	const mybody = document.getElementsByTagName('body')[0];
	const site = document
		.getElementsByClassName('site')[0];
	const bdIpAddress = 'http://localhost';
	//= modules/container.js
	//= modules/site.js
	//= modules/cart.js
	//= modules/topnav.js
	//= modules/botnav.js
	//= modules/footer.js
	//= modules/eventListener.js
	class Site extends Container {
		constructor(tagName, className, parent) {
			super(className);
			this.tagName = tagName;
			this.parent = parent;
			console.log(document.getElementById(this.id));
		}
		render() {
			const element = document.createElement(this.tagName);
			element.id = `${this.id}`;
			element.className = this.className;
			if(this.parent !== undefined) {
				this.parent.append(element);
			}
			// if(this.child !== undefined) {
			// 	element.append(this.child.render());
			// }
			return element;
		}
	}

	class Header extends Site {
		constructor(tagName, className, parent, link, alt) {
			super(tagName, className, parent);
			this.link = link;
			this.alt = alt;
		}
		init() {
			if(this.tagName === 'a') {
				this.render().href = this.link;
			}
			if(this.tagName === 'img') {

				this.render().src = this.link;
				// document.getElementById(this.id)
			}
		}
	}

	function createSite() {

		const mySite = new Site('div', 'site', mybody).render();
		const header = new Header('header', 'site-header', mySite).render();
		const headerContainer = new Header('div', 'container header', header).render();
		const headerLogo = new Header('div', 'header-logo logo', headerContainer).render();
		const headerLogoLink = new Header('a', 'logo-link', headerLogo, '/').init();
		const headerLogoLinkImg = new Header('img', 'logo-link', headerLogo, 'assets/img/icons/logo/logo.png', 'Logo').init();
		const headerItems = new Header('div', 'header-items', headerContainer).render();
		const headerItem = [
			new Header('div', 'header-item', headerItems).render(),
			new Header('div', 'header-item', headerItems).render()
		];
		const headerSearch = new Header('div', 'header-search search', headerItem[0]).render();
		const headerSearchItem = [
			new Header('div', 'search-item', headerSearch).render(),
			new Header('div', 'search-item', headerSearch).render()
		];
		const headerSearchForm = new Header('form', 'search-form form', headerSearchItem[1]).render();
		const headerBasket = new Header('div', 'header-basket', headerItem[1]).render();
		const headerMyAcc = new Header('div', 'header-myAcc', headerItem[1]).render();
	}
	createSite();
};