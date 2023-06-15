import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { DisplayExtendComponent } from './projects/display-extend/display-extend.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TopBarComponent,
    ProjectsListComponent,
    FooterComponent,
    CardComponent,
    DisplayExtendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
