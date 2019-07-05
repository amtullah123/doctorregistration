import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecializationComponent } from './specialization/specialization.component';

const routes: Routes = [{ path: 'specialization', component:SpecializationComponent }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
