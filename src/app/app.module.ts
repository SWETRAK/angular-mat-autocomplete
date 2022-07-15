import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './app.component';

import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MyAutocompleteComponent} from "./my-autocompleate/my-autocomplete.component";

@NgModule({
  declarations: [
    AppComponent,
    MyAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
