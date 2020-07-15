import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NogageComponent } from './nogage/nogage.component';

import { PagesRouting } from './pages/pages.routes';
import { AuthRouting } from './auth/auth.routes';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', component: NogageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRouting,
    AuthRouting
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
