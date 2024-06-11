import { useContext } from "react";
import { myContext } from "../App";

const Ex_useContext = () => {
  const { name, age } = useContext(myContext);

  return (
    <>
      <h1>My name is {name}</h1>
      <h1>My age is {age}</h1>
    </>
  );
};

export default Ex_useContext;
