

window.onload = function () {
	const mybody = document.getElementsByTagName('body')[0];
	const site = document
		.getElementsByClassName('site')[0];
	const bdIpAddress = 'http://localhost';

	//= modules/container.js
	//= modules/site.js

	//= modules/header.js
	//= modules/livecart.js
	//= modules/myacc.js
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
		const basketItem = [
			new Header('div', 'basket-item', basket).render(),
			new LiveCart('div', 'basket-item', basket, 'liveCartEvent').render()
		];
		const basketItemCount = new Header('div', 'basket-count', basketItem[0]).render();
		const basketItemCountSpan = new Header('span', 'count', basketItemCount).render();
		const basketItemImg = new Header('img', 'basket-img', basketItem[0], 'assets/json-server/img/icons/basket/basket@2x.png', 'Basket').render();
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

	//= modules/cart.js
	//= modules/topnav.js
	//= modules/botnav.js
	//= modules/footer.js
	class EventListener {
		constructor() {
			this.listenEvents = "click";
			this.eventBlock = ".site";
			this.eventElement = ".siteEvent";
			this.eventHiddenElement = ".siteEvent-element";
			this.status = {
				displayed: false,
				prevDisplayedElement: "",
				displayedElement: ""
			};
		}

		listener() {
			$(this.eventBlock)
				.on(this.listenEvents, event => this.eventElementChecker(event.target));
		}

		eventElementChecker(e) {
			if (this.eventElement === `#${e.id}`
				||
				this.eventElement === `.${e.className}`
				||
				this.eventElement === `${e.tagName}`
			) return this.showHide($(this.eventHiddenElement));
			else
				return this.hideElement($(this.eventHiddenElement));
		}

		showHide(arg) {
			if (this.status.displayed  === false) {
				return this.showElement(arg);
			}
			else return this.hideElement(arg);
		}

		showElement(element) {
			this.status.displayed = true;
			this.status.displayedElement = element;
			return $(element).show();

		}

		hideElement(element) {
			this.status.displayed = false;
			this.status.prevDisplayedElement = this.status.displayedElement;
			this.status.displayedElement = "";
			return $(element).hide();
		}
	}

	class DropdownBtnListener extends EventListener {
		constructor(eventElement, eventHiddenElement) {
			super();
			this.eventElement = eventElement;
			this.eventHiddenElement = eventHiddenElement;
			this.status = {
				displayed: false,
				prevDisplayedElement: "",
				displayedElement: ""
			};
		}

		eventElementChecker(e) {
			if (this.eventElement === `#${e.id}`
				|| this.eventElement === `.${e.className}`
				|| this.eventElement === `${e.tagName}`
			) {
				if ($(e)[0].firstElementChild === null) {
					return this.showHide($(e)[0].nextElementSibling);
				}
				return this.showHide($(e)[0].firstElementChild);
			}
			else
			if (this.eventHiddenElement === `#${e.id}`
				|| this.eventHiddenElement === `.${e.className}`
				|| this.eventHiddenElement === `.${e.offsetParent.offsetParent.className}`
				|| this.eventHiddenElement === `.${e.offsetParent.className}`) {
				console.log(e);
				return;
				// this.showElement($(this.eventHiddenElement));
			}
			else
				return this.hideElement($(this.eventHiddenElement));
		}
	}

	/**
	 * EventListener
	 * @type {DropdownBtnListener}
	 */

		// EventListeners
	const eventMyAcc = new DropdownBtnListener("#myAcc", ".myAcc-dropdown");
	eventMyAcc.listener();
	const eventLiveCart = new DropdownBtnListener("#liveCartEvent", ".basket-dropdown");
	eventLiveCart.listener();


};