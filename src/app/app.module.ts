import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

//Tiempo local
import localeEs from "@angular/common/locales/es";
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData} from "@angular/common"
registerLocaleData(localeEs, "es")

import { LoginComponent } from './login/login.component';

import { Seguimiento5laModule } from './seguimiento5la/seguimiento5la.module';
import {AngularMaterialModule} from "./shared/angularMaterial.module"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,

    Seguimiento5laModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
