import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {SpeechService} from "../speech-service.service";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html'
})
export class LeftPanelComponent implements OnInit {
  @Input() speeches: any;
  @Input() speechId: any;
  submenu: number;
  defaultName: string = 'Speech';

  constructor(private  speechService: SpeechService) { }

  ngOnInit() {

  }
  selectSpeech(value){
    this.speechService.addSelectedSpeech(value);
  }

}
