import { PostcodeComponent } from './postcode/postcode.component';
import { SuburbComponent } from './suburb/suburb.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyComponent } from './daily/daily.component';

const routes: Routes = [
  {
    path: 'daily',
    component: DailyComponent
  },
  {
    path: 'suburb',
    component: SuburbComponent
  },
  {
    path: 'postcode',
    component: PostcodeComponent
  },
  { path: '',
    redirectTo: '/daily',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
