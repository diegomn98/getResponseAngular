import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesListaComponent } from './detalles-lista.component';

describe('DetallesListaComponent', () => {
  let component: DetallesListaComponent;
  let fixture: ComponentFixture<DetallesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
