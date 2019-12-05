import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _http : HttpClient) { }


  baseUrl: string = 'https://api.themoviedb.org/3/discover/movie?api_key=fa6d14f9e93a82672442211716f689ca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

  getMovies( ) {
    return this._http.get(`${this.baseUrl}`);
  }
  getPeople( ) {
    return this._http.get(`${this.baseUrl}/people/`);
  }
  getContent(name) {
    return this._http.get(`${this.baseUrl}/${name}/` );
  }
  getYoutube(query) {
    const url = `https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyDSaHF9SEmPuwkl-hKhm3R_V-XRrhYdytI`
    return this._http.get(url)
  }










}
