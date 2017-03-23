// ev = event
/* global console */
/*var buttons, 
    container, 
    contents, 
    i;*/

var solar_btn,
	sun_btn,
	water_btn,
	paragraph,
    main_content,
    image, 
    content_box_1, 
    content_box_2,
    content_box_3;

/*contents = [
    "<figure><img src=\"http://placehold.it/200x200\" alt=\"image\"><figcaption>Image 1</figcaption></figure>",
    "<figure><img src=\"http://placehold.it/200x200\" alt=\"image\"><figcaption>Image 2</figcaption></figure>",
    "<figure><img src=\"http://placehold.it/200x200\" alt=\"image\"><figcaption>Image 3</figcaption></figure>"
];*/
contents = ["<div id=\"content-box-1\">  
                  <img src =\"./img/solar-panels.jpg\">
                    <p>Solar Panels are an affordable way to harness the sun’s energy to heat your home and water. An investment that will pay off over years. </p>
            </div>",
            "<div id=\"content-box-2\">  
                  <img src = \"./img/wind-generator.jpg\">
                     <p>Solar Panels are an affordable way to harness the sun’s energy to heat</p></div>",
          "<div id=\"content-box-3\">  
                  <img src = \"./img/waterfalljpg.jpg\">
                    <p>Solar Panels are an affordable way to harness the sun’s energy to heat your home and water. An investment that will pay off over years. our home and water. An investment that will pay off over years. </p>
            </div>"
           ];
buttons = document.querySelectorAll("button");

function checkButton(ev) {
    
    "use strict";
    
    // console.log(ev.target.innerHTML); 
    
    if (ev.target.innerHTML === "solar_btn") {
        console.log (contents[0]);
    }
       if (ev.target.innerHTML === "sun_btn") {
        console.log (contents[1]);
    }
    
       if (ev.target.innerHTML === "water_btn") {
        console.log (contents[2]);
    }
    
}
/*
buttons[0].addEventListener("click", checkButton, false);
buttons[1].addEventListener("click", checkButton, false);
buttons[2].addEventListener("click", checkButton, false);
buttons[3].addEventListener("click", checkButton, false);*/

for (i = 0; i< buttons.length; i +=1) {
    buttons[i].addEventListener("click", checkButton, false);
}