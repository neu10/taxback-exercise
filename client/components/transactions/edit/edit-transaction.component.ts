import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import {TransactionsService} from "../../../services/transactions.service";
import moment = require("moment");

@Component({
    selector: 'edit-transaction',
    templateUrl: './edit-transaction.pug'
})

export class EditTransactionComponent {

    @Input() user;
    @Input() transaction;
    @Output() editedTransaction = new EventEmitter<any>();
    private currencies;
    constructor(
        private route: ActivatedRoute,
        private transactionService : TransactionsService
    ) {
        this.currencies = this.transactionService.getCurrencies();
    }

    updateTransaction(data){
        data.user = this.user;
        data.txn_date =  moment(data.txn_date).format('YYYY-MM-DD');
        this.transactionService.updateUserTransaction(data).subscribe((response : any)=>{
            if(response && response.status === 200 && !response.data.error){
                this.editedTransaction.emit(true);
                alert('Details updated successfully');
            }else{
                alert('Error while updating the transaction '+JSON.stringify(response.data.error));
            }
        })
    }

    ngAfterViewInit(){
        <any>$('select').material_select();
    }

}