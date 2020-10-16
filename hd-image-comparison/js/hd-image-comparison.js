class hdImgComp {

	constructor(el) {
		this.element = el;
		this.before = el.querySelector('.hd-image-comparison-before');
		this.beforeimg = el.querySelector('.hd-image-comparison-before img');
		this.afterimg = el.querySelector('.hd-image-comparison-after img');
		this.slider = el.querySelector('.hd-image-comparison-slider');
		this.range = document.createElement('input');
		this.range.type = 'range';
		this.range.min = '0';
		this.range.max = '100';
		this.range.value = (0 <= this.slider.dataset.start <= 100) ? this.slider.dataset.start : 50;
		this.range.style.marginLeft = `calc(-1 * (${this.slider.dataset.margin}px + 20px) / 2)`;
		this.range.style.width = `calc(100% + (${this.slider.dataset.width}px + 20px))`;
		this.range.classList.add('hd-image-comparison-range');
		el.insertBefore(this.range, this.slider);
	}

	init() {
		// set initial sizes and positions
		this.setSizePos();
		// add event listeners
		this.range.addEventListener('input', () => { this.slide() });
		this.range.addEventListener('change', () => { this.slide() });
		window.addEventListener('resize', () => { this.setSizePos() });
		window.addEventListener('orientationchange', () => { this.setSizePos() });
	}

	setSizePos() {
		// reset initial width of element container
		this.element.style.width = 'auto';
		// set initial size of before image container
		this.before.style.height = `${this.afterimg.offsetHeight}px`;
		this.before.style.width = `${this.range.value}%`;
		// set initial width of element container
		this.element.style.width = `${this.afterimg.offsetWidth}px`;
		// set initial width of before image
		this.beforeimg.style.width = `${this.afterimg.offsetWidth}px`;
		// set initial position of slider
		this.slider.style.left = `${this.range.value}%`;
	}

	slide() {
		// update width of before image container
		this.before.style.width = `${this.range.value}%`;
		// update position of slider
		this.slider.style.left = `${this.range.value}%`;
	}

}

UIkit.util.$$('.hd-image-comparison-after img').forEach(function(el) {
	el.addEventListener('load', (e) => {
		let x = new hdImgComp(e.target.closest('.hd-image-comparison'));
		x.init();
	}, {
		once: true
	});
});
