import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
import { MatTableDataSource } from '@angular/material/table';

interface CryptoPrice {
  name: string;
  price: number;
}

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.css'],
})
export class CryptoPricesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price'];
  dataSource = new MatTableDataSource<CryptoPrice>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    interface PriceData {
      bitcoin: number;
      ethereum: number;
      litecoin: number;
    }

    this.http
      .get<PriceData>(`${enviroment.apiUrl}/prices`)
      .subscribe((data) => {
        const cryptoPrices: CryptoPrice[] = Object.entries(data).map(
          ([name, price]) => ({ name, price })
        );
        this.dataSource.data = cryptoPrices;
      });
  }
}
