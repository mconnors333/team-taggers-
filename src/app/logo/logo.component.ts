import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  uploadedFile: File;
  uploadedFileSrc: any;
  currentPage: string = '';

  constructor() {}

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
}
