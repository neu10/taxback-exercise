import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'delete-transaction',
    templateUrl: './delete-transaction.component.pug'
})
export class DeleteTransactionComponent {

    @Output() deletionAgreed = new EventEmitter<boolean>();
    @Input() txn;

    deleteTxn(value){
        this.deletionAgreed.emit(value);
    }
}