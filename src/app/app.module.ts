import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Import bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';

// Import forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



/*

Source article for this code.

https://itnext.io/creating-forms-inside-modals-with-ng-bootstrap-221e4f1f5648

*/


@NgModule({
  declarations: [
    AppComponent,
    FormModalComponent
  ],
  imports: [


    BrowserModule,


    /* This allows us to simply import NgbModule in other components that wants
       to use the toolkit of the library.
    */
   NgbModule.forRoot(),

   /* This example needs both template based forms, and model based forms. */
   FormsModule,
   ReactiveFormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],


  entryComponents: [
    FormModalComponent
  ]
})
export class AppModule { }
