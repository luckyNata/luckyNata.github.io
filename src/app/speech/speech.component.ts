import { Component, OnInit } from '@angular/core';
import {SpeechService} from "../speech-service.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html'
})
export class SpeechComponent implements OnInit {
  speeches: any;
  subscription: Subscription;
  speechId: any;
  constructor(private speechService: SpeechService,
              private activatedRoute: ActivatedRoute) {
      this.subscription = this.activatedRoute.params.subscribe(params => {
      this.speechId = params["id"];

    });
  }

  ngOnInit() {
    this.getAllSpeeches();
    this.getCurrentSpeech(this.speechId);
  }
  getAllSpeeches(){
    this.speechService.getSpeeches()
      .subscribe((res: any) => {
        this.speeches = res;
      })

  }
  getCurrentSpeech(id){
    this.speechService.getSpeech(id);
  }
  updateList(event){
    this.getAllSpeeches();
  }

}
