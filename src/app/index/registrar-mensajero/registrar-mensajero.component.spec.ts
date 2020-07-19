import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMensajeroComponent } from './registrar-mensajero.component';

describe('RegistrarMensajeroComponent', () => {
  let component: RegistrarMensajeroComponent;
  let fixture: ComponentFixture<RegistrarMensajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarMensajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMensajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
