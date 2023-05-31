import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HAnglesExtractionToolComponent } from './h-angles-extraction-tool.component';

describe('HAnglesExtractionToolComponent', () => {
  let component: HAnglesExtractionToolComponent;
  let fixture: ComponentFixture<HAnglesExtractionToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HAnglesExtractionToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HAnglesExtractionToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
