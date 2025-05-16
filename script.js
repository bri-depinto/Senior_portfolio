

const vue_app = Vue.createApp({
      data() {
          return {
              websites: []
          };
      },
      mounted(){
         // DOM is now rendered, safe to add jQuery listeners
    $('#gallery').on('click', '.webimage', function () {
        const $figure = $(this).closest('figure');
        $figure.find('.task, .descriptiontext').fadeIn();
        $figure.find('.webimage').fadeOut();
      });

      $('#gallery').on('click', '.task, .descriptiontext', function () {
        const $figure = $(this).closest('figure');
        $figure.find('.webimage').fadeIn();
        $figure.find('.task, .descriptiontext').fadeOut();
      });

    },
      created() {
          fetch('websites.json')
              .then(response => response.json())
              .then(json => {
                  this.websites = json;
              })
              .catch(error => console.error("Error fetching data:", error));
      }
  });
  
  vue_app.mount("#vue_app")

"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();

let nav = document.querySelector('.navbar');
let navHeight = parseInt(getComputedStyle(nav).height, 10);

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > navHeight - (navHeight * 0.8)) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
});

// Button on scroll function that does not cut off div
function scrollToSection(id) {
  const element = document.getElementById(id);
  const offset = navHeight + 125;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth"
  });
}




