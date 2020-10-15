import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-lista',
  templateUrl: './crear-lista.component.html',
  styleUrls: ['./crear-lista.component.css']
})
export class CrearListaComponent implements OnInit {

  form: FormGroup;

  getErrorMessage() {
    return this.form.get('nombreLista').hasError('required') ? 'You must enter a value' :
      '';
  }

  private buildForm(){
    this.form = new FormGroup({
      nombreLista: new FormControl('',[Validators.required])
    });
  }

  constructor(private router: Router, private http: HttpClient) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  postLista(){
    let headers = new HttpHeaders();
      headers = headers.append('X-Auth-Token','api-key 91tsu7f4nj3ty3z8yrtnc1y43p58uv13');
      headers = headers.set('Content-Type','application/json');

      this.http.post<any>('https://cors-anywhere.herokuapp.com/https://api.getresponse.com/v3/campaigns',{
        "name": this.form.get('nombreLista').value
    },
    {headers})
    .subscribe(
      datos =>{
        console.log("Campaña Añadida");
        this.router.navigate(["/listas"]);
      },
      err => {
          console.log(err);
      }
    );
  }

}
