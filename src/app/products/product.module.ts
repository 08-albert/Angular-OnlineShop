import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetaliComponent } from './product-detali.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from './products-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetaliComponent,
    ConvertToSpacesPipe,
  ],
  imports: [ 
    RouterModule.forChild([
      {path: 'products',component: ProductListComponent},
      
      {path: 'products/:id',
      canActivate: [ProductsDetailGuard],
       component: ProductDetaliComponent
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
