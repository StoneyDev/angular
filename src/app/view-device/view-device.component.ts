import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-view-device',
  templateUrl: './view-device.component.html',
  styleUrls: ['./view-device.component.scss']
})
export class ViewDeviceComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject) => {
      const DATE = new Date();
      setTimeout(() => {
        resolve(DATE);
      },2000)
    }
  );

  devices: any[];

  constructor(private deviceService: DeviceService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.devices = this.deviceService.devices;
  }

  onTurnOn() {
    this.deviceService.switchOnAll();
  }

  onTurnOff() {
    this.deviceService.switchOffAll();
  }
}
