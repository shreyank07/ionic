import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeboffersPageRoutingModule } from './weboffers-routing.module';

import { WeboffersPage } from './weboffers.page';
import { NgxWheelModule } from 'ngx-wheel';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeboffersPageRoutingModule,NgxWheelModule
  ],
  declarations: [WeboffersPage,NavbarComponent,FooterComponent]
})
export class WeboffersPageModule {}
