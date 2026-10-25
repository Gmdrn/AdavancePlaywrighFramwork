import { faker } from '@faker-js/faker';

export interface Credentials {
	username: string;
	password: string;
}

export interface CheckoutCustomer {
	firstName: string;
	lastName: string;
	postalCode: string;
}

export interface UserProfile extends Credentials, CheckoutCustomer {
	email: string;
	fullName: string;
	phone: string;
}

export class DataGenerator {
	static username(): string {
		return faker.internet.username();
	}

	static password(): string {
		return faker.internet.password({ length: 12, memorable: false });
	}

	static credentials(): Credentials {
		return {
			username: this.username(),
			password: this.password(),
		};
	}

	static checkoutCustomer(): CheckoutCustomer {
		return {
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			postalCode: faker.location.zipCode(),
		};
	}

	static userProfile(): UserProfile {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();

		return {
			...this.credentials(),
			firstName,
			lastName,
			postalCode: faker.location.zipCode(),
			email: faker.internet.email({ firstName, lastName }),
			fullName: `${firstName} ${lastName}`,
			phone: faker.phone.number(),
		};
	}
}

export function generateUserCredentials(): Credentials {
	return DataGenerator.credentials();
}
