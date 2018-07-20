export default function ({color = 'red', padding = '1rem', text}) {
	return `
<div class="tpl" style="color: ${color}; padding: ${padding}">
	${text}	
</div>
	`;
};