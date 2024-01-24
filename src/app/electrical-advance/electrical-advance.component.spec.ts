import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalAdvanceComponent } from './electrical-advance.component';

describe('ElectricalAdvanceComponent', () => {
  let component: ElectricalAdvanceComponent;
  let fixture: ComponentFixture<ElectricalAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricalAdvanceComponent]
    });
    fixture = TestBed.createComponent(ElectricalAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
