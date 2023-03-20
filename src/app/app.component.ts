import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface CryptoPrice {
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'price'];
  dataSource: MatTableDataSource<CryptoPrice> =
    new MatTableDataSource<CryptoPrice>();
}
