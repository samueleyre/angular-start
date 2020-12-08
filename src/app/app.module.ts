import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { MyPageComponent } from './my-page/my-page.component';
import { MySecondPageComponent } from './my-second-page/my-second-page.component';
import { MySecondPageOneComponent } from './my-second-page-one/my-second-page-one.component';
import { MySecondPageTwoComponent } from './my-second-page-two/my-second-page-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MyPageComponent,
    MySecondPageComponent,
    MySecondPageOneComponent,
    MySecondPageTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
