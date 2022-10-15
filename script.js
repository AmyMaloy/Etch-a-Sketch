let container = document.querySelector(".container");
const btn_div = document.querySelector("#refresh");

function createPixels(size) {
 // let container = document.querySelector(".container");
  for (currentPixel = 0; currentPixel < size * size; currentPixel++) {
    let pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    //hover effect
    pixel.addEventListener("pointerover", addRgb);
    container.appendChild(pixel);
  }
}

createPixels(16);


//This function creates random background colors
function addRgb(e) {
  e.target.style = `background-color: rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  e.target.removeEventListener("pointerover", addRgb);
}

//reset button
btn_div.addEventListener("click", function() {
   location.reload();
});


