import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DevicesComponent } from './devices/devices.component';
import { DevicesService } from './devices.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DeviceDetailsComponent,
    DevicesComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DevicesService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
