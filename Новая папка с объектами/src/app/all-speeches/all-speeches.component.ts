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
    this.speechService.getSpeeches()
      .subscribe((res: any) => {
        this.speeches = res;
      })
  }
  searchSpeech(string){
    let filtered = this.speeches.filter((item) => {
      return item.keywords.match(string);
    });
    this.speeches = filtered;
  }
  resetSearch(){
    this.getAllSpeeches();
  }
}
