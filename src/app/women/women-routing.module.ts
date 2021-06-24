import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';



import { WomenPage } from './women.page';
const routes: Routes = [
  {
    path: '',
    component: WomenPage , 
  },
  {
    path : 'product',
    loadChildren: () => import('../product/product.module').then( m => m.ProductPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomenPageRoutingModule {}


