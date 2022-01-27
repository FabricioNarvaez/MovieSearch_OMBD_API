import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRputingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './components/search/search.component';
import { FilmComponent } from './components/film/film.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    FilmComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    routing,
    HttpClientModule
  ],
  providers: [appRputingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
