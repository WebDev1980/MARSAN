let slidesIndex = 1; 
showVideoSlides(slidesIndex); 

// Next/previous controls 
function plusSlides_(n) { 
    showVideoSlides(slidesIndex += n); } 

// Thumbnail image controls 
function currentVideoSlide(n) { 
    showVideoSlides(slidesIndex = n); } 
    function showVideoSlides(n) { 
        let i; 
        let slides_ = document.getElementsByClassName("mySlides_"); 
        let dots1 = document.getElementsByClassName("dot_"); 
        if (n > slides_.length) {slidesIndex = 1
        } 
        if (n < 1) {slidesIndex = slides_.length
        } 
        for (i = 0; i < slides_.length; i++) { slides_[i].style.display = "none"; 
    } 
        for (i = 0; i < dots1.length; i++) { dots1[i].className = dots1[i].className.replace(" active", ""); 
    } slides_[slidesIndex-1].style.display = "block"; dots1[slidesIndex-1].className += " active"; 
}