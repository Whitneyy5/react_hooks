import React from "react";

const MovieCard = ({
  title = "this is title",
  description = "description",
  posterURL = "the poster URL",
  rating = "default rating",
}) => {
  //these are props

  return (
    <div className="w-[10rem]">
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
