.hd-image-comparison {
	position: relative;
	display: inline-flex;
}

.hd-image-comparison .hd-image-comparison-before {
	position: absolute;
	top: 0px;
	left: 0px;
	overflow: hidden;
}

.hd-image-comparison-before img {
	max-width: none;
}

.hd-image-comparison .hd-image-comparison-slider {
	padding: 10px;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.hd-image-comparison-slider svg {
	max-width: none;
}

.hd-image-comparison-range {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	height: 100%;
	width: 100%;
	opacity: 0;
}
