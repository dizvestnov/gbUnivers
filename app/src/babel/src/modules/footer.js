class SiteFooter extends Container {
	constructor(tagName, className, child) {
		super();
		this.tagName = tagName;
		this.className = className;
		this.child = child;
	}

	render() {
		super.render();
		const footer = document.createElement(this.tagName);
		footer.id = this.id;
		footer.className = this.className;
		footer.appendChild(this.child.render());

		return footer;
	}
}
class FooterText extends Container {
	constructor(tagName, className, text="") {
		super();
		this.tagName = tagName;
		this.className = className;
		this.text = text;
	}

	render() {
		super.render();
		const footer = document.createElement(this.tagName);
		footer.id = this.id;
		footer.className = this.className;
		footer.textContent = this.text;

		return footer;
	}
}
class Footer extends Container {
	constructor(tagName, className, child) {
		super();
		this.tagName = tagName;
		this.className = className;
		this.child = child;
	}

	render() {
		super.render();
		const footer = document.createElement(this.tagName);
		footer.id = this.id;
		footer.className = this.className;
		footer.className = this.className;
		this.child.forEach(function(item) {
			if (item instanceof Container) {
				footer.appendChild(item.render());
			}
		});

		return footer;
	}
}
class FooterLink extends Container {
	constructor(tagName, href, className, child) {
		super();
		this.tagName = tagName;
		this.href = href;
		this.className = className;
		this.child = child;
	}

	render() {
		super.render();
		const footer = document.createElement(this.tagName);
		footer.href = this.href;
		footer.id = this.id;
		footer.className = this.className;
		footer.appendChild(this.child.render());

		return footer;
	}
}

// footer
const footerTextTxt = '© 2017  Brand  All Rights Reserved.';
function createFooter() {
	const facebook = new FooterText('i', 'fab fa-facebook-f');
	const twitter = new FooterText('i', 'fab fa-twitter');
	const linkedIn = new FooterText('i', 'fab fa-linkedin-in');
	const pinterest = new FooterText('i', 'fab fa-pinterest-p');
	const google = new FooterText('i', 'fab fa-google-plus-g');
	const footerLink = [
		new FooterLink('a', '#', 'button footer-link', facebook),
		new FooterLink('a', '#', 'button footer-link', twitter),
		new FooterLink('a', '#', 'button footer-link', linkedIn),
		new FooterLink('a', '#', 'button footer-link', pinterest),
		new FooterLink('a', '#', 'button footer-link', google),
	];
	const footerItems = new Footer('div', 'footer-items', footerLink);
	const footerText = new FooterText('p', 'footer-p', footerTextTxt);
	const footer = new Footer('div', 'footer', [footerText, footerItems]);
	const footerContainer = new SiteFooter('div', 'container', footer);
	const siteFooter = new SiteFooter('footer', 'site-footer', footerContainer);
	site.appendChild(siteFooter.render());
}
createFooter();