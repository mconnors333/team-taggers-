import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../services/properties.service';
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [PropertiesService],
})
export class OffersComponent implements OnInit {
  listing: any;
  constructor(
    public router: Router,
    public activateRoute: ActivatedRoute,
    public propertiesService: PropertiesService
  ) {}

  ngOnInit() {
    let urlSplit = this.router.url.split('/');
    let url = urlSplit[urlSplit.length - 1];

    this.listing = this.propertiesService._getProperty(url);
    console.log('this.listing');
    console.log(this.listing);
  }
}
