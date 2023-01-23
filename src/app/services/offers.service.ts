import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OffersService {
  constructor(private http: HttpClient) {}
}
