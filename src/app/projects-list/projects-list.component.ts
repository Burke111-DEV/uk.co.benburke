import { Component, ElementRef, OnInit, ViewChild, HostListener, AfterViewInit  } from '@angular/core';
import { ProjectData } from '../card/card.component';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit, AfterViewInit {
  @ViewChild('listContainer') private listContainer!: ElementRef;
  public marginVal: string = "10px";

  public projects: Array<ProjectData> = [
    {
      title: "Robotic Prosthetic Hand University Dissertation",
      background: "/assets/cards_bg/diss.png",
      technologies: ["python", "cpp", "cad"],
      link: "/robotic_prosthetic_hand",
    },
    {
      title: "Hand Angles Extraction Tool",
      background: "/assets/cards_bg/hangles.png",
      technologies: ["html", "css", "js"],
      link: "/hand_angles_extraction_tool",
    },
    {
      title: "Second Language Learning App",
      background: "/assets/cards_bg/translate.png",
      technologies: ["html", "css", "js", "angular"],
      link: "/language_learning_app",
    },
    {
      title: "Alpha | VPet Interfacing Apps",
      background: "/assets/cards_bg/default.png",
      technologies: ["html", "css", "js", "angular", "sql", "java"],
      link: "/alpha_project",
    },
    {
      title: "Custom Dash Mounts",
      background: "/assets/cards_bg/CDM.png",
      technologies: ["cad"],
      link: "/custom_dash_mounts",
    },
  ]
  
  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.getMarginVal();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.getMarginVal();
  }

  private getMarginVal() {
    setTimeout(() => {
      const w = this.listContainer.nativeElement.offsetWidth;
      const count = Math.floor( (w) / (168 + 10) );
      const rem = w - (count * (168 + 10) );
      const m_v = Math.floor((rem / count)/2);
      this.marginVal = `10px ${m_v < 10 ? 10 : m_v }px`;
    }, 250);

  }
}
