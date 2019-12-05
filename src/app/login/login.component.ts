import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  movies = []; 
  constructor(public _movie: MovieService) { }


  onClick() {
    this._movie.getMovies()
      .subscribe(
        (response : any) => {
          this.movies = response.results;
          console.log("movies", this.movies)
        })

    
  }







}
