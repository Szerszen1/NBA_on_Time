import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HornetsComponent } from './hornets.component';

describe('HornetsComponent', () => {
  let component: HornetsComponent;
  let fixture: ComponentFixture<HornetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HornetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HornetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
