import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailblazersComponent } from './trailblazers.component';

describe('TrailblazersComponent', () => {
  let component: TrailblazersComponent;
  let fixture: ComponentFixture<TrailblazersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailblazersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailblazersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
