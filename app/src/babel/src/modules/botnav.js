/**
 * botNav
 * @type {*|jQuery|HTMLElement}
 */
class BotNav extends Container {
	constructor(tagName, className, child) {
		super();
		this.tagName = tagName;
		this.className = className;
		this.child = child;
	}

	render() {
		const element = document.createElement(this.tagName);
		element.id = this.id;
		element.className = this.className;
		element.appendChild(this.child.render());
		return element;
	}
}
class BotNavItem extends BotNav {
	constructor(tagName, className, child) {
		super();
		this.tagName = tagName;
		this.className = className;
		this.child = child;
	}

	render() {
		const element = document.createElement(this.tagName);
		element.id = this.id;
		element.className = this.className;
		this.child.forEach(function(item) {
			if (item instanceof Container) {
				element.appendChild(item.render());
			}
		});

		return element;
	}
}
class BotNavImg extends BotNav {
	constructor(src, className, alt) {
		super();
		this.tagName = 'img';
		this.src = src;
		this.className = className;
		this.alt = alt;
	}

	render() {
		const element = document.createElement(this.tagName);
		element.src = this.src;
		element.id = this.id;
		element.className = this.className;
		element.alt = this.alt;

		return element;
	}
}
class BotNavText extends BotNav {
	constructor(tagName, className, text='') {
		super();
		this.tagName = tagName;
		this.className = className;
		this.text = text;
	}

	render() {
		const element = document.createElement(this.tagName);
		element.id = this.id;
		element.className = this.className;
		if (this.text !== '') {
			element.textContent = this.text;
		}
		return element;
	}
}
class BotNavLink extends BotNav {
	constructor(href, className, text='', child='none') {
		super();
		this.tagName = 'a';
		this.href = href;
		this.className = className;
		this.child = child;
		this.text = text;
	}

	render() {
		const element = document.createElement(this.tagName);
		element.href = this.href;
		element.id = this.id;
		element.className = this.className;
		if (this.child !== 'none') {
			element.appendChild(this.child.render());
		}
		if (this.text !== '') {
			element.textContent = this.text;
		}
		return element;
	}
}

const botNavTextFirst = 'Objectively transition extensive data rather than cross functional solutions. Monotonically syndicate multidisciplinary materials before go forward benefits. Intrinsically syndicate an expanded array of processes and cross-unit partnerships.';
const botNavTextSecond = 'Efficiently plagiarize 24/365 action items and focused intermediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.';

function createBotNav() {
	const botNavLink = [
		[
			new BotNavLink('#', 'button botNavMenu-link', 'Home'),
			new BotNavLink('#', 'button botNavMenu-link', 'Shop'),
			new BotNavLink('#', 'button botNavMenu-link', 'About'),
			new BotNavLink('#', 'button botNavMenu-link', 'How It Works'),
			new BotNavLink('#', 'button botNavMenu-link', 'Contact')],
		[
			new BotNavLink('#', 'button botNavMenu-link', 'Terms & Condition'),
			new BotNavLink('#', 'button botNavMenu-link', 'Privacy Policy'),
			new BotNavLink('#', 'button botNavMenu-link', 'How to Buy'),
			new BotNavLink('#', 'button botNavMenu-link', 'How to Sell'),
			new BotNavLink('#', 'button botNavMenu-link', 'Promotion')],
		[
			new BotNavLink('#', 'button botNavMenu-link', 'Men'),
			new BotNavLink('#', 'button botNavMenu-link', 'Women'),
			new BotNavLink('#', 'button botNavMenu-link', 'Child'),
			new BotNavLink('#', 'button botNavMenu-link', 'Apparel'),
			new BotNavLink('#', 'button botNavMenu-link', 'Brows All')]
	];
	const botNavItemLink = [
		new BotNavItem('div', 'botNavMenu-item', botNavLink[0]),
		new BotNavItem('div', 'botNavMenu-item', botNavLink[1]),
		new BotNavItem('div', 'botNavMenu-item', botNavLink[2])
	];
	const botNavTitle = [
		new BotNavText('div', 'botNavMenu-title', 'Company'),
		new BotNavText('div', 'botNavMenu-title', 'Information'),
		new BotNavText('div', 'botNavMenu-title', 'Shop Category')
	];
	const botNavList = [
		new BotNavItem('nav', 'botNavMenu-list', [botNavTitle[0], botNavItemLink[0]]),
		new BotNavItem('nav', 'botNavMenu-list', [botNavTitle[1], botNavItemLink[1]]),
		new BotNavItem('nav', 'botNavMenu-list', [botNavTitle[2], botNavItemLink[2]])
	];

	const botNavTextTxt = [
		new BotNavText('p', 'botNav-description', botNavTextFirst),
		new BotNavText('p', 'botNav-description', botNavTextSecond)
	];
	const botNavText = new BotNavItem('div', 'botNav-text', botNavTextTxt);
	const botNavLogoImg = new BotNavImg('assets/img/icons/logo/logo.png', 'logo-img', 'logo');
	const botNavLogoLink = new BotNavLink('\/', 'logo-link', '', botNavLogoImg);
	const botNavLogo = new BotNav('div', 'botNav-logo logo', botNavLogoLink);
	const botNavItem = [
		new BotNavItem('div', 'botNav-item', [botNavLogo, botNavText]),
		new BotNavItem('div', 'botNav-item botNavMenu', botNavList)
	];
	const botNav = new BotNavItem('div', 'botNav', botNavItem);
	const containerBotNav = new BotNav('div', 'container', botNav);
	const siteBotNav = new BotNav('section', 'site-botNav', containerBotNav);
	site.appendChild(siteBotNav.render());
}
createBotNav();