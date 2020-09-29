import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesToolbarComponent } from './routes-toolbar.component';

describe('RoutesToolbarComponent', () => {
  let component: RoutesToolbarComponent;
  let fixture: ComponentFixture<RoutesToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
