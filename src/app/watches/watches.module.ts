import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchesPageRoutingModule } from './watches-routing.module';

import { WatchesPage } from './watches.page';

import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';


import { DropdownComponent } from '../dropdown/dropdown.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchesPageRoutingModule,
    MatSelectModule,
   
  ],
  declarations: [WatchesPage, DropdownComponent, NavbarComponent, 
    FooterComponent]
})
export class WatchesPageModule {}
