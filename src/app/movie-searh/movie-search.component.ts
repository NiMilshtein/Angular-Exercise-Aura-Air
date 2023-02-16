import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/models/interfaces/movie.interface';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent {
  form = new FormGroup({
    searchInput: new FormControl(null, { validators: [Validators.required] }),
  });
  movies: Movie[] = [];
  loading = true;

  constructor(private readonly moviesService: MoviesService) {}

  search() {
    const searchInput = this.form.value.searchInput;

    if (!searchInput) return;
    this.loading=false;
    this.moviesService.searchMovie(searchInput).subscribe((result) => {
      this.movies = result;
      this.loading=true
      this.form.get('searchInput').setValue('');

    });
  }
}
