import { Component,Input,NgModule } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  movie? : Movie ;
  movieId? : number;

  constructor(
    private movieService: MovieService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {} 

  ngOnInit() {
   
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.movieId = parseInt(id);
        this.showMovie();
      }
    });
  }


  showMovie()
  {
    if(this.movieId){
    this.movieService.searchMovieById(this.movieId).subscribe((movie) => {
      this.movie = movie;
      console.log(this.movie);
    
  })
  }
 }
}
