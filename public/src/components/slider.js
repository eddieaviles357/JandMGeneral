const slides = document.querySelectorAll(".slide");
// const next = document.querySelector("#next");
// const prev = document.querySelector("#prev");
let auto; // Auto scroll
let intervalTime = 5000; // 5 seconds
let slideInterval;
const slider = document.querySelector(".slider");

// Button events
// next.addEventListener("click", (e) => {
// 	nextSlide();
// 	if (auto) {
// 		clearInterval(slideInterval);
// 		slideInterval = setInterval(nextSlide, intervalTime);
// 	}
// });

// prev.addEventListener("click", (e) => {
	// 	prevSlide();
	// 	if (auto) {
		// 		clearInterval(slideInterval);
		// 		slideInterval = setInterval(nextSlide, intervalTime);
		// 	}
		// });
		

slider.addEventListener("click", (ele) => { 
	auto = !auto;
	console.log(auto)
	if(auto) {
		slideInterval = setInterval(nextSlide, intervalTime);
	} else {
		clearInterval(slideInterval);
	}
});

// when the window is loaded run slides
window.addEventListener("load", (ele) => {
	console.log("window loaded")
	auto = true;
	slideInterval = setInterval(nextSlide, intervalTime);
});

const nextSlide = () => {
	// Get current class
	const current = document.querySelector(".current");
	// Remove current class
	current.classList.remove("current");
	// Check for next slide if it exist
	if (current.nextElementSibling) {
		// Add current to next sibling
		current.nextElementSibling.classList.add("current");
	} else {
		// if no more siblings add current to the start
		slides[0].classList.add("current");
	}
};

// const prevSlide = () => {
// 	// Get current class
// 	const current = document.querySelector(".current");
// 	// Remove current class
// 	current.classList.remove("current");
// 	// Check for prev slide sibling
// 	if (current.previousElementSibling) {
// 		// Add current to prev sibling
// 		current.previousElementSibling.classList.add("current");
// 	} else {
// 		// Add current to last
// 		slides[slides.length - 1].classList.add("current");
// 	}
// 	setTimeout(() => current.classList.remove("current"));
// };

// Pause auto
// slides.forEach(function (e) { // this will run 3 times no matter what this is where to debug to pause slides
// 	if(this.classListllo)
// 	this.addEventListener("click", (e) => {
// 		if(auto) {
// 			intervalTime = 5000;
// 		} else {
// 			intervalTime = 0;
// 		}
// 	});
// });

// Auto slide
// setInterval(nextSlide, intervalTime);
