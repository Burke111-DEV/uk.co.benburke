import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-robotic-hand',
  templateUrl: './robotic-hand.component.html',
  styleUrls: ['./robotic-hand.component.css']
})
export class RoboticHandComponent implements OnInit {

  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }

}
