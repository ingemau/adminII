import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NogageComponent } from './shared/nogage/nogage.component';
import { RegisterComponent } from './login/register.component';

const AppRoute: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NogageComponent}
];

export const APP_ROUTE = RouterModule.forRoot(AppRoute, {useHash : true} ) ;