const slider = document.querySelectorAll(".slider ");
const navHeader = document.querySelector("header");

const navOptions = {
  root: null, // viewport
  threshold: 0,
  rootMargin: "-100px"
}

const sliderObserver = 
  new IntersectionObserver(navIntObsCb , navOptions);


function navIntObsCb(entries, observer) {
  // console.log(entries)
    if(entries.isIntersecting) {
      /// need to add class to the navbar not this one
      navHeader.classList.toggle("interNav");
      // navHeaderChilds[0].classList.add("interNav");
      // console.log('worked')
    }
};

sliderObserver.observe(slider[0]);