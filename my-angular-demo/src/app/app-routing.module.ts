import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DiyFormComponent } from "./diy-form/diy-form.component";

const routes: Routes = [
    { path: 'diyForm', component: DiyFormComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }