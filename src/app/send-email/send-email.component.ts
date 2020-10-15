import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignIdService } from '../services/campaign-id.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  idLista;

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  formNewsletter: FormGroup;

  private buildForm(){
    this.formNewsletter = new FormGroup({
      name: new FormControl('',[Validators.required]),
      subject: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      text: new FormControl('',[Validators.required])
    });
  }

  constructor(private router: Router, private http: HttpClient, private campaignIdService: CampaignIdService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.idLista = this.campaignIdService.campaignId;
  }

  back(){
    this.router.navigate(["/detallesLista"]);
  }

  postNewsletter(){
    let headers = new HttpHeaders();
      headers = headers.append('X-Auth-Token','api-key 91tsu7f4nj3ty3z8yrtnc1y43p58uv13');
      headers = headers.set('Content-Type','application/json');

      this.http.post<any>('https://cors-anywhere.herokuapp.com/https://api.getresponse.com/v3/newsletters',{
        "name": this.formNewsletter.get('name').value,
        "type": "broadcast",
        "subject": this.formNewsletter.get('subject').value,
        "editor": "custom",
        "campaign":{"campaignId":this.idLista},
        "fromField": {
            "fromFieldId": "8rd8N"
        },
        "content": {
            "html": "<h1>"+this.formNewsletter.get('title').value+"</h1><br>"+this.formNewsletter.get('text').value,
            "plain": null
        },
        "sendSettings": {
            "timeTravel": "false",
            "perfectTiming": "true",
            "selectedCampaigns": [this.idLista],
            "selectedSegments": [],
            "selectedSuppressions": [],
            "excludedCampaigns": [],
            "excludedSegments": []
        }
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

}
