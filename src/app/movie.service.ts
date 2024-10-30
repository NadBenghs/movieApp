import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { map, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private jsonUrl = "/movies.json";

  constructor(private http:HttpClient) {}

 
  getAllMovies() : Observable<Movie[]> {
    return this.http.get<Movie[]>(this.jsonUrl);
  }



  searchMovieById(id: number) : Observable<Movie | undefined>
  {
    return this.getAllMovies().pipe(
      map(movies => movies.find(movie => movie.id === id))
    );
  }



}