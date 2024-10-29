import { Component, NgModule, EventEmitter,Input,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movie.service'; 
import { Movie } from '../movie'; 

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchTitle: string = '';
  @Output() movieSearch: EventEmitter<string> = new EventEmitter<string>();
  
  
searchedMovie(){

  this.movieSearch.emit(this.searchTitle);

}


  


  }
  