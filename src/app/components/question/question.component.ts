import { Component, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{
  
  ngOnInit(): void {
    this.fetchWord();
  }

  word?: WordType | null  = null;

  constructor(private wordService: WordsService){}

  private fetchWord(): void {
    this.word = this.wordService.getWords().shift();
  }

  addToNouns(word: WordType): void {
    this.wordService.addNoun(word);
    this.fetchWord();
  }
  addToVerbs(word:WordType):void {
    this.wordService.addVerb(word);
    this.fetchWord();
  }
  check(): void {
    this.wordService.check();
  }
}
