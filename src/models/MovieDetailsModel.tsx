class MovieDetailsModel {
    constructor(
        public ImageUrl: string,
        public MovieName: string,
        public ReleaseYear: number,
        public Rating: number,
        public Duration: Date,
        public Description: string,
    ) {}
  }

export default MovieDetailsModel;