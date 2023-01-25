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
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  providers: [OrderService],
})
export class LogoComponent implements OnInit {
  uploadedFile: File;
  uploadedFileSrc: any;
  currentPage: string = '';

  constructor(
    public router: Router,
    public activateRoute: ActivatedRoute,
    public orderService: OrderService
  ) {}
  ngOnInit() {}

  loadFile(event: Event) {
    console.log(this.uploadedFile);
    console.log(event.target);

    if (
      (<HTMLInputElement>event.target).files &&
      (<HTMLInputElement>event.target).files[0]
    ) {
      const file = (<HTMLInputElement>event.target).files[0];

      const reader = new FileReader();
      reader.onload = (e) => (this.uploadedFileSrc = reader.result);

      reader.readAsDataURL(file);
    }
    this.uploadedFileSrc = URL.createObjectURL(this.uploadedFile);
  }

  goToSummary() {
    this.router.navigate(['Summary']);
  }
  goBack() {
    this.router.navigate(['Schedule']);
  }
}
