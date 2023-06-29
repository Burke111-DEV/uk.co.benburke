import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycloidGeneratorComponent } from './cycloid-generator.component';

describe('CycloidGeneratorComponent', () => {
  let component: CycloidGeneratorComponent;
  let fixture: ComponentFixture<CycloidGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CycloidGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycloidGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
