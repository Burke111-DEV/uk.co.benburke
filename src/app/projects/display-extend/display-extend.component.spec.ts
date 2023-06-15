import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayExtendComponent } from './display-extend.component';

describe('DisplayExtendComponent', () => {
  let component: DisplayExtendComponent;
  let fixture: ComponentFixture<DisplayExtendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayExtendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
