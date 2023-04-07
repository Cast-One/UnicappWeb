import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-purchase-summary-dialog',
  templateUrl: './purchase-summary-dialog.component.html',
  styleUrls: ['./purchase-summary-dialog.component.scss'],
})
export class PurchaseSummaryDialogComponent {
  userCode: string = "";
  amountToPay: number = 0;

  constructor(
    public dialogRef: MatDialogRef<PurchaseSummaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, private service: ApiService
  ) {}

  numbersOnly(event: KeyboardEvent): boolean {
    const charCode = event.charCode;
    if (charCode >= 48 && charCode <= 57) {
      return true;
    }
    event.preventDefault();
    return false;
  }
}
