import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { CampaignIdService } from '../services/campaign-id.service';
import { Location } from '@angular/common'
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  idLista;
  matcher = new ErrorStateMatcher();
  contactos;

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  formContacto: FormGroup;

  private buildForm(){
    this.formContacto = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private campaignIdService: CampaignIdService, private _location: Location) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.idLista = this.campaignIdService.campaignId;
  }

  postContacto(){
    let headers = new HttpHeaders();
      headers = headers.append('X-Auth-Token','api-key 91tsu7f4nj3ty3z8yrtnc1y43p58uv13');
      headers = headers.set('Content-Type','application/json');

    this.http.post<any>('https://cors-anywhere.herokuapp.com/https://api.getresponse.com/v3/contacts',{
        "name": this.formContacto.get('name').value,
        "campaign":{"campaignId":this.idLista},
        "email": this.formContacto.get('email').value
    },
    {headers})
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(["/detallesLista"]);
      },
      err => {
          console.log(err);
      }
    );  
  }

  back(){
    this.router.navigate(["/detallesLista"]);
  }

  getContacts(){
    this.idLista = this.campaignIdService.campaignId;

    let headers = new HttpHeaders();
      headers = headers.append('X-Auth-Token','api-key 91tsu7f4nj3ty3z8yrtnc1y43p58uv13');
      headers = headers.set('Content-Type','application/json');

      this.http.get<any>('https://api.getresponse.com/v3/campaigns/'+this.idLista+'/contacts',
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
