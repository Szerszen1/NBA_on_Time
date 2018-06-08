import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpursComponent } from './spurs.component';

describe('SpursComponent', () => {
  let component: SpursComponent;
  let fixture: ComponentFixture<SpursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
