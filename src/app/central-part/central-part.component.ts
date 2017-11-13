import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SpeechService} from "../speech-service.service";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-central-part',
  templateUrl: './central-part.component.html'
})
export class CentralPartComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedSpeech: boolean = false;
  share: boolean = false;
  data: IData = {
    id: null,
    title: "",
    text: "",
    author: "",
    keywords: "",
    date: ""
  };

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
    this.subscription = this.speechService.selectedItem.subscribe((item: any) => {
        console.log('selected item', item);
        this.data.id = item.id;
        this.data.title = item.title;
        this.data.text = item.text;
        this.data.author = item.author;
        this.data.keywords = item.keywords;
        this.data.date = item.date;
      if(item.text && item.author){
        this.selectedSpeech = true;
      }
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  edit(){
    console.log('selectedSpeech', this.selectedSpeech);
    if(this.selectedSpeech){
      //modify
      this.speechService.updateData(this.data);

    } else {
      //create new one
      this.speechService.createSpeech(this.data);
    }

  }
  delete(){
    this.speechService.delete(this.data);
  }
  shareWishPerson(email){
    console.log('email', email);
  }
}

interface IData {
  id: any,
  title: string,
  text: string,
  author: string,
  keywords: string,
  date: string
}
