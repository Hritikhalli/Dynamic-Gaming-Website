function showSlide(slideIndex) {
    var slide1 = document.getElementById('slide1');
    var slide2 = document.getElementById('slide2');
  
    if (slideIndex === 1) {
      slide1.style.display = 'block';
      slide2.style.display = 'none';
    } else if (slideIndex === 2) {
      slide1.style.display = 'none';
      slide2.style.display = 'block';
    }
  }
  