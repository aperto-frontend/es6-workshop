export default function tpl({ color, text }) {
	return `
		<span style="background: ${color}">${text}</span>
	`;
}