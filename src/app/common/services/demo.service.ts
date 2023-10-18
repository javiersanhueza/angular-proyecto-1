import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor() {
    console.log('este es el constructor del servicio demo');
  }
}
