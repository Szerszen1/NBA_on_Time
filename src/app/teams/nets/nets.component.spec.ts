import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetsComponent } from './nets.component';

describe('NetsComponent', () => {
  let component: NetsComponent;
  let fixture: ComponentFixture<NetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
