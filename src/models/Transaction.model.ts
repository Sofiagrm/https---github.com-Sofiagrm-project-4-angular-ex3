export class Transaction {
	id: string = '';
	amount!: number;
	balance!: number;
	label: string = '';
	date!: Date;
	description: string = '';

	constructor (id: string, amount: number, balance: number, label: string, date: string, description: string) {
		this.id = id;
		this.amount = amount;
		this.balance = balance;
		this.label = label;
		this.date = new Date(date);
		this.description = description;
	}
};