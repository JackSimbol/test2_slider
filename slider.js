const sliderEl = document.querySelector("#slider-input")

const selectedEl = document.querySelector(".selected")

sliderEl.addEventListener("input", () => { //根据滑块值修改填写值
    selectedEl.innerHTML = sliderEl.value;
});

selectedEl.addEventListener("input", () =>{ //根据输入修改滑块值
    sliderEl.innerHTML = selectedEl.value;  
})

/*
function send(){
    var aa = selectedEl;
    window.location.href="reviewfield.php?data="+aa;
}

send()
*/
