const shoppingCart = [];
function addToCart(item, size = 1) {
	shoppingCart.push({ item: item, count: size });
}
addToCart('Apple');	// size는 1
addToCart('Orange', 2);	// size는 2

// ES5 code
function addToCart(item, size) {
	size = (typeof size !== 'undefined') ? size : 1;
	shoppingCart.push({ item: item, count: size });
}
