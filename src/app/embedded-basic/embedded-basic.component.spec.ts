import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedBasicComponent } from './embedded-basic.component';

describe('EmbeddedBasicComponent', () => {
  let component: EmbeddedBasicComponent;
  let fixture: ComponentFixture<EmbeddedBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbeddedBasicComponent]
    });
    fixture = TestBed.createComponent(EmbeddedBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
