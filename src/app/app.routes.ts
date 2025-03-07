import { R3SelectorScopeMode } from '@angular/compiler';
import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddUserComponent } from './component/add-user/add-user.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'records',
        pathMatch: 'full'
    },
    {
        path: 'records',
        component:DashboardComponent
    },
    {
        path: 'add-records',
        component: AddUserComponent
    }
];
