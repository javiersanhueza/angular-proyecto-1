import { Component, OnInit } from '@angular/core';

import { DemoService } from './common/services/demo.service';
import { BadgeService } from './common/services/badge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proyecto-angular';
  text: any;
  countTv = 0;

  constructor(
    private demoService: DemoService,
    private badgeService: BadgeService
  ) {}

  ngOnInit(): void {
    this.badgeService.channelBadge.subscribe((value) => {
      if (value) {
        this.countTv = this.countTv + 1;
      }
    });
  }

  array() {
    return new Array(this.countTv + 1);
  }
}
