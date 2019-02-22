// Let's define a promise function
export default function loadImage(url) {
	return new Promise((resolve, reject) => {
		let img = new Image(); // Create an image
		img.src = url;

		if (img.naturalWidth) {
			// If the browser can determine the naturalWidth the
			// image is already loaded successfully
			resolve(img);
		} else {
			// Use the event listener like before, but resolve the promise after loaded ...
			img.addEventListener('load', e => resolve(img));

			// or reject the promise
			img.addEventListener('error', () => {
				reject(new Error(`Failed to load image's URL: ${url}`));
			});
		}
	})
}
