import { ColorCircleModule } from 'ngx-color/circle';

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { TotalModule } from '../total/total.module';
import { OptionsTvComponent } from './options-tv.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ColorCircleModule,
    MatSlideToggleModule,
    MatSelectModule,
    TotalModule
  ],
  exports: [OptionsTvComponent],
  declarations: [OptionsTvComponent],
  providers: []
})
export class OptionTvModule {}
