import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-searh/movie-search.component';
import { MovieResultsComponent } from './movie-results/movie-results.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, MovieSearchComponent, MovieResultsComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
