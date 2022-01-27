import { Component, OnInit } from '@angular/core';
import { FilmShort } from 'src/app/models/filmShort';
import { FilmService } from 'src/app/services/films.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [FilmService]
})
export class SearchComponent implements OnInit {

    parentTitle = "OMDb MOVIE INFO";
    public filmsArray: FilmShort[] = [];
    public searchString:string = "";

    constructor(
        private _filmService: FilmService
    ) { }

    ngOnInit(): void {
        
    }

    goSearch(event:any){
        //console.log();event.target.value
        console.log(this._filmService.getFilm(event.target.value).subscribe(
            res =>{
                
                if(res.Search)
                    this.filmsArray = res.Search;
                    
            },
            error =>{
                console.log(error);
            }
            ));
    }
}
