import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';

import { BindComponent } from './bind/bind.component';
import { TrackComponent } from './track/track.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MasterComponent } from './master/master.component';
import { SchoolComponent } from './school/school.component';
import { ArrayComponent } from './array/array.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PopComponent } from './pop/pop.component';
import { TableComponent } from './table/table.component';
import { DashComponent } from './dash/dash.component';
import { PollComponent } from './poll/poll.component';

import { ValidationComponent } from './validation/validation.component';
import { FunComponent } from './fun/fun.component';
const routes: Routes = [
  {path:'react' , component: ReactiveComponent},
  
  {path:'bind' , component: BindComponent},
  {path:'track' , component: TrackComponent},
  {path:'parent' , component: ParentComponent},
  {path:'child' , component: ChildComponent},
  {path:'master' , component: MasterComponent},
  {path:'school' , component: SchoolComponent},
  {path:'array' , component: ArrayComponent},
  {path:'login' , component: LoginComponent},
  {path:'home' , component: HomeComponent},

  {path:'table' , component: TableComponent},
  
  {path:'pop' , component: PopComponent},
  
  {path:'dash' , component: DashComponent},
  {path:'poll' , component: PollComponent},
  {path:'fun' , component: FunComponent},
  {path:'valid' , component: ValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
