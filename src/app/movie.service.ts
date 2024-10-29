import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private jsonUrl = 'assets/movies.json';
 
  constructor(private http: HttpClient) {}


  searchAllMovies(): Observable<Movie[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

   
  searchMovieByTitle(titre: string): Observable<Movie[]> 
  {
    let filteredMovies = this.http.get<Movie[]>(this.jsonUrl).pipe(
      map((movies: Movie[]) =>
        movies.filter(movie =>
          movie.originalTitle.toLowerCase().includes(titre.toLowerCase())))
        );
        return filteredMovies;
}
}

