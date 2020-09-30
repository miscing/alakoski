import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandheldMenuComponent } from './handheld-menu.component';

describe('HandheldMenuComponent', () => {
  let component: HandheldMenuComponent;
  let fixture: ComponentFixture<HandheldMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandheldMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandheldMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
