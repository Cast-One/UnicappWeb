import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSummaryDialogComponent } from './purchase-summary-dialog.component';

describe('PurchaseSummaryDialogComponent', () => {
  let component: PurchaseSummaryDialogComponent;
  let fixture: ComponentFixture<PurchaseSummaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseSummaryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseSummaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
