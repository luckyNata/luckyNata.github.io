import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Injectable()
export class SpeechService {
  selectedItem = new BehaviorSubject<any>('');
  author: string = "Natalie";
  speechesArray: any = [];

  constructor(private http: HttpClient) {

  }

  getSpeeches(){
    let written = localStorage.getItem('speeches');
    if (written) {
      return Observable.of(JSON.parse(written));
    }
    return this.http.get('data/speeches.json')
      .map((res: any) => {
        localStorage.setItem('speeches', JSON.stringify(res));
      });
  }

  getMYSpeeches(){
    let speechesArray = JSON.parse(localStorage.getItem('speeches'));
    let myArr =  speechesArray.filter((item) => {
      return item.author == this.author;
    });
    return Observable.of(myArr);
  }

  getSpeech(id){
    let speechesArray = JSON.parse(localStorage.getItem('speeches'));
    let current = speechesArray.filter((item) => {
      return item.id == id;
    });
    this.addSelectedSpeech(current[0]);
    return Observable.of(current[0]);
  }
  addSelectedSpeech(value){
    this.selectedItem.next(value);
  }
  findMaxIdValue(arr){
    let maxValue = 0;
    arr.forEach((item) => {
      if(maxValue < item.id){
        maxValue = item.id;
      }
    });
    return maxValue;
  }
  createSpeech(value){
    let speechesArray = JSON.parse(localStorage.getItem('speeches'));
    let maxId = this.findMaxIdValue(speechesArray);
    value['id'] = +maxId+1;
    speechesArray.push(value);
    localStorage.setItem('speeches', JSON.stringify(speechesArray));
    return Observable.of(value);
  }
  updateData(value){
    let speechesArray = JSON.parse(localStorage.getItem('speeches'));
    let oldItem = speechesArray.filter(item => item.id == value.id)[0];
    let index = speechesArray.indexOf(oldItem);
    speechesArray.splice(index, 1, value);
    localStorage.setItem('speeches', JSON.stringify(speechesArray));
    return Observable.of(value);
  }
  delete(value){
    let speechesArray = JSON.parse(localStorage.getItem('speeches'));
    let oldItem = speechesArray.filter(item => item.id == value.id)[0];
    let index = speechesArray.indexOf(oldItem);
    speechesArray.splice(index, 1);
    localStorage.setItem('speeches', JSON.stringify(speechesArray));
    return Observable.of(speechesArray);
  }
}


