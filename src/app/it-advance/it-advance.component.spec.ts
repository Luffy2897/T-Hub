import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAdvanceComponent } from './it-advance.component';

describe('ItAdvanceComponent', () => {
  let component: ItAdvanceComponent;
  let fixture: ComponentFixture<ItAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItAdvanceComponent]
    });
    fixture = TestBed.createComponent(ItAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
