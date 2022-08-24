import { InjectionToken, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompComponent } from './new-comp/new-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

const routes: Routes = [
  {path:'new-comp',component:NewCompComponent},
  {path:'second-comp',component:SecondCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
