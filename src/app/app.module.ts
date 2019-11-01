import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleService } from './services/title.service';
import { MainComponent } from './components/main/main.component';
import { ConfigService } from './services/config.service';
import { SecondComponent } from './components/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TitleService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
