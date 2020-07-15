import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PagesRouting } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Grafica1Component,
        ProgressComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        Grafica1Component,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        PagesRouting,
        FormsModule,
        ComponentsModule
    ]
})

export class PagesModule {

}
