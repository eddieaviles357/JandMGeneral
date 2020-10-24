const title = document.querySelectorAll(".title");
// console.log(service)
const options = {
	root: null, // viewport
	threshold: 0,
	rootMargin: "0px",
};

const observer = 
    new IntersectionObserver(callBackFunc, options);

function callBackFunc(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("interGallHeader")
            }
            // entry.target.classList.toggle("interGallHeader")
        })
    };

// observe all the title nodes
title.forEach(serv => {
    observer.observe(serv)
})