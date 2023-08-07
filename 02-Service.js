//輪播圖
window.onload = function () {
    let slideIndex = 1;
    showSlide(slideIndex);
  
    function plusSlides() {
      showSlide((slideIndex += 1));
    }
  
    function divideSlides() {
      showSlide((slideIndex -= 1));
    }
  
    function showSlide(num) {
      let slides = document.getElementsByClassName("slide__item");

      if (num > slides.length) {
        slideIndex = 1;
      }
  
      if (num < 1) {
        slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[slideIndex - 1].style.display = "block";
    }
    //自動播放功能
    setInterval(function () {
      plusSlides();
    }, 4000);
  };


  