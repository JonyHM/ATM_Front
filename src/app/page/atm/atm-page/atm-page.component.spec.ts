import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmPageComponent } from './atm-page.component';

describe('AtmPageComponent', () => {
  let component: AtmPageComponent;
  let fixture: ComponentFixture<AtmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
