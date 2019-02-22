export default function ({ color = 'red', padding = '1rem', text, imgs }) {
	const imageRender = () => {
		if (!imgs) return '';

		return `
		<div class="images">
		${imgs.map((img) => {
			return `
				<div class="image"><img src="${img.src}" alt="${img.alt}"></div>
			`
		})}	
	</div>
		`
	};
	return `
<div class="tpl" style="color: ${color}; padding: ${padding}">
	${text}
	${imageRender()}
</div>
	`;
};
