document.addEventListener("DOMContentLoaded", function(){

    //menu

    const menu = document.querySelector(".menu");
    const list = document.querySelector(".list");

    list.addEventListener("mouseover", function(){
        menu.style.display = "block";
    });
    menu.addEventListener("mouseout", function(){
        menu.style.display = "none";
    });

    //read more less

    const readMoreLess = document.querySelectorAll(".read-more");
    function showHideText(){
    const siblingText = this.previousElementSibling;
        if(siblingText.style.display === "none" || siblingText.style.display === ""){
            siblingText.style.display = "block";
            this.textContent = "Czytaj mniej";
         } else {
             siblingText.style.display = "none";
             this.textContent = "Czytaj więcej";
         }
    }
        for (let i=0; i < readMoreLess.length; i++){
            readMoreLess[i].addEventListener("click", showHideText);
        }
    const input = document.querySelector(".newsletter-form input");
    const newsletterBtn = document.querySelector(".newsletter-form button");
    const formInfo = document.querySelector(".form-info");

        newsletterBtn.addEventListener("click", function(event){
            event.preventDefault();
            formInfo.style.display = "block";
            
        if (input.value !==""){
            formInfo.textContent = "Dziękujemy za zapisanie się do newslettera";
            input.value = "";
            } else {
                formInfo.textContent = "Pole nie może być puste";
            }
        });
        
    // slider
    const slider = document.querySelector(".slider");
    const sliderStage = document.querySelector(".photos");
    const slides = document.querySelectorAll(".slider li");
    const prev = document.querySelector(".previous");
    const next = document.querySelector(".next");
    
    const slideWidth  = slides[0].clientWidth;
    let currentIndex = 0;
    let slidesNumber = slides.length -1;

    function goToSlide(index) {
        if (index < 0 ){
            index = slidesNumber;
        } else if (index > slidesNumber){
            index = 0;
        }

        slider.style.left = index * (-slideWidth) + "px";
        currentIndex = index;
    }

    function slideToNext() {
        goToSlide(currentIndex + 1);
    }

    function slideToPrev(){
        goToSlide(currentIndex - 1);
    }

    prev.addEventListener("click", slideToPrev);
    next.addEventListener("click", slideToNext);
    setInterval(slideToNext, 2000);

    // go up

    const goUp = document.querySelector(".up i");

    goUp.addEventListener("click", function(){
        window.scroll({
            top: 0,
            left:0,
            behavior:"smooth"
        })
    });

    
});