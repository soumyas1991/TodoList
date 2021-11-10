import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchPipe } from './search.pipe';
import { SortDirective } from './directive/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    SearchPipe,
    SortDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
