let engBtn = document.querySelector(".eng-btn");
let dutBtn = document.querySelector(".dut-btn");

engBtn.addEventListener('click', function(){
    engBtn.classList.add("active");
    dutBtn.classList.remove("active");
});

dutBtn.addEventListener('click', function(){
    engBtn.classList.remove("active");
    dutBtn.classList.add("active");
});