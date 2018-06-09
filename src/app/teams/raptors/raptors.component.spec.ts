import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptorsComponent } from './raptors.component';

describe('RaptorsComponent', () => {
  let component: RaptorsComponent;
  let fixture: ComponentFixture<RaptorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaptorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaptorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
