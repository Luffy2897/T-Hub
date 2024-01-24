import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItIntermediateComponent } from './it-intermediate.component';

describe('ItIntermediateComponent', () => {
  let component: ItIntermediateComponent;
  let fixture: ComponentFixture<ItIntermediateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItIntermediateComponent]
    });
    fixture = TestBed.createComponent(ItIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
