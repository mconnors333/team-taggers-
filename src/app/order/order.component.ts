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
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService, HttpClient],
})
export class OrderComponent implements OnInit {
  constructor(
    public router: Router,
    public activateRoute: ActivatedRoute,
    public orderService: OrderService
  ) {}

  clicked: boolean = false;

  orderForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    position: new FormControl(''),
    grade: new FormControl(''),
    number: new FormControl(''),
  });
  savePayload = {
    firstName: '',
    lastName: '',
    position: '',
    grade: '',
    number: '',
  };
  players: any;
  ngOnInit() {
    console.log('init');
    this.players = this.orderService._getProperties();
  }
  addPlayer() {
    console.log('property added');
    console.log(this.orderForm.value);
    this.players.push(this.orderForm.value);
  }

  resetForm() {
    this.savePayload = {
      firstName: '',
      lastName: '',
      position: '',
      grade: '',
      number: '',
    };
  }
}
