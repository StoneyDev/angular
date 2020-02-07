import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { FormsModule } from '@angular/forms';
import { DeviceService } from './services/device.service';
import { AuthComponent } from './auth/auth.component';
import { ViewDeviceComponent } from './view-device/view-device.component'
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { FourOfFourComponent } from './four-of-four/four-of-four.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'devices', canActivate: [AuthGuard], component: ViewDeviceComponent },
  { path: 'devices/:id', canActivate: [AuthGuard], component: SingleDeviceComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: ViewDeviceComponent },
  { path: '404', component: FourOfFourComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    AuthComponent,
    ViewDeviceComponent,
    SingleDeviceComponent,
    FourOfFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
