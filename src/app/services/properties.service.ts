import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PropertiesService {
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
        address1: '115 Bishop Street',
        address2: 'Apt A',
        city: 'Pawtucket',
        state: 'Rhode Island',
        zipcode: '02860',
        price: '420000',
        beds: 3,
        baths: 2,
        notes: 'Talk to Matt-Mew',
        lotSize: '10000',
        livingArea: '2500',
        image:
          'https://maps.googleapis.com/maps/api/streetview?location=115+Bishop+St%2C+Pawtucket%2C+RI+02860&size=576x432&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=Wq_zvn_RHht4sG9pg38yMh781p8=',
      },
      {
        id: 2,
        address1: '16 Rockledge Ave',
        address2: 'Apt A',
        city: 'Pawtucket',
        state: 'Rhode Island',
        zipcode: '02860',
        price: '1420000',
        beds: 2,
        baths: 2,
        notes: 'Talk to Matt-Mew',
        lotSize: '10000',
        livingArea: '2500',
        image:
          'https://www.compass.com/m/452fc893427b8ecedae25f082cf39b7ae592050c_img_0_3/origin.jpg',
      },
      {
        id: 3,
        address1: '57 Charlton Ave',
        address2: 'Apt A',
        city: 'Pawtucket',
        state: 'Rhode Island',
        zipcode: '02860',
        price: '320000',
        beds: 2,
        baths: 2,
        notes: 'Talk to Matt-Mew',
        lotSize: '10000',
        livingArea: '2500',
        image:
          'https://images.vgsi.com/photos2/PawtucketRIPhotos///00/06/33/98.jpg',
      },
    ];
    // return this.http.get<any[]>(`${this.apiUrl}api/v1/EncompassClient/searchEncompassclient?GUID=${Guid}`);
  }
}
