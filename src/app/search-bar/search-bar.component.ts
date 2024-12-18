import { Component, NgModule, EventEmitter,Input,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet,RouterModule } from '@angular/router';
import { Movie } from '../movie'; 
import { MovieService } from '../movie.service';
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, HttpClientModule, MovieDetailComponent,RouterModule,RouterOutlet],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  constructor(private movieService: MovieService,
             private http: HttpClient,
  ) {} 

  searchTitle: string = '';
  movies: Movie[] = [];

  @Output() titleSearch = new EventEmitter<string>(); 

  searchedTitle(): void {
    this.titleSearch.emit(this.searchTitle); 
  }

   
  

  }
