import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-language-learning',
  templateUrl: './language-learning.component.html',
  styleUrls: ['./language-learning.component.css']
})
export class LanguageLearningComponent implements OnInit {

  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }

}
