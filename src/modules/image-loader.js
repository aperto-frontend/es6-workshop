export default function loadImage(url, callback) {
	let img = new Image(); // Create an image
	img.src = url;

	if (img.naturalWidth) {
		// If the browser can determine the naturalWidth the
		// image is already loaded successfully
		callback(img);
	} else {
		// Use the event listener like before, but resolve the promise after loaded ...
		img.addEventListener('load', e => callback(img));

		// or reject the promise
		img.addEventListener('error', () => {
			callback(null, new Error(`Failed to load image's URL: ${url}`));
		});
	}
}
