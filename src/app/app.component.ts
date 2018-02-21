import { Component, OnInit } from '@angular/core';

import { PropertiesService } from './properties-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tableData: Array<any> = [];

  constructor(private propertiesService: PropertiesService) {

  }

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    this.propertiesService.getProperties().subscribe((res) => {
      this.tableData = res;
    });
  }

}
