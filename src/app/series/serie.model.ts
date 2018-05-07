export class Serie {
    constructor(
        public id: string,
        public name: string,
        public vote_count: number,
        public vote_average: number,
        public original_language: string,
        public poster_path: string,
        public backdrop_path: string,
        public created_by: string[],
        public episode_run_time: number[],
        public number_of_episodes: number,
        public number_of_seasons: number,
        public seasons: any[],
        public in_production: boolean,
        public credits: string[],
        public genres: string[],
        public adult: boolean,
        public overview: string,
        public first_air_date: string,
        public last_air_date: string,
        public homepage: string,
        public videos: string
    ) {}
}