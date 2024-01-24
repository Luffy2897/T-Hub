import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItBasicComponent } from './it-basic.component';

describe('ItBasicComponent', () => {
  let component: ItBasicComponent;
  let fixture: ComponentFixture<ItBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItBasicComponent]
    });
    fixture = TestBed.createComponent(ItBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
