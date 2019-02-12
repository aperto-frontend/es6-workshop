function saySaying(name = 'Ellis') {
	return `Just saying my name, which is ${name}`;
}

export default function saySomething(name) { return saySaying(name); }
