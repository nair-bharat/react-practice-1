import MovieCard from "./MovieCard";

const Movies = ({ moviesinfo }) => {
  console.log(moviesinfo);

  return (
    <div className="flex flex-row justify-center flex-wrap m-10">
      {moviesinfo.map((movie, i) => {
        return <MovieCard {...movie} key={i} />;
      })}
    </div>
  );

  //return <MovieCard movie={moviesinfo[0]} />;
  //return <h1>This is Movies</h1>;
};

export default Movies;
