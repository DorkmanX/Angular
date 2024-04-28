import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { ProfileModuleModule } from './profile-module/profile-module.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModuleModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
