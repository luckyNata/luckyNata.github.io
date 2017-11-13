import { Component, OnInit} from '@angular/core';
import {SpeechService} from "../speech-service.service";

@Component({
  selector: 'app-my-speeches',
  templateUrl: './my-speeches.component.html'
})
export class MySpeechesComponent implements OnInit {
  speeches: any;

  constructor(private  speechService: SpeechService) { }

  ngOnInit() {
    this.getMySpeeches();
  }
  getMySpeeches(){
    this.speechService.getMYSpeeches()
      .subscribe((res: any) => {
        this.speeches = res;
      })
  }
}
