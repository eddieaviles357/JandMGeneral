const slides = document.querySelectorAll(".slide");
// const next = document.querySelector("#next");
// const prev = document.querySelector("#prev");
let auto = true; // Auto scroll
let intervalTime = 5000; // 5 seconds
let slideInterval;

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
	if(auto) {

		setTimeout(() => current.classList.remove("current"));
	} else {
		clearInterval(slideInterval)
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
slides.forEach(function (e) {
	e.addEventListener("click", (e) => {
		auto = !auto;
		if(auto) {
			intervalTime = 5000;
		} else {

			intervalTime = 0
		}
		console.log(auto);
	});
});

if (auto) {
	// Run next slide at interval time
	slideInterval = setInterval(nextSlide, intervalTime);
} else {
	clearInterval(slideInterval);
}
// Auto slide
// setInterval(nextSlide, intervalTime);
