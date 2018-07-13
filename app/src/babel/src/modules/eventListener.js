



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

