import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelicansComponent } from './pelicans.component';

describe('PelicansComponent', () => {
  let component: PelicansComponent;
  let fixture: ComponentFixture<PelicansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelicansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelicansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
