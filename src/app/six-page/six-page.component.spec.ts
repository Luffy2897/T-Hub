import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixPageComponent } from './six-page.component';

describe('SixPageComponent', () => {
  let component: SixPageComponent;
  let fixture: ComponentFixture<SixPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixPageComponent]
    });
    fixture = TestBed.createComponent(SixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
