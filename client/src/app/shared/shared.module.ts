import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { PagerComponent } from './pager/pager.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
<<<<<<< HEAD
import { OrderTotalsComponent } from './order-totals/order-totals.component';
=======
>>>>>>> cd2de5e1567cd5dcf92e0d1fe3549bb6b0466cd6


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
<<<<<<< HEAD
    CarouselModule,
    OrderTotalsComponent
=======
    CarouselModule
>>>>>>> cd2de5e1567cd5dcf92e0d1fe3549bb6b0466cd6
  ]
})
export class SharedModule { }
