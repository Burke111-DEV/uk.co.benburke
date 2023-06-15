import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-display-extend',
  templateUrl: './display-extend.component.html',
  styleUrls: ['./display-extend.component.css']
})
export class DisplayExtendComponent implements OnInit {

  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }

}
