//For the Hamburger Toggler------------------------------------------------------------------------------------
class NavSlide {
	constructor() {
		this.burger = document.querySelector('.burger');
		this.nav = document.querySelector('.navigation__nav-list');
		this.navLinks = document.querySelectorAll('.navigation__nav-list li');
	}

	navAnimation() {
		this.nav.classList.toggle('nav-active');

		this.navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.3
				}s`;
			}
		});

		this.burger.classList.toggle('toggle');
	}
}

const navslide = new NavSlide();

navslide.burger.addEventListener(`click`, () => {
	navslide.navAnimation();
});
// -------------------------------------------------------------------------------------------------

//For the ToTop Button
const toTop =  document.querySelector(".toTop");

window.addEventListener('scroll',() =>{
if(window.pageYOffset > 100){
	toTop.style.display = 'block'
}
else
	toTop.style.display = 'none';

})




