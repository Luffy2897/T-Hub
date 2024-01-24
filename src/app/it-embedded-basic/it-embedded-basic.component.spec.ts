import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItEmbeddedBasicComponent } from './it-embedded-basic.component';

describe('ItEmbeddedBasicComponent', () => {
  let component: ItEmbeddedBasicComponent;
  let fixture: ComponentFixture<ItEmbeddedBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItEmbeddedBasicComponent]
    });
    fixture = TestBed.createComponent(ItEmbeddedBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
