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
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [],
})
export class PlayersComponent implements OnInit {
  playersForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
  });
  orders$: any;
  players: any;
  currentPage: string = '';
  constructor(
    public router: Router,
    public activateRoute: ActivatedRoute,
    // public firestore: Firestore,
    public orderService: OrderService
  ) {
    // const collection = collection(firestore, 'items');
    // this.orders$ = collectionData(collection);
  }
  ngOnInit() {
    console.log(this.orders$);
    if (
      this.orderService.currentPlayers &&
      this.orderService.currentPlayers.length > 0
    ) {
      this.players = this.orderService.currentPlayers;
    } else {
      this.players = this.orderService._getPlayers();
    }
  }

  addPlayer() {
    this.players.push(this.playersForm.value);
    this.playersForm.reset();
    this.orderService.currentPlayers = this.players;
  }

  goToSchedule() {
    this.orderService.currentPlayers = this.players;
    this.router.navigate(['Schedule']);
  }
}
