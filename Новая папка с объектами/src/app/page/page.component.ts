import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SpeechService} from "../speech-service.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  title: string = 'MyPage';

  constructor(private speechService: SpeechService) { }


  ngOnInit() {
  }

  createNew(){
    this.speechService.addSelectedSpeech('');
  }

}
