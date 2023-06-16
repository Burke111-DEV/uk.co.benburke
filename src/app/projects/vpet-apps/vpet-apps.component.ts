import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-vpet-apps',
  templateUrl: './vpet-apps.component.html',
  styleUrls: ['./vpet-apps.component.css']
})
export class VpetAppsComponent implements OnInit {

  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }

}
