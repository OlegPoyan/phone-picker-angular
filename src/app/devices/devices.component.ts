import { Component, OnInit, Input } from '@angular/core';

import { Device } from '../device';
import { DevicesService } from '../devices.service';
import { FilterService } from '../filter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];
  params = {title: ''};

  constructor(private devicesService: DevicesService,
              private filterService: FilterService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.getDevices();
    console.log(this.devices);
  }

  getDevices(): void {
    try {
      this.params.title = this.route.snapshot.paramMap.get('params');
    } catch(e) {}

    console.log('This is Params: ' + this.params.title);
    this.devicesService.getDevices(this.params)
      .subscribe(devices => this.devices = devices);
  }
}
