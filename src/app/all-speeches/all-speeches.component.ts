import { Component, OnInit } from '@angular/core';
import {SpeechService} from "../speech-service.service";

@Component({
  selector: 'app-all-speeches',
  templateUrl: './all-speeches.component.html'
})
export class AllSpeechesComponent implements OnInit {
  speeches: any;

  constructor(private  speechService: SpeechService) { }

  ngOnInit() {
    this.getAllSpeeches();
  }
  getAllSpeeches(){
    this.speeches = this.speechService.getSpeeches();
  }
  searchSpeech(string){
    console.log('search', string);
  }
}
