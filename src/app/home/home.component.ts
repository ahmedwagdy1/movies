import { Component } from '@angular/core';
import { ApiService } from '../api.service';

// interface api{
//   poster_path : string,
//   title : string,
//   genre_ids : number
// }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor (private _ApiService : ApiService){}

  data !: any
  image : string = "https://image.tmdb.org/t/p/w500/"

  ngOnInit(): void
  {
    this._ApiService.getData().subscribe( (res) => this.data = res.results )
    console.log(this.data);
  }
  
  

}
