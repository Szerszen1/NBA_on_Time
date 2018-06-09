import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelticsComponent } from './celtics.component';

describe('CelticsComponent', () => {
  let component: CelticsComponent;
  let fixture: ComponentFixture<CelticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
