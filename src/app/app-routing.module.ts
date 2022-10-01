import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomationComponent } from './automation/automation.component';
import { HomeComponent } from './home/home.component';
import { PantryComponent } from './pantry/pantry.component';
import { PetComponent } from './pet/pet.component';


const routes: Routes = [
  {path: 'despensa', component: PantryComponent},
  {path: 'pet', component: PetComponent},
  {path: 'automacao', component: AutomationComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
