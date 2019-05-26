import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAirPlaneComponent } from './lista-airplane.component';

describe('ListaAirPlaneComponent', () => {
  let component: ListaAirPlaneComponent;
  let fixture: ComponentFixture<ListaAirPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAirPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAirPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
