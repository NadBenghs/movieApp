import { Component, Input,Output, EventEmitter } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { RouterOutlet,RouterModule } from '@angular/router';
import { Router } from 'express';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchBarComponent,MovieDetailComponent,CommonModule,HttpClientModule,RouterModule,RouterOutlet],
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

  @Output() movieId = new EventEmitter<number>();


  getId(identifiant: number) : void{
  
    this.movieId.emit(identifiant);

  }
  

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