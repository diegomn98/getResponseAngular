import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CampaignIdService } from '../services/campaign-id.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  listas;

  constructor(private http: HttpClient, private campaignIdService: CampaignIdService) { }

  ngOnInit(): void {
    let headers = new HttpHeaders();
      headers = headers.append('X-Auth-Token','api-key 91tsu7f4nj3ty3z8yrtnc1y43p58uv13');
      headers = headers.append("Access-Control-Allow-Origin", "*");
      headers = headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
      headers = headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
      headers = headers.set('Content-Type','application/json');
      headers = headers.set('Access-Control-Allow-Origin','http://localhost:4200');

    this.http.get<any>('https://cors-anywhere.herokuapp.com/https://api.getresponse.com/v3/campaigns', {headers: headers})
    .subscribe(
      datos =>{
        this.listas = datos;
        console.log(this.listas);
      },
      err => {
          console.log(err);
      }
    );
  }

  getContactos(campaignId){
    this.campaignIdService.campaignId = campaignId;
  }
}
