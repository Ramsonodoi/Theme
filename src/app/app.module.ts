import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomthemeComponent } from './customtheme/customtheme.component';
import { FormsModule } from '@angular/forms';
import { CustomnavbarComponent } from './customnavbar/customnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomthemeComponent,
    CustomnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
