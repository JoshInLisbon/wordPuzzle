import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { UserAuthenticationComponent } from './auth/user-authentication/user-authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleComponent,
    UserAuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
