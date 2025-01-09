import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, withComponentInputBinding } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AuthenticationComponent } from "./authentication/authentication.component";
import { routes } from './app.routes';



@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule, RouterModule.forRoot(routes, { ...withComponentInputBinding() }),
    CommonModule,
  ]
})
export class AppModule { }
