const title = document.querySelectorAll(".title");

const titleOptions = {
	root: null, // viewport
	threshold: 0,
	rootMargin: "0px"
};

const titleObserver = 
    new IntersectionObserver(titleObsCb, titleOptions);

function titleObsCb(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("interGallHeader")
            }
            // entry.target.classList.toggle("interGallHeader")
        })
    };

// observe all the title nodes
title.forEach(title => {
    titleObserver.observe(title)
})