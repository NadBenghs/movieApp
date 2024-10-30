import { Component, Input } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchBarComponent,CommonModule,HttpClientModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
   
  constructor(
    private movieService: MovieService,
    private http: HttpClient,
  ) {} 
  movies: Movie[] = [];        
  filteredMovies: Movie[] = [];


  ngOnInit()
  {
   this.movieService.getAllMovies().subscribe((movies) => {
    this.movies = movies
  this.filteredMovies=movies;});

  }

 
  searchMovieByTitle(searchTitle: string): void {
    if (searchTitle) {
      this.filteredMovies = this.movies.filter(movies=>movies.originalTitle.includes(searchTitle)); 
    } 
    else {
      this.filteredMovies = this.movies;
    }
  }
  }