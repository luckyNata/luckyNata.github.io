import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SpeechService} from "../speech-service.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  title: string = 'MyPage';
  speeches: any;
  btn: number = 3;

  constructor(private speechService: SpeechService) { }


  ngOnInit() {
    // this.getAllSpeeches();
  }

  getAllSpeeches(){
    this.speeches = this.speechService.getSpeeches();
  }

  createNew(){
    this.speechService.addSelectedSpeech('');
  }

}
