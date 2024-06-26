// import Prop from './components/props';
// import Password from './components/conditional';
// import { FcAbout } from "react-icons/fc";
// import ExUseState from "./components/ex_useState";
import { createContext } from "react";
import Ex_useContext from "./components/Ex_useContext";

// const Button = () => {
//   return <button>Click Me!</button>
// }

export const myContext = createContext();

function App() {
  // Example of using a list
  // const numbers = [0,1,2,3,4,5,6,7,8,9];
  const name = "Chirawattt";
  const age = 22;

  return (
    <>
      {/* how to display data in a list  
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>  
        ))}
      </ul> 
      */}

      {/* how to use props components
      <Prop 
        img="https://avatars.githubusercontent.com/u/119652376?v=4"
        alt="myProfilePic"
        firstName="Chirawat"
        lastName="Yana"
        nickName="Bus"
        age={22}
        isStudent={true}
        hobbies={['Reading', 'Coding', 'Gaming']}
      >
        <p>This part is prop children</p>
      </Prop> 
      */}
      {/* how to use conditional in react
      <Password isValid={true} /> */}
      {/* <h1 style={{ color: "#9f9f9f", backgroundColor: "black"}}>Hello World!</h1> */}

      {/* <FcAbout /> */}
      {/* <Button /> */}

      {/* Example how to use state in component */}
      {/* <ExUseState /> */}

      <myContext.Provider value={{ name, age }}>
        <Ex_useContext />
      </myContext.Provider>
    </>
  );
}

export default App;
