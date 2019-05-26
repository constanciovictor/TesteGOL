import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAirPlaneComponent } from './edita-airplane.component';

describe('EditaAirplaneComponent', () => {
  let component: EditaAirPlaneComponent;
  let fixture: ComponentFixture<EditaAirPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaAirPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAirPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
