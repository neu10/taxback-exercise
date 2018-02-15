import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { TransactionsService } from "../../../services/transactions.service";

@Component({
    selector: 'view-transaction',
    templateUrl: './view-transaction.pug'
})

export class ViewTransactionComponent{
    user;
    private transactionDetails;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private transactionService : TransactionsService
    ) {
        this.route.params.subscribe((params) => {
            let txnId = +params['id'];
            this.getUserTransactionById(txnId);
        })
    }

    getUserTransactionById(id){
        this.user = this.transactionService.get('selectedUser');
        if(this.user){
            let payload = {
                user : this.user,
                txnId : id
            };
            this.transactionService.getUserTransactionById(payload).subscribe((response : any)=>{
                if(response && response.status === 200 && !response.data.error){
                    this.transactionDetails = response.data;
                }else{
                    alert('Error while getting all transactionDetails of ' +id);
                }
            })
        }else{
            alert('Please select a user');
            this.router.navigate(['/']);
        }
    }

}