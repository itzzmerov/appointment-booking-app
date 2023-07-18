import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTypeComponent } from './services-type.component';

describe('ServicesTypeComponent', () => {
  let component: ServicesTypeComponent;
  let fixture: ComponentFixture<ServicesTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesTypeComponent]
    });
    fixture = TestBed.createComponent(ServicesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
