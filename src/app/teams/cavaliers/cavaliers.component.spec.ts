import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CavaliersComponent } from './cavaliers.component';

describe('CavaliersComponent', () => {
  let component: CavaliersComponent;
  let fixture: ComponentFixture<CavaliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CavaliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CavaliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
