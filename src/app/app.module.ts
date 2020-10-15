import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {enableProdMode} from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListasComponent } from './listas/listas.component';
import { CrearListaComponent } from './crear-lista/crear-lista.component';
import { RouterModule, Routes } from '@angular/router';
import { DetallesListaComponent } from './detalles-lista/detalles-lista.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ModificarContactoComponent } from './modificar-contacto/modificar-contacto.component';
import { SendEmailComponent } from './send-email/send-email.component';

enableProdMode();

const routes: Routes = [
  { path: '', component: ListasComponent, pathMatch: 'full' },
  { path: 'crearLista', component: CrearListaComponent },
  { path: 'listas', component: ListasComponent },
  { path: 'detallesLista', component: DetallesListaComponent },
  { path: 'addContact', component: AddContactComponent },
  { path: 'modificarContacto', component: ModificarContactoComponent },
  { path: 'sendEmail', component: SendEmailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListasComponent,
    CrearListaComponent,
    DetallesListaComponent,
    AddContactComponent,
    ModificarContactoComponent,
    SendEmailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
