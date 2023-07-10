import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomthemeComponent } from './customtheme/customtheme.component';
import { FormsModule } from '@angular/forms';
import { CustomnavbarComponent } from './customnavbar/customnavbar.component';
import { ThemeService, initializeThemeService } from './theme.service';

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
  providers: [
    ThemeService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeThemeService,
      deps: [ThemeService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
