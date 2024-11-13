// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import this for API calls
import { AppComponent } from './app.component';
import { ApiService } from './api.service'; // Import your ApiService
import { CommonModule } from '@angular/common'; 

@NgModule({
  declarations: [
    AppComponent // Add your components here
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Make sure this is included for HTTP requests
    CommonModule, 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent] // The main component to bootstrap
})
export class AppModule {}
