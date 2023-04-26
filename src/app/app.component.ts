import { Component } from '@angular/core';
import { WordsService } from './services/words.service';
import { WordType } from './data/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private wordService: WordsService){}


  get nouns() {
    return this.wordService.getNouns();
  }

  get verbs()  {
    return this.wordService.getVerbs();
  }
}
