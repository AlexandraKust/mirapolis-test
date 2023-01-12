let a = window.addEventListener("click", function (event) {
	if (event.target.classList.contains('tree-btn-open')) {

		const item = event.target.closest('.tree-nav__item');
		const button = item.querySelector('.tree-nav__btn');
		const content = item.querySelector('.tree-nav__body');
		const icon = item.querySelector('.tree-nav__icon');

		item.classList.toggle('open');
		button.classList.toggle('open');
		content.classList.toggle('open');
		icon.classList.toggle('open');
	};
});
