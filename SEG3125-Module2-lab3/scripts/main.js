
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}



	
// generate a checkbox list from a list of products
// it makes each productname as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
		console.log("1 "+  products[i].name);
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
/* This picture is taken from 
https://www.google.com/search?q=bread&tbm=isch&ved=2ahUKEwjR84SYh_bpAhVLEc0KHRtWAFcQ2-cCegQIABAA&oq=bread&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzIFCAAQsQMyBQgAELEDMgUIABCxAzICCAAyBQgAELEDMgIIADICCAA6BAgjECdQyqQDWL2vA2D2tANoAHAAeACAAbYBiAHuBJIBAzEuNJgBAKABAaoBC2d3cy13aXotaW1n&sclient=img&ei=ATLgXpHvBcuitAabrIG4BQ&bih=938&biw=1920&rlz=1C1CHZL_zh-CNCA823CA823*/		
		if(products[i].name == "brocoli"){
			
		
		var img = document.createElement("img");
		img.src="Brocoli.jpg";
		img.width="200";
		
		s2.appendChild(img);
		}
		if(products[i].name == "bread"){
			
		
		var img = document.createElement("img");
		img.src="Bread.jpg";
		img.width="200";
		
		s2.appendChild(img);
		}
		if(products[i].name == "salmon"){
			
		
		var img = document.createElement("img");
		img.src="salmon.jpg";
		img.width="200";
		
		s2.appendChild(img);
		}
		if(products[i].name == "potato"){
			
		
		var img = document.createElement("img");
		img.src="potato.jpg";
		img.width="200";
		
		s2.appendChild(img);
		}
		if(products[i].name == "tomato"){
			
		
		var img = document.createElement("img");
		img.src="tomato.jpg";
		img.width="200";
		
		s2.appendChild(img);
		}
		if(products[i].name == "carrot"){
			
		
		var img = document.createElement("img");
		img.src="carrot.jpg";
		img.width="200";
		
		s2.appendChild(img);
		}
		if(products[i].name == "onion"){
			
		
		var img = document.createElement("img");
		img.src="onion.jpg";
		img.width="200";
		
		s2.appendChild(img);
		}
		if(products[i].name == "beef"){
			
		
		var img = document.createElement("img");
		img.src="beef.jpg";
		img.width="200";
		
		s2.appendChild(img);
		}
		if(products[i].name == "pork"){
			
		
		var img = document.createElement("img");
		img.src="pork.jpg";
		img.width="200";
		
		s2.appendChild(img);
		}		
		if(products[i].name == "lamb"){
			
		
		var img = document.createElement("img");
		img.src="lamb.jpg";
		img.width="200";
		
		s2.appendChild(img);
		}
		s2.appendChild(checkbox);

		
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
	 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			var words = ele[i].value.split(' ');
			chosenProducts.push(words[0]);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}

