
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
var img = document.getElementsByClassName("gallery__img"); // array of images
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var left = document.getElementsByClassName("left");
// iterate all array of img[i]
for (let i = 0; i < img.length; i++) {
	img[i].onclick = function () {
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
		var height = this.clientHeight;
		document.getElementsByClassName(
			"left"
		).style.top = height.toString();
	};
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
};
