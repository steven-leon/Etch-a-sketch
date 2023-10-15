const sizeSlider = document.getElementById("sizeSlider");
const sliderValue = document.getElementById("sliderValue");
const containerDiv = document.getElementById("container-div");
const colorPicker = document.getElementById("color-picker");
const rainbowMode = document.getElementById("rainbow-mode");
const pick = document.getElementById("pick");
const rainbowColor = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
let selectedColor = "#000"; 
let isPainting = false;
let isRainbowMode = false;

function updateSliderValue(){
    const selectedValue = sizeSlider.value;
    sliderValue.textContent = `${selectedValue} x ${selectedValue}`;

     containerDiv.innerHTML = '';

   
     containerDiv.style.display = 'grid';
     containerDiv.style.gridTemplateColumns = `repeat(${selectedValue}, 1fr)`;
     containerDiv.style.gridTemplateRows = `repeat(${selectedValue}, 1fr)`;
     containerDiv.style.backgroundColor = "#ffffff";
     

     for (let i = 0; i < selectedValue * selectedValue; i++) {
         const showDiv = document.createElement('div');
         
        
        

          showDiv.addEventListener("mousedown", function() {
            isPainting = true;
            if (isRainbowMode) {
                showDiv.style.backgroundColor = rainbowColor[i % rainbowColor.length];
                  i++;
            }
            else {
                showDiv.style.backgroundColor = selectedColor;
            }
        });

        showDiv.addEventListener("mouseup", function() {
            isPainting = false;
        });

        showDiv.addEventListener("mousemove", function() {
            if (isPainting) {
                if (isRainbowMode) {
                    showDiv.style.backgroundColor = rainbowColor[i % rainbowColor.length];
                  i++;
                }
                else {
                    showDiv.style.backgroundColor = selectedColor;
                }
            }
        });

        showDiv.addEventListener("click", function() {
            if (isRainbowMode) {
                showDiv.style.backgroundColor = rainbowColor[i % rainbowColor.length];
                  i++;
            }
            else {
                showDiv.style.backgroundColor = selectedColor;
            }
        });
        


        clear.addEventListener("click", function(){
                showDiv.style.backgroundColor = "#ffffff";
        });

        containerDiv.appendChild(showDiv);
     }

}

updateSliderValue();

sizeSlider.addEventListener("change", updateSliderValue);





colorPicker.addEventListener("change", function(){
    selectedColor = colorPicker.value;
    isRainbowMode = false;
});

rainbowMode.addEventListener("click", function() {
    isRainbowMode = !isRainbowMode; 
});

pick.addEventListener("click", function() {
    selectedColor = colorPicker.value;
    isRainbowMode = false;
});


eraser.addEventListener("click", function() {
    isRainbowMode = false;
    selectedColor = "#ffffff";
});