import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticHandComponent } from './robotic-hand.component';

describe('RoboticHandComponent', () => {
  let component: RoboticHandComponent;
  let fixture: ComponentFixture<RoboticHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticHandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
