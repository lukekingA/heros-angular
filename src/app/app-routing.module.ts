import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'heros', component: HerosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
