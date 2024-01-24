import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedIntermediateComponent } from './embedded-intermediate.component';

describe('EmbeddedIntermediateComponent', () => {
  let component: EmbeddedIntermediateComponent;
  let fixture: ComponentFixture<EmbeddedIntermediateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbeddedIntermediateComponent]
    });
    fixture = TestBed.createComponent(EmbeddedIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
