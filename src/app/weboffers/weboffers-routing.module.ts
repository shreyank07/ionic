import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeboffersPage } from './weboffers.page';

const routes: Routes = [
  {
    path: '',
    component: WeboffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeboffersPageRoutingModule {}
