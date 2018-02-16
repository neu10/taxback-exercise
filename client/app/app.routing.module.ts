import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'transactions',
        pathMatch: 'full'
    }, {
        path: 'transactions',
        loadChildren: '../../client/modules/transactions/transactions.module#TransactionsModule'
    }, {
        path: '**',
        redirectTo : '/'
    }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);