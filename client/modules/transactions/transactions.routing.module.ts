import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components to use
import { TransactionsComponent }        from '../../components/transactions/all/transactions-home.component';
import { ViewTransactionComponent } from "../../components/transactions/view/view-transaction.component";


const routes: Routes = [{
    path: '',
    children : [{
        path : '',
        component: TransactionsComponent
    },{
        path : ':id',
        component: ViewTransactionComponent
    },]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TransactionsRoutingModule {

    constructor() {
    }
}