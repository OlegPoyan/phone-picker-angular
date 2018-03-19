import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'devices/:slug', component: DeviceDetailsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
