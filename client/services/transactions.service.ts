import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {CommonHTTPService} from './common-http.service';


@Injectable()

export class TransactionsService {

    // Variables
    private observable  :            Observable<any>;
    private uri         :            string = location.origin;

    constructor(
        private http:  CommonHTTPService
    ){}

    get(key){
        return this[key];
    }

    set(key, value){
        this[key] = value;
    }

    getCurrencies(){
        return [{
            id: 1,
            name: 'INR'
        }, {
            id: 2,
            name: 'GBP'
        }, {
            id: 3,
            name: 'USD'
        }, {
            id: 3,
            name: 'EUR'
        }];
    }

    getAllTransactions(payload) {
        let data = {
            'url' : '/getAllTxns',
            'data': payload
        };
        let observable;
        observable = this.http.post(data).map((response: any) => {
            return response
        });

        return observable;
    }

    getUserTransactionById(payload) {
        let data = {
            'url' : '/getUserTransactionById',
            'data': payload
        };
        let observable;
        observable = this.http.post(data).map((response: any) => {
            return response
        });

        return observable;
    }
    addUserTransaction(payload) {
        let data = {
            'url' : '/addUserTransaction',
            'data': payload
        };
        console.log(data);
        let observable;
        observable = this.http.post(data).map((response: any) => {
            return response
        });

        return observable;
    }

    updateUserTransaction(payload) {
        let data = {
            'url' : '/updateTransaction',
            'data': payload
        };
        console.log(data);
        let observable;
        observable = this.http.post(data).map((response: any) => {
            return response
        });

        return observable;
    }

    deleteTransaction(payload) {
        let data = {
            'url' : '/deleteTransaction',
            'data': payload
        };
        console.log(data);
        let observable;
        observable = this.http.post(data).map((response: any) => {
            return response
        });

        return observable;
    }
}