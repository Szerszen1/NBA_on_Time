import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatComponent } from './heat.component';

describe('HeatComponent', () => {
  let component: HeatComponent;
  let fixture: ComponentFixture<HeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
