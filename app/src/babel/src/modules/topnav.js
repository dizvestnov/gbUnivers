/**
 * Menu и SuperMenu
 * @type {*[]}
 */
class Menu extends Container {
	constructor(className, child) {
		super();
		this.tagName = 'nav';
		this.className = className;
		this.child = child;
	}
	render() {
		super.render();
		const menu = document.createElement(this.tagName);
		menu.id = this.id;
		menu.className = this.className;
		menu.appendChild(this.child.render());

		return menu;
	}
}
class MenuList extends Container {
	constructor(className, items) {
		super();
		this.tagName = 'ul';
		this.className = className;
		this.items = items;
	}

	render() {
		super.render();
		const menuList = document.createElement(this.tagName);
		menuList.className = this.className;
		menuList.id = this.id;
		this.items.forEach(function(item) {
			if (item instanceof Container) {
				menuList.appendChild(item.render());
			}
		});
		return menuList;
	}
}
class MenuItem extends Container {
	constructor(href, title, child=false) {
		super();
		this.tagName = 'li';
		this.className = 'menu-item';
		this.childTagName = 'a';
		this.childClassName = 'menu-link';
		this.href = href;
		this.title = title;
		this.child = child;
	}

	render() {
		super.render();
		const li = document.createElement(this.tagName);
		li.className = this.className;

		const link = document.createElement(this.childTagName);
		link.className = this.childClassName;
		link.href = this.href;
		link.textContent = this.title;
		link.id = this.id;
		if(this.child) {
			link.appendChild(this.child);
		}

		li.appendChild(link);

		return li;
	}
}

class SuperMenu extends Container {
	constructor(className, child) {
		super();
		this.tagName = 'div';
		this.className = className;
		this.child = child;
	}
	render() {
		super.render();
		const menu = document.createElement(this.tagName);
		menu.id = this.id;
		menu.className = this.className;

		this.child.forEach(function (item) {
			if (item instanceof Container) {
				menu.appendChild(item.render());
			}
		});

		return menu;
	}
}
class SuperMenuList extends Container {
	constructor(className, items, title, titleClassName, index) {
		super();
		this.index = index;
		this.tagName = 'ul';
		this.className = className;
		this.items = items;
		this.title = title;
		this.titleTagName = 'div';
		this.titleClassName = titleClassName;
		// this.imgTagName = 'img';
		// this.imgClassName = 'supermenu-img';
		// this.imgSrc = 'assets/img/supermenu-banner.jpg';
		// this.imgAlt =	'banner';

	}
	render() {
		super.render();
		const superMenuList = document.createElement(this.tagName);
		superMenuList.className = this.className;
		superMenuList.id = this.id;
		const superMenuTitle = document.createElement(this.titleTagName);
		superMenuTitle.className = this.titleClassName;
		superMenuTitle.textContent = this.title;
		superMenuList.appendChild(superMenuTitle);
		this.items[this.index].forEach(function (item) {
			if (item instanceof Container) {
				superMenuList.appendChild(item.render());
			}
		});
		return superMenuList;
	}
}
class SuperMenuListImg extends SuperMenuList {
	constructor(className, imgTagName, imgSrc) {
		super();
		this.tagName = 'ul';
		this.className = className;
		this.imgTagName = imgTagName;
		this.imgClassName = 'supermenu-img';
		this.imgSrc = imgSrc;
		this.imgAlt =	'banner';

	}
	render() {
		const superMenuList = document.createElement(this.tagName);
		superMenuList.className = this.className;
		superMenuList.id = this.id;

		const img = document.createElement(this.imgTagName);
		img.className = this.imgClassName;
		img.id = this.id;
		img.src = this.imgSrc;
		img.alt = this.imgAlt;
		superMenuList.appendChild(img);

		return superMenuList;
	}
}
class SuperMenuItem extends Container {
	constructor(href, title) {
		super();
		this.tagName = 'li';
		this.className = 'supermenu-item';
		this.childTagName = 'a';
		this.childClassName = 'supermenu-link';
		this.href = href;
		this.title = title;
	}

