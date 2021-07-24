import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelListingRoutingModule } from './hotel-listing-routing.module';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    HotelListingRoutingModule
  ],
  exports: [
    ItemComponent
  ]
})
export class HotelListingModule { }
