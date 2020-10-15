class hdImgComp {

	constructor(el) {
		this.element = el;
		this.before = el.children[0];
		this.after = el.children[1];
		this.slider = el.children[2];
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
		this.setSizePos();
		// add event listeners
		this.range.addEventListener('input', () => { this.slide() });
		this.range.addEventListener('change', () => { this.slide() });
		window.addEventListener('resize', () => { this.setSizePos() });
		window.addEventListener('orientationchange', () => { this.setSizePos() });
	}

	setSizePos() {
		// set initial size of second image container
		this.after.style.height = `${this.before.offsetHeight}px`;
		this.after.style.width = `${this.range.value}%`;
		// set initial position of slider
		this.slider.style.left = `${this.range.value}%`;
	}

	slide() {
		this.after.style.width = `${this.range.value}%`;
		this.slider.style.left = `${this.range.value}%`;
	}

}

UIkit.util.$$('.hd-image-comparison-after img').forEach(function(el) {
	el.addEventListener('load', (e) => {
		let x = new hdImgComp(e.target.parentNode.parentNode);
		x.init();
	}, {
		once: true
	});
});