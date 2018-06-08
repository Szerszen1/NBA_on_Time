import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacersComponent } from './pacers.component';

describe('PacersComponent', () => {
  let component: PacersComponent;
  let fixture: ComponentFixture<PacersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
