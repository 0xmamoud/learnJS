const counteValue = document.querySelector(".counte-value");
let count = 0;


const btns = document.querySelectorAll(".btn");
btns.forEach( (btn) => {
    btn.addEventListener("click", function() {
        if(btn.classList.contains("decrease")) {
            count--;
            counteValue.textContent = count;
        }
        if(btn.classList.contains("increase")) {
            count++;
            counteValue.textContent = count;
        }
        if(btn.classList.contains("reset")) {
            count = 0;
        }

        
        if (count > 0) {
            counteValue.style.color = "green";
        }
        if (count < 0) {
            counteValue.style.color = "red";
        }
        if (count === 0) {
            counteValue.style.color = "#222";
        }
        counteValue.textContent = count;
    })
})

