import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ContactIdService } from '../services/contact-id.service';
import { Location } from '@angular/common'
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CampaignIdService } from '../services/campaign-id.service';

@Component({
  selector: 'app-modificar-contacto',
  templateUrl: './modificar-contacto.component.html',
  styleUrls: ['./modificar-contacto.component.css']
})
export class ModificarContactoComponent implements OnInit {

  nameContacto;
  emailContacto;
  idContacto;
  idLista;
  matcher = new ErrorStateMatcher();

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  formModificar: FormGroup;

  private buildForm(){
    this.formModificar = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  constructor(private campaignIdService: CampaignIdService, private contactIdService: ContactIdService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private _location: Location) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.idLista = this.campaignIdService.campaignId;
    this.idContacto = this.contactIdService.idContacto;
    this.nameContacto = this.contactIdService.nameContacto;
    this.emailContacto = this.contactIdService.emailContacto;
  }

  back(){
    this.router.navigate(["/detallesLista"]);
  }

  modificarContacto(){
    let headers = new HttpHeaders();
      headers = headers.append('X-Auth-Token','api-key 91tsu7f4nj3ty3z8yrtnc1y43p58uv13');
      headers = headers.set('Content-Type','application/json');

    this.http.post<any>('https://cors-anywhere.herokuapp.com/https://api.getresponse.com/v3/contacts/'+this.idContacto,{
        "name": this.formModificar.get('name').value,
        "campaign":{"campaignId": this.idLista},
        "email": this.formModificar.get('email').value
    },
    {headers})
    .subscribe(
      res =>{
        console.log("Contacto Modificado");
        this.router.navigate(["/detallesLista"]);
      },
      err => {
          console.log(err);
      }
    );
  }

}
