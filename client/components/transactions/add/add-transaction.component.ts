import {Component, Input} from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import {TransactionsService} from "../../../services/transactions.service";

@Component({
    selector: 'add-transaction',
    templateUrl: './add-transaction.pug'
})

export class AddTransactionComponent {

    @Input() user;
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
        this.transactionService.addUserTransaction(data).subscribe((response : any)=>{
            if(response && response.status === 200 && !response.data.error){
                alert('Transaction added successfully');
            }else{
                alert('Error while adding the transaction '+JSON.stringify(response.data.error));
            }
        })
    }

    ngAfterViewInit(){
        <any>$('select').material_select();
    }

}