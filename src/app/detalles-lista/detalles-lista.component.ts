import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CampaignIdService } from '../services/campaign-id.service';
import { ContactIdService } from '../services/contact-id.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-lista',
  templateUrl: './detalles-lista.component.html',
  styleUrls: ['./detalles-lista.component.css']
})
export class DetallesListaComponent implements OnInit {

  idLista;
  contactos;

  constructor(private contactIdService: ContactIdService, private http: HttpClient, private campaignIdService: CampaignIdService, private _router: Router) { }

  ngOnInit(): void {
    this.getContactos();
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

  borrarContacto(idContacto){
    this.ngOnInit();
    this.contactIdService.idContacto = idContacto;
    let headers = new HttpHeaders();
      headers = headers.append('X-Auth-Token','api-key 91tsu7f4nj3ty3z8yrtnc1y43p58uv13');
      headers = headers.set('Content-Type','application/json');

      this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://api.getresponse.com/v3/contacts/'+this.contactIdService.idContacto,
      {headers}).subscribe(
      borrado =>{
        console.log("Contacto Borrado");
        this.getContactos();
      },
      err => {
          console.log(err);
      }
    );
  }

  modificarContacto(idContacto, nameContacto, emailContacto){
    this.contactIdService.idContacto = idContacto;
    this.contactIdService.nameContacto = nameContacto;
    this.contactIdService.emailContacto = emailContacto;
  }
}
