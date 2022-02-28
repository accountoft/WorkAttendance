import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AbsencesComponent } from './absences/absences.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Users', component: UsersComponent},
  { path: 'Absences', component: AbsencesComponent},
  { path: 'Settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
