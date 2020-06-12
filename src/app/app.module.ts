import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryItemDetailComponent } from './diary-item-detail/diary-item-detail.component';
import { HighlightDirective } from './highlight.directive';
import { MinutesToHoursPipe } from './minutes-to-hours.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiaryComponent,
    DiaryItemDetailComponent,
    HighlightDirective,
    MinutesToHoursPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
