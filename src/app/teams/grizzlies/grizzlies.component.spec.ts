import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrizzliesComponent } from './grizzlies.component';

describe('GrizzliesComponent', () => {
  let component: GrizzliesComponent;
  let fixture: ComponentFixture<GrizzliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrizzliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrizzliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
