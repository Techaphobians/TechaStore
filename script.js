const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navigation__nav-list');
	const navLinks = document.querySelectorAll('.navigation__nav-list li');

	burger.addEventListener(`click`, () => {
		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.3
				}s`;
			}
		});

		burger.classList.toggle('toggle');
	});
};

navSlide();
