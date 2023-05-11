var banner = document.getElementById("banner");
var images = banner.getElementsByTagName("img");
var currentIndex = 0;
var slideInterval = setInterval(nextSlide, 3000); // Slide interval in milliseconds

function nextSlide() {
	images[currentIndex].style.opacity = "0";
	currentIndex = (currentIndex + 1) % images.length;
	images[currentIndex].style.opacity = "1";
}
