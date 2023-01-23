import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  public _saveProperty(payload: any) {
    // return this.http.post<any[]>(`${this.apiUrl}api/v1/encompassclient/createEncompassclient`, payload);
  }

  public _getProperty(propertyId: any) {
    let properties = this._getProperties();
    let listing;
    properties.forEach((property) => {
      if (property.id == propertyId) {
        listing = property;
      }
    });

    return listing;
  }

  /** GET get single Encompassclient record */
  public _getProperties() {
    return [
      {
        id: 1,
        firstName: 'Taylor',
        lastName: 'DAddario',
        position: 'Captain',
        grade: '11',
        number: '23',
      },
      {
        id: 2,
        firstName: 'Cole',
        lastName: 'DAddario',
        position: 'Center',
        grade: '10',
        number: '7',
      },
      {
        id: 3,
        firstName: 'Matthew',
        lastName: 'Connors',
        position: 'Line Backer',
        grade: '12',
        number: '33',
      },
    ];
    // return this.http.get<any[]>(`${this.apiUrl}api/v1/EncompassClient/searchEncompassclient?GUID=${Guid}`);
  }
}
