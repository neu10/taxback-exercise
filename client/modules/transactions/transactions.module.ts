import { NgModule }                      from "@angular/core";
import { FormsModule }                   from "@angular/forms";
import { CommonModule }                  from '@angular/common';
import { HttpModule }                    from "@angular/http";
import { TransactionsRoutingModule }             from './transactions.routing.module';

// Import all the components
import { TransactionsComponent }                 from '../../components/transactions/all/transactions-home.component';
import {AddTransactionComponent} from "../../components/transactions/add/add-transaction.component";
import {ViewTransactionComponent} from "../../components/transactions/view/view-transaction.component";
import {
    MatSelectModule, MdNativeDateModule, NativeDateAdapter, MD_DATE_FORMATS,
    MdDatepickerModule,
    MatDialogModule,
} from '@angular/material';
import { EditTransactionComponent } from "../../components/transactions/edit/edit-transaction.component";



@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        TransactionsRoutingModule,
        MatSelectModule,
        MdDatepickerModule,
        MatDialogModule
    ],
    providers: [
    ],
    declarations: [
        TransactionsComponent,
        AddTransactionComponent,
        ViewTransactionComponent,
        EditTransactionComponent
    ],
    exports: [
        TransactionsComponent,
        AddTransactionComponent,
        ViewTransactionComponent,
        EditTransactionComponent
    ]
})
export class TransactionsModule { }