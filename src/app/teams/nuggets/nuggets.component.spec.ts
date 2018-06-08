import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuggetsComponent } from './nuggets.component';

describe('NuggetsComponent', () => {
  let component: NuggetsComponent;
  let fixture: ComponentFixture<NuggetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuggetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuggetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
