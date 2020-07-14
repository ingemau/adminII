import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';

const PagesRoute: Routes = [
    {path: '',
    component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'grafica', component: Grafica1Component},
        {path: 'progress', component: ProgressComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(PagesRoute);