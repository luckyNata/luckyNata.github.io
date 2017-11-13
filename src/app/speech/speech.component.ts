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
  speechId: number;
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
    this.speeches = this.speechService.getSpeeches();
    console.log('current speech', this.speeches);
  }
  getCurrentSpeech(id){
    this.speechService.getSpeech(id);
  }

}
