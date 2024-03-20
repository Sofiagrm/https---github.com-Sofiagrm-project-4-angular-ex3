import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../models/Transaction.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css'
})
export class TransactionDetailComponent implements OnInit {


	constructor(private route: ActivatedRoute){}

  	transaction: Transaction = new Transaction('', 0, 0, '', '', '') ;

	ngOnInit() {   
		let id = this.route.snapshot.paramMap.get('id');

		console.log(id);
		
		this.getTransaction(id).then(res => {
    		this.transaction = res; 
      		console.log(res)
    	}); 
	}

	async getTransaction(id: any) {
		return await fetch('assets/json/transactions/' + id + '.json').then(response => {
			return response.json();
		});
	}



}
