import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { ProductPageModule } from '../product/product.module';
import { ProductPage } from '../product/product.page';


import { WomenPage } from './women.page';
const routes: Routes = [
  {
    path: '',
    component: WomenPage  
  },
  {
    path : "product/:id",
    component : ProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomenPageRoutingModule {}


