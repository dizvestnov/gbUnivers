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
		if (this.eventHiddenElement === `#${e.id}`
			||
			this.eventHiddenElement === `.${e.className}`
		) return false;
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
		this.status.prevDisplayedElement = element;
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
	listener() {
		super.listener();
	}

	eventElementChecker(e) {
		if (this.eventElement === `#${e.id}`
			|| this.eventElement === `#${e.offsetParent.id}`
			|| this.eventElement === `.${e.className}`
			|| this.eventElement === `.${e.offsetParent.className}`
			|| this.eventElement === `${e.tagName}`
			|| this.eventElement === `${e.offsetParent.tagName}`
		) return this.showElement($(this.eventHiddenElement));
		else
			if (this.eventHiddenElement === `#${e.id}`
				|| this.eventHiddenElement === `.${e.className}`
				|| this.eventHiddenElement === `.${e.offsetParent.className}`) {
			this.showElement($(this.eventHiddenElement));
		}
		else
			return this.hideElement($(this.eventHiddenElement));
	}

	showElement(element) {
		super.showElement();
		this.status.displayed = true;
		this.status.displayedElement = element;
		return element.show();

	}

	hideElement(element) {
		super.hideElement();
		this.status.displayed = false;
		this.status.prevDisplayedElement = this.status.displayedElement;
		this.status.displayedElement = "";
		return element.hide();
	}
}

/**
 * EventListener
 * @type {DropdownBtnListener}
 */

	// EventListeners
const eventMyAcc = new DropdownBtnListener("#myAcc", ".myAcc-dropdown");
eventMyAcc.listener();
const eventLiveCart = new DropdownBtnListener("#liveCart", ".basket-dropdown");
eventLiveCart.listener();




// class EventListener {
// 	constructor() {
// 		this.crnTarget = ".site";
// 		this.id = ["#liveCart", "#myAcc"];
// 		this.events = "click";
// 		this.toggleItem = "-dropdown";
// 		this.status = {
// 			showHideEmpty: true,
// 			prevShowedElement: "",
// 			nowShowingElement: ""
// 		};
// 	}
//
// 	listener() {
// 		$(this.crnTarget).on(this.events, event => this.checkElement(event.target));
// 	}
//
// 	checkElement(e) {
// 		let [id1, id2] = this.id;
// 		if (id2 === `#${e.id}`) {
// 			return this.showHide(`.${e.className}${this.toggleItem}`);
// 		}
// 		else
// 		if (id1 === `#${e.offsetParent.id}`) {
// 			return this.showHide(`.${e.offsetParent.className}${this.toggleItem}`);
// 		}
// 		else
// 		if (this.status.nowShowingElement) {
// 			return this.showHide(this.status.nowShowingElement);
// 		}
// 	}
//
// 	showHide(element) {
// 		if (this.status.showHideEmpty) {
// 			return this.showElement(element);
// 		}
// 		else
// 		if (element !== this.status.nowShowingElement) {
// 			this.hideElement(this.status.nowShowingElement);
// 			return this.showElement(element);
// 		}
// 		else {
// 			return this.hideElement(element);
// 		}
// 	}
//
// 	showElement(element) {
// 		$(element).show();
// 		this.status.showHideEmpty = false;
// 		this.status.nowShowingElement = element;
// 	}
//
// 	hideElement(element) {
// 		$(element).hide();
// 		this.status.showHideEmpty = true;
// 		this.status.prevShowedElement = element;
// 		this.status.nowShowingElement = "";
// 	}
// }
//
// // class MenuEvent extends EventListener {
// // 		constructor() {
// 			super();
// 			this.$menuLink = $(".menu-link");
// 			this.$supermenu = $("#supermenu");
// 			this.supermenuStyleOn = {
// 				display: "grid",
// 				opacity: "1"
// 			};
// 			this.supermenuStyleOff = {
// 				opacity: "0",
// 				display: "none"
// 			};
// 		}
//
// 		listen() {
// 			// поместить из menuLinkHover и submenuHover, а в ней оставить только стили
// 		}
//
// 		menuLinkHover() {
// 			this.$menuLink.on("mouseenter mouseleave", event => {
// 					if (event.target.innerText !== "MAN") return;
// 					if (event.type !== "mouseleave") {
// 						this.$supermenu.css(this.supermenuStyleOn);
// 						return this.submenuHover();
// 					}
//
// 					this.$supermenu.css(this.supermenuStyleOff);
// 				});
// 		}
//
// 		submenuHover() {
// 			this.$supermenu.on("mouseenter mouseleave", event => {
// 					if (event.type !== "mouseleave") {
// 						this.$supermenu.css(this.supermenuStyleOn);
// 						return;
// 					}
//
// 					this.$supermenu.css(this.supermenuStyleOff);
// 				});
// 		}
// 	}

