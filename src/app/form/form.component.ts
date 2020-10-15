import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  nombre = new FormControl('',[Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private http: HttpClient) {
   }

  postContact(){
    let headers = new HttpHeaders();
      headers = headers.append('X-Auth-Token','api-key 91tsu7f4nj3ty3z8yrtnc1y43p58uv13');
      headers = headers.append("Access-Control-Allow-Origin", "*");
      headers = headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
      headers = headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
      headers = headers.set('Content-Type','application/json');
      headers = headers.set('Access-Control-Allow-Origin','http://localhost:4200');
      //console.log(headers);

      /* const body = {
        name: this.nombre.value,
        campaign: {campaignId: "WwX3O"},
        email: this.email.value
      }; */

      //let datos = JSON.stringify(body);

    this.http.post<any>('https://cors-anywhere.herokuapp.com/https://api.getresponse.com/v3/contacts',{
        name: this.nombre.value,
        campaign: {campaignId: "WwX3O"},
        email: this.email.value
    },
    {headers})
    .subscribe(
      res =>{
        console.log("Contacto Añadido");
      },
      err => {
          console.log(err);
      }
    );
  }

  getContacts(){
    let headers = new HttpHeaders();
      headers = headers.append('X-Auth-Token','api-key 91tsu7f4nj3ty3z8yrtnc1y43p58uv13');
      headers = headers.append("Access-Control-Allow-Origin", "*");
      headers = headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
      headers = headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
      headers = headers.set('Content-Type','application/json');
      headers = headers.set('Access-Control-Allow-Origin','http://localhost:4200');
      //console.log(headers);

    this.http.get<any>('https://cors-anywhere.herokuapp.com/https://api.getresponse.com/v3/contacts', {headers: headers})
    .subscribe(
      res =>{
        console.log(res);
      },
      err => {
          console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
