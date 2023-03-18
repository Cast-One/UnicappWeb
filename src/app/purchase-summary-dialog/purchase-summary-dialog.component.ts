import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-summary-dialog',
  templateUrl: 'purchase-summary-dialog.component.html',
})
export class PurchaseSummaryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
