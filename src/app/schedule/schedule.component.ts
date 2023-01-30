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
  providers: [],
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
  state$: any;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public orderService: OrderService
  ) {}

  ngOnInit() {
    if (
      this.orderService.currentSchedule &&
      this.orderService.currentSchedule.length > 0
    ) {
      this.games = this.orderService.currentPlayers;
    } else {
      this.games = this.orderService._getSchedule();
    }
  }

  addGame() {
    console.log(this.scheduleForm.value);
    this.games.push(this.scheduleForm.value);
    this.scheduleForm.reset();
    this.orderService.currentSchedule = this.games;
  }
  goToLogo() {
    this.orderService.currentSchedule = this.games;
    this.router.navigate(['Logo']);
  }
  goBack() {
    this.router.navigate(['Players']);
  }
}
