import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CampaignIdService } from './campaign-id.service';

@Injectable({
  providedIn: 'root'
})
export class GetContactoService {

  idLista;
  contactos;

  constructor(private http: HttpClient, private campaignIdService: CampaignIdService) {

  }

  getContactos(){
    this.idLista = this.campaignIdService.campaignId;

    let headers = new HttpHeaders();
      headers = headers.append('X-Auth-Token','api-key 91tsu7f4nj3ty3z8yrtnc1y43p58uv13');
      headers = headers.set('Content-Type','application/json');

      this.http.get<any>('https://cors-anywhere.herokuapp.com/https://api.getresponse.com/v3/campaigns/'+this.idLista+'/contacts',
        {headers}).subscribe(
        datos =>{
          this.contactos = datos;
          console.log(datos);
        },
        err => {
            console.log(err);
        }
      );
    }

}
