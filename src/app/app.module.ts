// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

// Rutas

// Componentes
import { AppComponent } from './app.component';
import { NogageComponent } from './nogage/nogage.component';

@NgModule({
  declarations: [
    AppComponent,
    NogageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
