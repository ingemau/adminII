import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NogageComponent } from './shared/nogage/nogage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const AppRoute: Routes = [
    {path: '',
    component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'grafica', component: Grafica1Component},
        {path: 'progress', component: ProgressComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NogageComponent}
];

export const APP_ROUTE = RouterModule.forRoot(AppRoute, {useHash : true} ) ;