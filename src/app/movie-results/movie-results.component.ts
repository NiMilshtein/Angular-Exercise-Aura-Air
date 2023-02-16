import { Component, Input } from '@angular/core';
import { Movie } from 'src/models/interfaces/movie.interface';

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.css'],
})
export class MovieResultsComponent {
  @Input() movie: Movie;
}
