var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5200); 
}
// JavaScript for Up Arrow Button
document.addEventListener("DOMContentLoaded", function () {
  var upButton = document.getElementById("upButton");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
          upButton.style.display = "block";
      } else {
          upButton.style.display = "none";
      }
  });

  upButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth"}); // Smooth scroll to top
  });
});
// Get the video element
const video = document.getElementById('video-bg');

// Play the video when it's loaded
video.addEventListener('loadedmetadata', function() {
    video.play();
});

