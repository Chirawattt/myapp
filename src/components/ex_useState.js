import { useState } from "react";

const ExUseState = () => {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //     setCount(count + 1);
  // }

  // const decrement = () => {
  //     setCount(count - 1);
  // }

  // return (
  //     <>
  //         <h1>{count}</h1>
  //         <button onClick={increment}>+</button>
  //         <button onClick={decrement}>-</button>

  //     </>
  // )

  const [movie, setMovie] = useState({
    title: "Harry Potter",
    ratings: 7.8,
  });

  const plusRating = () => {
    setMovie({
      ...movie,
      ratings: movie.ratings + 1,
    });
  };

  return (
    <>
      <h1>{movie.title}</h1>
      <p>Ratings: {movie.ratings}</p>
      <button onClick={plusRating}>Add Rating</button>
    </>
  );
};

export default ExUseState;
