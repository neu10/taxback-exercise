import { Component }                    from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TransactionsService} from "../../../services/transactions.service";

@Component({
    selector: 'transactions',
    templateUrl: './transactions-home.pug',
    styleUrls: ['./transactions-home.scss']
})

export class TransactionsComponent {

    private allTransactions;
    private selectedUser = 'priya@gmail.com';
    private showingAddForm: boolean;
    private selectedTransactionToEdit: any;
    private showingEditForm: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private transactionService : TransactionsService
    ) { }

    getAllTransactions(selectedUser){
        this.transactionService.set('selectedUser',selectedUser);
        this.showingAddForm = false;
        let payload = {
            user : this.selectedUser
        };
        this.transactionService.getAllTransactions(payload).subscribe((response : any)=>{
            if(response && response.status === 200 && !response.data.error){
                this.allTransactions = response.data;
                console.log(this.allTransactions);
            }else{
                alert('Error while getting all transactions '+JSON.stringify(response.data.error));
            }
        })
    }

    addUserTransaction(email){
        this.transactionService.set('selectedUser',email);
        this.showingAddForm = true;
        this.showingEditForm = false;
    }

    viewTransaction(txn){
        let url = '/transactions/'+txn.id;
        this.router.navigateByUrl(url);
    }

    editTransaction(txn){
        this.showingAddForm = false;
        this.showingEditForm = true;
        this.selectedTransactionToEdit = txn;
        //let url = '/transactions/'+txn.id;
        // this.router.navigateByUrl(url);
    }

    hideEditForm(event){
        if(event){
           this.showingEditForm = false;
        }
    }

    deleteTransaction(id){

    }

}