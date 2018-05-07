export class Movie {
    constructor(
        public id: string,
        public title: string,
        public vote_count: number,
        public vote_average: number,
        public original_language: string,
        public poster_path: string,
        public backdrop_path: string,
        public runtime: number,
        public credits: string[],
        public genres: string[],
        public adult: boolean,
        public overview: string,
        public release_date: string,
        public homepage: string,
        public videos: string
    ) {}
}