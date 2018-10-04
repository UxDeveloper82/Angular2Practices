import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { PersonalComponent } from './personal/personal.component';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './_services/data.service';
import { AboutComponent } from './components/about/about.component';


const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'about', component: AboutComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    PersonalComponent,
    AddListingFormComponent,
    UserComponent,
    AboutComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
