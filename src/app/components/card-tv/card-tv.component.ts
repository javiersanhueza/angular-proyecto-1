import { Component } from '@angular/core';

import { BadgeService } from '../../common/services/badge.service';

@Component({
  selector: 'app-card-tv',
  templateUrl: './card-tv.component.html',
  styleUrls: ['./card-tv.component.scss']
})
export class CardTvComponent {
  isDisabledButton = false;
  constructor(private badgeService: BadgeService) {}

  saveTv(): void {
    this.isDisabledButton = true;
    this.badgeService.addTv();
  }
}
