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

(function createSite() {
	const mySite = new Site('div', 'site', mybody).render();
	const header = new Header('header', 'site-header', mySite).render();
	const headerContainer = new Header('div', 'container header', header).render();

	const headerLogo = new Header('div', 'header-logo logo', headerContainer).render();
	const headerLogoLink = new Header('a', 'logo-link', headerLogo, '/').render();
	const headerLogoLinkImg = new Header('img', 'logo-link', headerLogoLink, 'assets/json-server/img/icons/logo/logo.png', 'Logo').render();

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
	const basket = new LiveCart('div', 'basket', headerBasket, 'liveCart').render();
	// basket.id = ;
	const basketItem = new Header('div', 'basket-item', basket).render();
	const basketItemCount = new Header('div', 'basket-count', basketItem).render();
	const basketItemCountSpan = new Header('span', 'count', basketItemCount).render();
	const basketItemImg = new Header('img', 'basket-img', basketItem, 'assets/json-server/img/icons/basket/basket@2x.png', 'Basket').render();
	const basketDropdown = new Header('div', 'basket-dropdown', basket).render();
	const basketDropdownLiveCart = new LiveCart('div', 'basket-liveCart', basketDropdown, 'cart').render();
	// basketDropdownLiveCart.id = ;
	const basketDropdownBtn = new Header('div', 'basket-buttons', basketDropdown).render();
	const basketDropdownBtnLinks = [
		new Header('a', 'basket-link', basketDropdownBtn, '#', 'checkout').render(),
		new Header('a', 'basket-link', basketDropdownBtn, '#', 'go to cart').render()
	];

	const headerMyAcc = new Header('div', 'header-myAcc', headerItem[1]).render();
	const myAcc = new MyAcc('div', 'myAcc btn-dropdown', headerMyAcc, 'myAcc', 'My account').render();
	const myAccDropdown = new Header('div', 'myAcc-dropdown', myAcc).render();
	const myAccDropdownItem = new Header('div', 'myAcc-item', myAccDropdown).render();
	const myAccDropdownItemLink = [
		new Header('a', 'myAcc-link', myAccDropdownItem, '#', 'Sign in').render(),
		new Header('a', 'myAcc-link', myAccDropdownItem, '#', 'Sign out').render(),
		new Header('a', 'myAcc-link', myAccDropdownItem, '#', 'Sign up').render()
	];
})();