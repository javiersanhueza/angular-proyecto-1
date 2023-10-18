import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { ITv } from '../models/tv.interface';

@Injectable()
export class CalculateService {
  private subject: BehaviorSubject<number> = new BehaviorSubject(0);
  channelCalculate: Observable<number> = this.subject.asObservable();

  setOptionsTv(tvOptions: ITv): void {
    const price = this.calculatePrice(tvOptions);
    this.subject.next(price);
  }

  getPrice(): number {
    return this.subject.getValue();
  }

  calculatePrice(tvOptions: ITv): number {
    let price = 0;

    if (tvOptions.color === '#9c27b0') {
      price = price + 50;
    }

    if (tvOptions.resolution === '4K ULTRA HD') {
      price = price + 200;
    }

    if (tvOptions.tamanio === '10 pulgadas') {
      price = price + 20;
    }

    return price;
  }
}
