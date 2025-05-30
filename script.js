

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
        $figure.find('.task, .descriptiontext').toggle();
        $figure.find('.webimage').toggle();
        $figure.find('.wordsatbottomofcard').addClass('loop-animate');
        $figure.find('.pinkarrow').toggle().addClass('display-block');
      });

      $('#gallery').on('click', '.task, .descriptiontext', function () {
        const $figure = $(this).closest('figure');
        $figure.find('.webimage').toggle();
        $figure.find('.task, .descriptiontext').toggle();
         $figure.find('.pinkarrow').toggle().removeClass('display-block');
         $figure.find('.wordsatbottomofcard').removeClass('loop-animate');
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

function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    for (let [name, value] of formData.entries()) {
        if (value.trim() === "") {
            alert("Please fill out all fields in order for your message to be sent.");
            return;
        }
    }

    fetch(form.action, {
        method: "POST",
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert("Message sent!");
                form.reset();
            } else {
                alert("There was a problem sending your message.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was a problem sending your message.");
        });
}


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}