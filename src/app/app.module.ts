import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { RoutesConfig } from './routes';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { CentralPartComponent } from './central-part/central-part.component';
import { SpeechService } from "./speech-service.service";
import { BtnComponent } from './btn/btn.component';
import {FormsModule} from "@angular/forms";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDb } from './data';
import { AllSpeechesComponent } from './all-speeches/all-speeches.component';
import { MySpeechesComponent } from './my-speeches/my-speeches.component';
import { NewSpeechComponent } from './new-speech/new-speech.component';
import { SpeechComponent } from './speech/speech.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LeftPanelComponent,
    CentralPartComponent,
    BtnComponent,
    AllSpeechesComponent,
    MySpeechesComponent,
    NewSpeechComponent,
    SpeechComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(RoutesConfig.config),
    InMemoryWebApiModule.forRoot(InMemoryDb)
  ],
  providers: [
    SpeechService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
