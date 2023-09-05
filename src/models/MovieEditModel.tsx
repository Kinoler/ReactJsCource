class MovieEditModel {
    Title: string;
    MovieUrl: string;
    Genre: string;
    Overview: string;
    ReleaseDate: string;
    Rating: number;
    Runtime: string;
  
    constructor(
      title: string,
      movieUrl: string,
      genre: string,
      overview: string,
      releaseDate: string,
      rating: number,
      runtime: string
    ) {
      this.Title = title;
      this.MovieUrl = movieUrl;
      this.Genre = genre;
      this.Overview = overview;
      this.ReleaseDate = releaseDate;
      this.Rating = rating;
      this.Runtime = runtime;
    }
  }
  
export default MovieEditModel;
  
  
  
  
  
  