import {Component, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';
import {SpeechService} from "../speech-service.service";
import { Subscription } from "rxjs/Rx";
import {Router} from '@angular/router';

@Component({
  selector: 'app-central-part',
  templateUrl: './central-part.component.html'
})
export class CentralPartComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedSpeech: boolean = false;
  @Output() savedSpeech = new EventEmitter();

  share: boolean = false;
  added: boolean = false;
  changed: boolean = false;
  data: IData = {
    id: null,
    title: "",
    text: "",
    author: "",
    keywords: "",
    date: ""
  };

  constructor(private speechService: SpeechService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.speechService.selectedItem.subscribe((item: any) => {
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
    if(this.selectedSpeech){
      //modify
      this.speechService.updateData(this.data)
        .subscribe((changedItem)=> {
          this.savedSpeech.emit(changedItem);
          this.changed = true
        });


    } else {
      //create new one
      this.speechService.createSpeech(this.data)
        .subscribe(()=> this.added = true);
    }

  }
  delete(){
    this.speechService.delete(this.data)
      .subscribe(()=> this.router.navigate(['/all-speeches']));
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
