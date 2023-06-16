import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpetAppsComponent } from './vpet-apps.component';

describe('VpetAppsComponent', () => {
  let component: VpetAppsComponent;
  let fixture: ComponentFixture<VpetAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpetAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VpetAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
