import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { WorkOverviewComponent } from './work-overview/work-overview.component';
import { ChatComponent } from './chat/chat.component';
import { ImageComponent } from './image/image.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BioComponent,
    WorkDetailComponent,
    WorkOverviewComponent,
    ChatComponent,
    ImageComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
