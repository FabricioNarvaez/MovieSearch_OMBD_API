import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FilmService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  providers: [FilmService]
})
export class FilmComponent implements OnInit {

  parentTitle = "Error";
  public searchString:string = "";
  public Poster:string = "";
  public Genre: [] = [];
  public Plot:string = "";
  public Director: string = "";
  public MainActors: string = "";
  public Year: number = 0;
  public Runtime: number = 0;
  public Rate: number = 0;
  public err: boolean = false;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmService: FilmService
  ) { }

  toArray(txt:string){
    let arrayGen:any = txt
                      .replace(/[!¡¿?.,/*-+]/gi, '')
                      .split(' ');
                      console.log(arrayGen);
    return arrayGen;
  }

  ngOnInit(): void {
    
    this._route.params.subscribe((params: Params) =>{
      this.searchString = params.id;
    });

    console.log(this._filmService.getFilm(this.searchString).subscribe(
      res =>{
          if(res.Response !== "False"){
            this.parentTitle = res.Title;
            this.Poster = res.Poster;
            this.Rate = res.imdbRating;
            this.Genre = this.toArray(res.Genre);
            this.Plot = res.Plot;
            this.Director = res.Director;
            this.MainActors = res.Actors;
            this.Year = res.Year;
            this.Runtime = res.Runtime;
          }else{
            this.err = true;
          }
      },
      error =>{
          console.log(error);
      }
  ));
  }

}
