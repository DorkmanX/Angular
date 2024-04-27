import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModuleModule } from './profile-module/profile-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
