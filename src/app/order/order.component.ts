import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
  providers: [OrderService, HttpClient],
})
export class OrderComponent implements OnInit {
  constructor(
    public router: Router,
    public activateRoute: ActivatedRoute,
    public propertiesService: OrderService
  ) {}

  clicked: boolean = false;

  propertyForm = new FormGroup({
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl(''),
    price: new FormControl(''),
    beds: new FormControl(''),
    baths: new FormControl(''),
    notes: new FormControl(''),
    lotSize: new FormControl(''),
    livingArea: new FormControl(''),
    image: new FormControl(''),
  });
  savePayload = {
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    price: '',
    beds: 0,
    baths: 0,
    notes: '',
    lotSize: '',
    livingArea: '',
    image: null,
  };
  properties: any;
  ngOnInit() {
    console.log('init');
    this.properties = this.propertiesService._getProperties();
  }
  addProperty() {
    console.log('property added');
    console.log(this.propertyForm.value);
    this.properties.push(this.propertyForm.value);
  }

  goToProperty(property) {
    this.router.navigate(['Offers', property.id]);
  }

  resetForm() {
    this.savePayload = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      price: '',
      beds: 0,
      baths: 0,
      notes: '',
      lotSize: '',
      livingArea: '',
      image: null,
    };
  }
}
