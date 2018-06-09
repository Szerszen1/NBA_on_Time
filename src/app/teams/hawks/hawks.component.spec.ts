import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HawksComponent } from './hawks.component';

describe('HawksComponent', () => {
  let component: HawksComponent;
  let fixture: ComponentFixture<HawksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