	render() {
		super.render();
		const li = document.createElement(this.tagName);
		li.className = this.className;

		const link = document.createElement(this.childTagName);
		link.className = this.childClassName;
		link.href = this.href;
		link.textContent = this.title;
		link.id = this.id;

		li.appendChild(link);

		return li;
	}
}


function createMenu() {
	const superMenuItems = [
		[
			new SuperMenuItem('#', 'Dresses'),
			new SuperMenuItem('#', 'Tops'),
			new SuperMenuItem('#', 'Sweaters/Knits'),
			new SuperMenuItem('#', 'Jackets/Coats'),
			new SuperMenuItem('#', 'Blazers'),
			new SuperMenuItem('#', 'Denim'),
			new SuperMenuItem('#', 'Leggings/Pants'),
			new SuperMenuItem('#', 'Skirts/Shorts'),
			new SuperMenuItem('#', 'Accessories')
		],
		[
			new SuperMenuItem('#', 'Dresses'),
			new SuperMenuItem('#', 'Tops'),
			new SuperMenuItem('#', 'Sweaters/Knits'),
			new SuperMenuItem('#', 'Jackets/Coats')
		],
		[
			new SuperMenuItem('#', 'Dresses'),
			new SuperMenuItem('#', 'Tops'),
			new SuperMenuItem('#', 'Sweaters/Knits')
		],
		[
			new SuperMenuItem('#', 'Dresses'),
			new SuperMenuItem('#', 'Tops'),
			new SuperMenuItem('#', 'Sweaters/Knits'),
			new SuperMenuItem('#', 'Jackets/Coats')
		]
	];
	const superMenuListMan = [
		new SuperMenuList('supermenu-list', superMenuItems, 'Catalog', 'supermenu-title', 0),
		new SuperMenuList('supermenu-list', superMenuItems, 'Brands', 'supermenu-title', 1),
		new SuperMenuList('supermenu-list', superMenuItems, 'Discounts', 'supermenu-title', 2),
		new SuperMenuList('supermenu-list', superMenuItems, 'Special offer', 'supermenu-title', 3),
		new SuperMenuListImg('supermenu-list', 'img', 'assets/img/supermenu-banner.jpg')
	];
	const superMenuMan = new SuperMenu('supermenu', superMenuListMan);
	const superMenuContainerMan = new Container('container--absolute').render();
	superMenuContainerMan.appendChild(superMenuMan.render());

	const superMenuListWomen = [
		new SuperMenuList('supermenu-list', superMenuItems, 'Catalog', 'supermenu-title', 0),
		new SuperMenuList('supermenu-list', superMenuItems, 'Brands', 'supermenu-title', 1),
		new SuperMenuList('supermenu-list', superMenuItems, 'Discounts', 'supermenu-title', 2),
		new SuperMenuList('supermenu-list', superMenuItems, 'Special offer', 'supermenu-title', 3),
		new SuperMenuListImg('supermenu-list', 'img', 'assets/img/supermenu-banner.jpg')
	];
	const superMenuWomen = new SuperMenu('supermenu', superMenuListWomen);
	const superMenuContainerWomen = new Container('container--absolute').render();
	superMenuContainerWomen.appendChild(superMenuWomen.render());
// Menu
	const items = [
		new MenuItem('#', 'Home'),
		new MenuItem('#', 'Man', superMenuContainerMan),
		new MenuItem('#', 'Women', superMenuContainerWomen),
		new MenuItem('#', 'Kids'),
		new MenuItem('#', 'Accessories'),
		new MenuItem('#', 'Featured'),
		new MenuItem('#', 'Hot Deals')
	];
	const menuList = new MenuList('menu-list', items);
	const menu = new Menu('menu menu--grid', menuList);
	const containerMenu = new Menu('container', menu);
	const header = $('#siteTopNav')[0];
	header.appendChild(containerMenu.render());
}
createMenu();