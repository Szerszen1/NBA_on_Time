import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnicksComponent } from './knicks.component';

describe('KnicksComponent', () => {
  let component: KnicksComponent;
  let fixture: ComponentFixture<KnicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
