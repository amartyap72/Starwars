import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full'
  },
  {
    path: 'films',
    component: FilmsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
