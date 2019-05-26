import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAirPlaneComponent } from './add-airplane.component';

describe('AddAirPlaneComponent', () => {
  let component: AddAirPlaneComponent;
  let fixture: ComponentFixture<AddAirPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAirPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAirPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
