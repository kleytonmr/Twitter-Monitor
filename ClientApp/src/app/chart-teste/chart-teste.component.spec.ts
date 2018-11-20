import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTesteComponent } from './chart-teste.component';

describe('ChartTesteComponent', () => {
  let component: ChartTesteComponent;
  let fixture: ComponentFixture<ChartTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
