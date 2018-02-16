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
    MatDialogModule, DateAdapter,
} from '@angular/material';
import { EditTransactionComponent } from "../../components/transactions/edit/edit-transaction.component";
import moment = require("moment");
import { DeleteTransactionComponent } from "../../components/transactions/delete/delete-transaction.component";

const MY_DATE_FORMATS = {
    parse: {
        dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
    },
    display: {
        // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        dateInput: 'input',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'DD MMM YYYY',
        monthYearA11yLabel: 'MMM YYYY',
    }
};

export class MyDateAdapter extends NativeDateAdapter {
    format(date: Date, displayFormat: any): any {
        if (displayFormat == "input") {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return year + '-'+this._to2digit(month) + '-' + this._to2digit(day);
        } else {
            return moment(date).format(displayFormat);
        }
    }

    private _to2digit(n: number) {
        return ('00' + n).slice(-2);
    }
}

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        TransactionsRoutingModule,
        MatSelectModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MatDialogModule
    ],
    providers: [
        {  provide: DateAdapter, useClass: MyDateAdapter },
        {  provide: MD_DATE_FORMATS, useValue: MY_DATE_FORMATS },
        ],
    declarations: [
        TransactionsComponent,
        AddTransactionComponent,
        ViewTransactionComponent,
        EditTransactionComponent,
        DeleteTransactionComponent
    ],
    exports: [
        TransactionsComponent,
        AddTransactionComponent,
        ViewTransactionComponent,
        EditTransactionComponent,
        DeleteTransactionComponent
    ]
})
export class TransactionsModule { }