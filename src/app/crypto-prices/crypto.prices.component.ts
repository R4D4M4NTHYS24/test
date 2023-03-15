import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.css'],
})
export class CryptoPricesComponent {
  prices: { name: string; value: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${enviroment.apiUrl}/prices`).subscribe((data: any) => {
      this.prices = Object.entries(data).map(([name, value]) => ({
        name,
        value: Number(value),
      }));
    });
  }
}
