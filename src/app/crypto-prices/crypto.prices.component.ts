import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
import { MatTableDataSource } from '@angular/material/table';

interface CryptoPrice {
  name: string;
  current_price: number;
  image: string;
}

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.css'],
})
export class CryptoPricesComponent implements OnInit {
  @Output() cryptoData = new EventEmitter<CryptoPrice[]>();
  displayedColumns: string[] = ['name', 'price'];
  dataSource = new MatTableDataSource<CryptoPrice>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<CryptoPrice[]>('http://127.0.0.1:8000/currencies')
      .subscribe((data) => {
        this.dataSource.data = data;
      });
  }
}
