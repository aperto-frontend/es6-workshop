class Person {
	/**
	 * Create person.
	 * @param {String} firstname - First Name
	 * @param {String} lastname - Last Name
	 */
	constructor(firstname, lastname) {
		this.firstName = firstname;
		this.lastName = lastname;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	set fullName(name) {
		const names = name.toString().split(' ');
		this.firstName = Person.uppercaseName(names[ 0 ] || '');
		this.lastName = names[ 1 ] || '';
	}

	static uppercaseName(name) {
		return name.toUpperCase();
	}
}

class Teacher extends Person {

	constructor(field, firstname = 'Emma', lastname = 'Watson') {
		super(firstname, lastname);

		this.field = field;
	}

	printInfo() {
		return `The main field of ${this.fullName} is ${this.field}`;
	}
}