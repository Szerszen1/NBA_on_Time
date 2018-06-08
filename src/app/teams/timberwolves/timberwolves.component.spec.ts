import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimberwolvesComponent } from './timberwolves.component';

describe('TimberwolvesComponent', () => {
  let component: TimberwolvesComponent;
  let fixture: ComponentFixture<TimberwolvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimberwolvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimberwolvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
