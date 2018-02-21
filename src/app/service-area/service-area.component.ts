import { Component, OnInit, Input } from '@angular/core';
import { PropertiesService } from '../properties-service.service';

@Component({
  selector: 'service-area',
  templateUrl: './service-area.component.html',
  styleUrls: ['./service-area.component.css']
})
export class ServiceAreaComponent implements OnInit {

  @Input() postCode: string;
  isInside: boolean = null;
  referencePoint: any = {
    lat: 51.5073835,
    lng: -0.1277801
  }
  radius: number = 20000; // I assume those are meters

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.isInServiceArea();
  }

  isInServiceArea() {
    this.propertiesService.getLatLong(this.postCode).subscribe((res) => {
      if (res.status === "OK" && res.results[0].geometry.location) {
        let distance = this.getDistance(res.results[0].geometry.location, this.referencePoint);
        console.log("distance, radius", distance, this.radius);
        this.isInside = distance < this.radius ? true : false;
      }
    })
  }

  rad(x) {
    return x * Math.PI / 180;
  };

  getDistance(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = this.rad(p2.lat - p1.lat);
    var dLong = this.rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meters
  };

}
