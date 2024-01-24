import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalIntermediateComponent } from './electrical-intermediate.component';

describe('ElectricalIntermediateComponent', () => {
  let component: ElectricalIntermediateComponent;
  let fixture: ComponentFixture<ElectricalIntermediateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricalIntermediateComponent]
    });
    fixture = TestBed.createComponent(ElectricalIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
