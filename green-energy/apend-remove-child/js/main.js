// element.appendChild(childElement)
// element.removeChild(childElement)

// declare variables you are going to use
var solar_btn,
	sun_btn,
	water_btn,
	paragraph,
    main_content,
    image, 
    content_box_1, 
    content_box_2,
    content_box_3;


// access icons and currently empty div 
solar_btn = document.querySelector("#solar");
sun_btn = document.querySelector("#heat");
water_btn = document.querySelector("#h20");
main_content = document.querySelector(".main-content");

content_box_1 = document.querySelector("#content-box-1");
content_box_2 = document.querySelector("#content-box-2");
content_box_3 = document.querySelector("#content-box-3");


// create paragraph and append it to DOM tree
/*function addItem() {
	
	"use strict";

    paragraph = document.createElement("p");
	
	paragraph.innerHTML = "Paragraph created and appended to DOM tree using appendChild().";
	
	container.appendChild(paragraph);
}*/

//append_btn.addEventListener("click", addItem, false);



// remove paragraph from DOM tree
function removeItem() {
	
	"use strict";
	
	content_box_1.remove();
	content_box_2.remove();
}

solar_btn.addEventListener("click", removeItem, false);

sun_btn.addEventListener("click", removeItem, false);

water_btn.addEventListener("click", removeItem, false);