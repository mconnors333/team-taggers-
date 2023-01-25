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
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  players: any;
  games: any;
  uploadedFile: File;
  uploadedFileSrc: any;
  currentPage: string = '';
  constructor(
    public router: Router,
    public activateRoute: ActivatedRoute,
    public orderService: OrderService
  ) {}

  ngOnInit() {
    this.players = this.orderService._getPlayers();
    this.games = this.orderService._getSchedule();
  }
}
