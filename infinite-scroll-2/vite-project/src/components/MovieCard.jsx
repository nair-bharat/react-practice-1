const MovieCard = ({ userId, title, body }) => {
  //console.log(movie);
  //const { userId, title, body } = movie;

  return (
    <div className="bg-slate-400 m-5 w-64 h-auto">
      <h4 className="p-2">{userId}</h4>
      <h4 className="p-2">Title: {title}</h4>
      <h4 className="p-2">Body: {body}</h4>
    </div>
  );
};

export default MovieCard;
