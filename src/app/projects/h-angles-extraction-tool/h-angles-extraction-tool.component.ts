import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-h-angles-extraction-tool',
  templateUrl: './h-angles-extraction-tool.component.html',
  styleUrls: ['./h-angles-extraction-tool.component.css']
})
export class HAnglesExtractionToolComponent implements OnInit {

  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }

}
