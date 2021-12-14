import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelpaymentComponent } from './tabelpayment.component';

describe('TabelpaymentComponent', () => {
  let component: TabelpaymentComponent;
  let fixture: ComponentFixture<TabelpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
