import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import {TransactionsService} from "../../../services/transactions.service";
import moment = require("moment");

@Component({
    selector: 'add-transaction',
    templateUrl: './add-transaction.pug'
})

export class AddTransactionComponent {

    @Input() user;
    @Output() addedTransaction = new EventEmitter<any>();
    private transactionDetails = {};
    private currencies;
    constructor(
        private route: ActivatedRoute,
        private transactionService : TransactionsService
    ) {
        this.currencies = this.transactionService.getCurrencies();
    }

    addTransaction(data){
        data.user = this.user;
        data.txn_date = moment(data.txn_date).format('YYYY-MM-DD');
        console.log(data);
        this.transactionService.addUserTransaction(data).subscribe((response : any)=>{
            if(response && response.status === 200 && !response.data.error){
                alert('Transaction added successfully');
                this.addedTransaction.emit(true)
            }else{
                alert('Error while adding the transaction '+JSON.stringify(response.data.error));
            }
        })
    }

    ngAfterViewInit(){
        <any>$('select').material_select();
    }

}