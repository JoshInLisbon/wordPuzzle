import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { UserAuthenticationComponent } from './auth/user-authentication/user-authentication.component';


const routes: Routes = [
  {path: 'puzzle', component: PuzzleComponent},
  {path: 'login', component: UserAuthenticationComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
