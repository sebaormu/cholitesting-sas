import { Routes } from '@angular/router';
import { IndexComponent } from './index-component/index-component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent }
];

