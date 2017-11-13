import { Component, Input, OnInit } from '@angular/core';
import {SpeechService} from "../speech-service.service";

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {
  @Input() value;
  @Input() className;
  @Input() disabled;
  @Input() data;
  @Input() click = (event: Event) => {};

  onClick (event: Event) {
    console.log('click', this.click, event);
    if (this.click) {
      this.click(event);
      event.preventDefault();
    }
  }
  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

}
