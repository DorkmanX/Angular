import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './profile-module/about/about.component';
import { TableComponent } from './profile-module/table/table.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
