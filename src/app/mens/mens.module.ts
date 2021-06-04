import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensPageRoutingModule } from './mens-routing.module';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';

import { MensPage } from './mens.page';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensPageRoutingModule
  ],
  declarations: [MensPage,NavbarComponent,FooterComponent]
})
export class MensPageModule {}
