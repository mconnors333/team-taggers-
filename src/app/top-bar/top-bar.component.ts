import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  title = 'Real Estate Offer Tracker';
  links = ['Listings', 'Clients'];
  constructor() {}

  ngOnInit() {}
}
