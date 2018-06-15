import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import {FormsModule} from "@angular/forms";
import { TitleCasePipe } from './title-case.pipe';


library.add(faCoffee, faTwitter, faCalendar);
@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    TitleCasePipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
