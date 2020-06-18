import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCountryComponent } from './current-country.component';

describe('CurrentCountryComponent', () => {
  let component: CurrentCountryComponent;
  let fixture: ComponentFixture<CurrentCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
