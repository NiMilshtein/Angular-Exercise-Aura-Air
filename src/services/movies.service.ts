import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiMovie, Movie } from 'src/models/interfaces/movie.interface';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private readonly httpClient: HttpClient) {}

  searchMovie(text: string): Observable<Movie[]> {
    return this.httpClient
      .get('https://www.omdbapi.com/', {
        params: {
          apikey: '381186c6',
          t: text.length <= 2 ? text : '',
          s: text.length > 2 ? text : '',
        },
      })
      .pipe(
        map((data: any) => {
          let results =
            data?.Search?.length > 0 ? data.Search : new Array(data);
          return results.map((movie: ApiMovie) => ({
            poster: movie.Poster,
            title: movie.Title,
            year: movie.Year,
            type: movie.Type,
            id: movie.imdbID,
          }));
        })
      );
  }
}
