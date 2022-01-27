export class FullFilmData{
   
    constructor(
        public Title: string,
        public Poster: string,
        public Director: string,
        public Actors: string,
        public RunTime: number,
        public Year: number,
        public Genre: string,
        public Ratings: []
    ){}
}