import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder,FormArray }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule} from '@angular/forms';

import {SoubhagyaService} from './Soubhagya.Service';
import { BindComponent } from './bind/bind.component';
import { FormsModule } from '@angular/forms';
import { TrackComponent } from './track/track.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MasterComponent } from './master/master.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SchoolComponent } from './school/school.component';
import {MatCardModule} from '@angular/material/card';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ArrayComponent } from './array/array.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { PopComponent } from './pop/pop.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
// import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { PollComponent } from './poll/poll.component';
import { FunComponent } from './fun/fun.component';
import { ValidationComponent } from './validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    
    BindComponent,
    TrackComponent,
    ParentComponent,
    ChildComponent,
    MasterComponent,
    SchoolComponent,
    ArrayComponent,
    LoginComponent,
    HomeComponent,
    PopComponent,
    TableComponent,
    DashComponent,
    PollComponent,
    FunComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCardModule,
    AutocompleteLibModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule ,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    FlexLayoutModule
    
  ],
  exports:[
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [SoubhagyaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
