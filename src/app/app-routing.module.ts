import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';


const routes: Routes = [
  {path: 'puzzle', component: PuzzleComponent},
  { path: '',
    redirectTo: '/puzzle',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
