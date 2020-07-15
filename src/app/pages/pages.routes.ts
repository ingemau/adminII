import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';

const PagesRoute: Routes = [
    {path: 'dashboard',
    component: PagesComponent,
    children: [
        {path: '', component: DashboardComponent},
        {path: 'grafica', component: Grafica1Component},
        {path: 'progress', component: ProgressComponent}
    ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(PagesRoute)],
    exports: [RouterModule]
  })

export class PagesRouting {}