import { Component, OnInit } from '@angular/core';
import transaction_list from '../../assets/json/transaction_list/transactions.json';

@Component({
	selector: 'app-transaction-list',
	templateUrl: './transaction-list.component.html',
	styleUrls: ['./transaction-list.component.css'],
})

export class TransactionListComponent implements OnInit{

	transaction_list: any;
	time = Date.now();
	currentSort: string = '';

 	constructor() {
 		this.transaction_list = transaction_list;
		console.log(transaction_list);
		setInterval(() => {
			this.time = Date.now();
		}, 1000);
	}

	ngOnInit(): void {
		this.resetChevron();	
	}

	orderByDate() {
		if(this.currentSort === 'date') {
			this.transaction_list = this.transaction_list.reverse();
			document.getElementById('date')!.getElementsByTagName('i')[0].className='bi bi-chevron-up';
		}
		else {
			this.transaction_list = this.transaction_list.toSorted(this.sortByDate);
			document.getElementById('date')!.getElementsByTagName('i')[0].className='bi bi-chevron-down';
		}
		this.currentSort = 'date';
		this.resetChevron();
	}

	orderByLabel() { 
		if(this.currentSort === 'label') {
			this.transaction_list = this.transaction_list.reverse();
			document.getElementById('label')!.getElementsByTagName('i')[0].className='bi bi-chevron-up';
		}
		else {
			this.transaction_list = this.transaction_list.toSorted(this.sortByLabel);
			document.getElementById('label')!.getElementsByTagName('i')[0].className='bi bi-chevron-down';
		}
		this.currentSort = 'label';
		this.resetChevron();
	}

	orderByAmount() { 
		if(this.currentSort === 'amount') {
			this.transaction_list = this.transaction_list.reverse();
			document.getElementById('amount')!.getElementsByTagName('i')[0].className='bi bi-chevron-up';
		}
		else {
			this.transaction_list = this.transaction_list.toSorted(this.sortByAmount);
			document.getElementById('amount')!.getElementsByTagName('i')[0].className='bi bi-chevron-down';
		}
		this.currentSort = 'amount';
		this.resetChevron();
	}

	orderByBalance() { 
		if(this.currentSort === 'balance') {
			this.transaction_list = this.transaction_list.reverse();
			document.getElementById('balance')!.getElementsByTagName('i')[0].className='bi bi-chevron-up';
		}
		else {
			this.transaction_list = this.transaction_list.toSorted(this.sortByBalance);
			document.getElementById('balance')!.getElementsByTagName('i')[0].className='bi bi-chevron-down';
		}
		this.currentSort = 'balance';
		this.resetChevron();
	}

	sortByDate(a: any, b: any) {
		return (new Date(a.date)).getTime() - (new Date(b.date)).getTime();
	}

	sortByBalance(a: any, b: any) {
		return parseFloat(a.balance) - parseFloat(b.balance);
	}

	sortByAmount(a: any, b: any) {
		return parseFloat(a.amount) - parseFloat(b.amount);
	}

	sortByLabel(a: any, b: any) {
		if (a.label < b.label ) {
			return -1;
		} else if (a.label > b.label) {
			return 1;
		}
		return 0;
	}

	resetChevron() {
		if(this.currentSort !== 'date') {
			document.getElementById('date')!.getElementsByTagName('i')[0].className='bi bi-chevron-expand';
		}
		if(this.currentSort !== 'label') {
			document.getElementById('label')!.getElementsByTagName('i')[0].className='bi bi-chevron-expand';
		}
		if(this.currentSort !== 'balance') {
			document.getElementById('balance')!.getElementsByTagName('i')[0].className='bi bi-chevron-expand';
		}
		if(this.currentSort !== 'amount') {
			document.getElementById('amount')!.getElementsByTagName('i')[0].className='bi bi-chevron-expand';
		}
	}
}