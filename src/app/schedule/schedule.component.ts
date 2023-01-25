import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  scheduleForm = new FormGroup({
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    opponent: new FormControl('', Validators.required),
  });
  currentPage: string = '';
  games: any;
  constructor(
    public router: Router,
    public activateRoute: ActivatedRoute,
    public orderService: OrderService
  ) {}

  ngOnInit() {
    this.games = this.orderService._getSchedule();
  }

  addGame() {
    console.log('property added');
    console.log(this.scheduleForm.value);
    this.games.push(this.scheduleForm.value);
    this.scheduleForm.reset();
  }
}
