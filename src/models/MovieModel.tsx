class MovieModel {
    constructor(
        public ImageUrl: string,
        public MovieName: string,
        public ReleaseYear: number,
        public Genres: string[]
    ) {}
}

export default MovieModel;