import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClippersComponent } from './clippers.component';

describe('ClippersComponent', () => {
  let component: ClippersComponent;
  let fixture: ComponentFixture<ClippersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClippersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
