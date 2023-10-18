import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private subject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  channelBadge: Observable<boolean> = this.subject.asObservable();

  addTv() {
    this.subject.next(true);
  }
}
