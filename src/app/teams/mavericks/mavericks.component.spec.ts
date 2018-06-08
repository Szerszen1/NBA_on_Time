import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MavericksComponent } from './mavericks.component';

describe('MavericksComponent', () => {
  let component: MavericksComponent;
  let fixture: ComponentFixture<MavericksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MavericksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MavericksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
