import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterenceComponent } from './interence.component';

describe('InterenceComponent', () => {
  let component: InterenceComponent;
  let fixture: ComponentFixture<InterenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
