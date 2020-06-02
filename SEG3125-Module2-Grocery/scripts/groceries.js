	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.5
	},
	{
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.75
	},
	{
		name: "potato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.25
	},
	{
		name: "onion",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.3
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 5
	},
	{
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 4
	},
	{
		name: "lamb",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
/* This style sheet is taken from 
https://blog.csdn.net/qq416761940/java/article/details/79632018*/	
	products.sort(function(a,b){
    var value1 = a.price;
        value2 = b.price;
    
    return value1 - value2;
	});

	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			
			product_names.push(prods[i].name+"   $:"+prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name+"   $:"+prods[i].price);
		}
		else if ((restriction == "organic")&& (prods[i].organic == true)){
			product_names.push(prods[i].name+"   $:"+prods[i].price);
		}
		else if ((restriction == "nonorganic")&& (prods[i].organic == false)){
			product_names.push(prods[i].name+"   $:"+prods[i].price);	
		}
		else if ((restriction == "all")&&(prods[i].vegetarian== true)&& (prods[i].glutenFree== true)){
			product_names.push(prods[i].name+"   $:"+prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name+"   $:"+prods[i].price);
		}
		
		
	}
	


	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
