import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFormComponent } from './info-form.component';

describe('InfoFormComponent', () => {
  let component: InfoFormComponent;
  let fixture: ComponentFixture<InfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoFormComponent]
    });
    fixture = TestBed.createComponent(InfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
