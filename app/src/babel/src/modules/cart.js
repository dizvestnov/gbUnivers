"use strict";
function buildGoodsList() {
	$.get(`${bdIpAddress}/goods`, {}, function(goods) {
		const $goods = $('#goods');
		$goods.empty();
		$goods.addClass('catalog-items');
		goods.forEach(function(good) {
			const $good = $('<div />', {
				class: 'good button'
			});
			const $catalogItem = $('<a />', {
				href: '#',
				class: 'catalog-item'
			});
			const $itemImg = $('<img />', {
				class: 'catalog-img',
				src: good.imgSrc,
				alt: good.name
			});
			const $itemName = $('<div />', {
				text: good.name,
				class: 'catalog-name'
			});
			const $itemPrice = $('<div />', {
				text: `$${good.price}`,
				class: 'catalog-price'
			});
			const $catalogHover = $('<div />', {
				class: 'catalogHover'
			});
			const $catalogHoverCart = $('<a />', {
				href: '#',
				class: 'buy catalogHover-cart button',
				'data-id': good.id,
				'data-price': good.price,
				'data-name': good.name,
				'data-imgSrc': good.imgSrc,
				'data-quantity': good.quantity
			});
			const $catalogHoverCartImg = $('<img />', {
				class: 'catalogHover-img',
				src: 'assets/img/icons/button/card_img.png',
				alt: ''
			});
			const $catalogHoverCartText = $('<span />', {
				class: 'catalogHover-text',
				text: 'Add to cart'
			});
			$catalogItem.append($itemImg);
			$catalogItem.append($itemName);
			$catalogItem.append($itemPrice);
			$catalogItem.append($catalogHover);
			$catalogHover.append($catalogHoverCart);
			$catalogHoverCart.append($catalogHoverCartImg);
			$catalogHoverCart.append($catalogHoverCartText);
			$good.append($catalogItem).appendTo('#goods');
		});
	}, 'json');
}

function buildCart() {
	$.get(`${bdIpAddress}/cart`, {}, function(items) {
		const $cart = $('#cart');
		$cart.empty();
		const $good = $('<ul/>', {
			class: 'basket-good good'
		});
		let total = parseFloat('0');
		let quantity = parseFloat('0');
		if(items.length === 0) {
			const $liveCart = $('#liveCart');
			$($liveCart[0].firstElementChild.firstElementChild).css('display', 'none');
		}
		items.forEach(item => {
			quantity += +item.quantity;
			total += parseFloat(item.price) * parseFloat(item.quantity);
			const $liveCart = $('#liveCart');
			$($liveCart[0].firstElementChild.firstElementChild).css('display', 'flex');
			$liveCart[0].firstElementChild.firstElementChild.firstElementChild.textContent = quantity;
			const $goodItem = $('<li />', {
				class: 'good-item',
				'data-id': item.id,
				'data-quantity': item.quantity
			});
			const $goodImg = $('<img />', {
				class: 'good-img',
				src: `${item.imgSrc}`
			});
			const $goodInfo = $('<div />', {
				class: 'good-info'
			});
			const $goodName = $('<div />', {
				class: 'good-title',
				text: item.name
			});
			let price = parseFloat(item.price);
			const $goodPrice = $('<div />', {
				class: 'good-price',
				text: +item.quantity + ' x ' +price.toFixed(2) + ' $'
			});
			// const $goodDelete = $('<div />', {
			// 	class: 'remove good-itemRemove'
			// });
			const $goodDeleteIcon = $('<div />', {
				class: 'remove good-deleteIcon deleteIcon'
			});
			$goodItem.append($goodImg);
			$goodItem.append($goodInfo);
			$goodInfo.append($goodName);
			$goodInfo.append($goodPrice);
			// $goodItem.append($goodDelete);
			$goodItem.append($goodDeleteIcon);
			// $goodDeleteIcon.append($('<div />', {
			// 	class: 'deleteIcon-item'
			// }));
			// $goodDeleteIcon.append($('<div />', {
			// 	class: 'deleteIcon-item'
			// }));
			$good.append($goodItem);
		});
		$cart.append($good);
		const $totalPrice = $('<div />', {
			class: 'basket-liveCartTotalPrice liveCartTotalPrice'
		});
		$cart.append($totalPrice);
		const $totalText = $('<span />', {
			text: 'TOTAL',
			class: 'liveCartTotalPrice-title'
		});
		$totalPrice.append($totalText);
		const $totalCount = $('<span />', {
			text: `$${total.toFixed(2)}`,
			class: 'liveCartTotalPrice-count'
		});
		$totalPrice.append($totalCount)
	}, 'json');
}

(function($) {
	$(function() {
		buildCart();
		buildGoodsList();

		$('#cart').on('click', '.remove', function(event) {
			const goodId = $(this).parent().attr('data-id');
			$.ajax({
				url: `${bdIpAddress}/cart/${goodId}`,
				type: "DELETE",
				success: function() {
					buildCart();
				}
			});
		});

		$('#goods').on('click', '.buy', function(event) {
			if(+$(this).attr('data-quantity') < 1) {
				alert('Недостаточно товара');
				return;
			}
			const good = {
				id: $(this).attr('data-id'),
				name: $(this).attr('data-name'),
				imgSrc: $(this).attr('data-imgSrc'),
				price: $(this).attr('data-price')
			};

			let cartGood = $('#cart li[data-id="' + $(this).attr('data-id') + '"]');
			if(cartGood.length) {
				good.quantity = +cartGood.eq(0).attr('data-quantity') + 1;

				$.ajax({
					url: 'http://localhost/cart/' + good.id,
					type: 'PUT',
					data: good,
					success: function() {
						buildCart();
						buildGoodsList();
					}
				})
			} else {
				good.quantity = 1;
				$.post('http://localhost/cart', good, function(response) {
					buildCart();
					buildGoodsList();
				}, 'json');
			}
			event.preventDefault();
		});
	});
})(jQuery);