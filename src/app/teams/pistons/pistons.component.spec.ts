import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PistonsComponent } from './pistons.component';

describe('PistonsComponent', () => {
  let component: PistonsComponent;
  let fixture: ComponentFixture<PistonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PistonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PistonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
