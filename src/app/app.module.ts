import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { ChowkidaarGuard } from './chowkidaar.guard';
// import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatSelectModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UserService, ChowkidaarGuard ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
