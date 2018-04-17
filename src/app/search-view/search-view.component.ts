import { Component, OnInit, Input } from '@angular/core';

import { Device } from '../device';
import { DevicesService } from '../devices.service';
import { FilterService } from '../filter.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})

export class SearchViewComponent implements OnInit {
  devices: Device[] = [];

  constructor(private devicesService: DevicesService,
              private filterService: FilterService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.getDevices(params);
    });
    console.log(this.devices);
  }

  getDevices(params: Params): void {
    console.log(params);
    this.devicesService.getDevices(params)
    .subscribe(devices => this.devices = devices);
  }
}