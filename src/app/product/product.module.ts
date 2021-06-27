import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';

import { ProductPage } from './product.page';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    
  ],
  declarations: [ProductPage,NavbarComponent,
    FooterComponent],
})
export class ProductPageModule {}
