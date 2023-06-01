import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { IndexComponent } from './index/index.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { HAnglesExtractionToolComponent } from './projects/h-angles-extraction-tool/h-angles-extraction-tool.component';
import { LanguageLearningComponent } from './projects/language-learning/language-learning.component';
import { RoboticHandComponent } from './projects/robotic-hand/robotic-hand.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'hand_angles_extraction_tool', component: HAnglesExtractionToolComponent },
  { path: 'language_learning_app', component: LanguageLearningComponent },
  { path: 'robotic_prosthetic_hand', component: RoboticHandComponent },

  { path: '**', component: UnderConstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[
  UnderConstructionComponent,
  IndexComponent, 
  AboutMeComponent, 
  ContactComponent, 
  CvComponent,
  HAnglesExtractionToolComponent,
  LanguageLearningComponent,
  RoboticHandComponent,
];
