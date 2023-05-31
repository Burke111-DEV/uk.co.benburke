import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public session: SessionService,
              public router: Router) { }

  ngOnInit(): void {
  }

  isActive(_url: string): boolean {
    return this.router.url == _url;
  }

}
