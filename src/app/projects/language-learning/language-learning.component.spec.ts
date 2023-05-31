import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageLearningComponent } from './language-learning.component';

describe('LanguageLearningComponent', () => {
  let component: LanguageLearningComponent;
  let fixture: ComponentFixture<LanguageLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
