import { Component, OnInit } from '@angular/core';
// import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
// import { TopBarComponent } from './top-bar/top-bar.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('app component');
  }
}
