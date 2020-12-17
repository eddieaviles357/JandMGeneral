// Get the modal
let modal = document.querySelector("#galleryModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
let current = document.querySelector("#current");	// selected IMG
let galleryItem = document.querySelectorAll(".gallery__item"); // IMG'S Parent
let modalImgBottom = document.querySelectorAll(".modal-content--bottom"); // IMG'S
// let captionText = document.querySelector("#caption"); // EXPERIMENTAL
let arrLeft = document.querySelector(".arrows--left");
let arrRight = document.querySelector(".arrows--right");

let prev;
let next;

galleryItem.forEach(function(img, idx) {
	modalImgBottom[idx].src = img.firstElementChild.src;

	img.firstElementChild.addEventListener(	"click", function(e) {
		let height = this.clientHeight;
		modal.style.display = "block";

		current.style.width = "100%";
		current.style.height = "60%";

		current.src = this.src;
		// captionText.innerHTML = this.alt;

		if(modalImgBottom[idx].src === current.src) {
			// make the clicked image display as visited
			prev = img.previousElementSibling;
			next = img.nextElementSibling;

			modalImgBottom[idx].style.opacity = 1;
		}
	})
})

arrLeft.addEventListener("click", (e) => {
	current.src = prev.nextElementSibling.children[0].src;
})

		// Give the small lower img's a click event to display as the main IMG
modalImgBottom.forEach((img, idx) => {
	img.addEventListener("click", (e) => {
		img.style.opacity = 1;
		current.src = galleryItem[idx].firstElementChild.src;
	})
})

let span = document.querySelector(".close"); // get the span that has close

// Remove the modals' visibility from the window
span.addEventListener("click", (e) => {
	modal.style.display = "none";
	console.log("closed modal")
})