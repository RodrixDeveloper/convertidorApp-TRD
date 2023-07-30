import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'],
})
export class ConvertidorComponent {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'BS'];

  convetir() {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.91;
        }
        if (this.quiero === 'BS') {
          this.total = this.cantidad * 6.88;
        }
        break;
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.10; 
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'BS') {
          this.total = this.cantidad * 7.60;
        }
        break;
      case 'BS':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.15;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.13;
        }
        if (this.quiero === 'BS') {
          this.total = this.cantidad;
        }
        break;

      default:
        break;
    }
  }
}
