import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-cycloid-generator',
  templateUrl: './cycloid-generator.component.html',
  styleUrls: ['./cycloid-generator.component.css']
})
export class CycloidGeneratorComponent implements OnInit {

  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }

}
