import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Global } from "./global";

@Injectable()
export class FilmService{

    public url: string = "";

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url + Global.key ;
    }

    pruebas(){
        return "Soy el servicio de films";
    }

    getAllFilms(searchString:string):Observable<any>{
        return this._http.get(this.url + Global.search + searchString);
    }

    getFilm(searchString:string):Observable<any>{
        return this._http.get(this.url + Global.filmId + searchString);
    }
}