import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensPageRoutingModule } from './mens-routing.module';
import { MensPage } from './mens.page';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';


import { DropdownComponent } from '../dropdown/dropdown.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensPageRoutingModule,
    MatSelectModule,
   
  ],
  declarations: [MensPage, DropdownComponent, NavbarComponent, 
    FooterComponent]
})
export class MensPageModule {}
