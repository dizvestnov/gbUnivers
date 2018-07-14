

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

	const mySite = new Site('div', 'site', mybody).render();
	(function createHeader() {
		const header = new Header('header',
			'site-header',
			mySite).render();
		const headerContainer = new Header('div',
			'container header',
			header).render();
		(function createLogo() {
			const headerLogo = new Header('div',
				'header-logo logo',
				headerContainer).render();

			const headerLogoLink = new Header('a',
				'logo-link',
				headerLogo,
				'/').render();

			const headerLogoLinkImg = new Header('img',
				'logo-link', headerLogoLink,
				'assets/json-server/img/icons/logo/logo.png',
				'Logo').render();
		})();
		(function createItems() {
			const headerItems = new Header('div',
				'header-items',
				headerContainer).render();

			const headerItem = [
				new Header('div', 'header-item', headerItems).render(),
				new Header('div', 'header-item', headerItems).render()
			];
			(function createSearch() {
				const headerSearch = new Header('div',
					'header-search search',
					headerItem[0]).render();
				const headerSearchItem = [
					new Header('div', 'search-item', headerSearch).render(),
					new Header('div', 'search-item', headerSearch).render()
				];
				(function createSearchDropdown() {
					const headerSearchDropdown = new Header('a',
						'navbarDropdown btn-dropdown search-dropdownButton',
						headerSearchItem[0],
						'#',
						'Browse').render();
					headerSearchDropdown.setAttribute('role', 'button');
					headerSearchDropdown.setAttribute('data-toggle', 'dropdown');
					headerSearchDropdown.setAttribute('aria-haspopup', 'true');
					headerSearchDropdown.setAttribute('aria-expanded', 'false');

					const headerSearchDropdownMenu = new Header('div',
						'dropdown-menu',
						headerSearchItem[0]).render();
					headerSearchDropdownMenu.setAttribute('aria-labelledby', 'navbarDropdown');

					const headerSearchDropdownMenuItems = [
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Women').render(),
						new SiteElement('dropdown-divider', headerSearchDropdownMenu, ['role', 'separator']),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Dresses').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Tops').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Sweaters/Knits').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Jackets/Coats').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Blazers').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Denim').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Leggings/Pants').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Skirts/Shorts').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Accessories').render(),
						new SiteElement('dropdownMarginTop', headerSearchDropdownMenu).render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Man').render(),
						new SiteElement('dropdown-divider', headerSearchDropdownMenu, ['role', 'separator']),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Tees/Tank tops').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Shirts/Polos').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Sweaters').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Sweatshirts/Hoodies').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Blazers').render(),
						new Header('a', 'dropdown-item', headerSearchDropdownMenu, '#', 'Jackets/Vests').render(),

					];
				})();
				(function createSearchForm() {
					const headerSearchForm = new Header('form',
						'search-form form',
						headerSearchItem[1]).render();

					const headerSearchFormInput = new Form('input',
						'search-input form-input', headerSearchForm,
						'search', 'navbarDropdown', 'Search for item...',
						'Search').init();

					const headerSearchFormButton = new Form('button',
						'btn btn-outline-success search-button form-submit',
						headerSearchForm,
						'submit').init();
					const headerSearchFormButtonFa = new Header('i',
						'fas fa-search search-fa',
						headerSearchFormButton).render();
				})();
			})();
			(function createBasketMyAcc() {
				const headerBasket = new Header('div', 'header-basket', headerItem[1]).render();
				(function createBasket() {
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
				})();

				const headerMyAcc = new Header('div', 'header-myAcc', headerItem[1]).render();
				(function createMyAcc() {
					const myAcc = new MyAcc('div',
						'myAcc btn-dropdown',
						headerMyAcc,
						'myAcc',
						'My account').render();
					const myAccDropdown = new Header('div',
						'myAcc-dropdown',
						myAcc).render();
					const myAccDropdownItem = new Header('div',
						'myAcc-item',
						myAccDropdown).render();
					const myAccDropdownItemLink = [
						new Header('a', 'myAcc-link', myAccDropdownItem, '#', 'Sign in').render(),
						new Header('a', 'myAcc-link', myAccDropdownItem, '#', 'Sign out').render(),
						new Header('a', 'myAcc-link', myAccDropdownItem, '#', 'Sign up').render()
					];

				})();
			})();
		})();
	})();

	//= modules/topnav.js
	//= modules/cart.js
	//= modules/botnav.js
	//= modules/footer.js
	//= modules/eventListener.js



};