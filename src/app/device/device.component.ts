import { Component, Input, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() deviceIndex: number;
  @Input() deviceId: number;

  constructor(private deviceService: DeviceService) { 
    
  }

  ngOnInit() {
  }

  getStatus() {
    return this.deviceStatus;
  }

  getColor() {
    return this.deviceStatus === "on" ? "green" : "red";
  }

  onSwitchOn() {
    return this.deviceService.switchOnOne(this.deviceIndex);
  }

  onSwitchOff() {
    return this.deviceService.switchOffOne(this.deviceIndex);
  }
}
