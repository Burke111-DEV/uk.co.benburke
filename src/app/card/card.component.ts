import { Component, Input, OnInit } from '@angular/core';

export interface ProjectData {
  title: string,
  background: string,
  technologies: Array<string>,
  link: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('project') projectData!: ProjectData;
  constructor() { }

  ngOnInit(): void {
  }

}
