import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import Counter from "./Counter";
// import Todo from "./components/TodoApp/Todo";
// import Meal from "./components/MealApp/Meal";
// import Calculator from "./components/CalculatorApp/Calculator";
// import ToggleBtnColor from "./components/ToggleBtnColorApp/ToggleBtnColor";
// import HiddenSearchBar from "./components/HiddenSearchApp/HiddenSearchBar";
// import Testimonials from "./components/TestimonialsApp/Testimonials";
// import Accordions from "./components/AccordionsApp/Accordions";
// import { accordionData } from "./components/AccordionsApp/AccordionsData";
import Validate from "./components/FormValidateApp/Validate";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Todo /> */}
    {/* <Meal /> */}
    {/* <Calculator />; */}
    {/* <ToggleBtnColor /> */}
    {/* <HiddenSearchBar /> */}
    {/* <Testimonials /> */}
    {/* {accordionData.map(({ title, content }) => {
      return <Accordions title={title} content={content} />;
    })} */}
    <Validate />
  </React.StrictMode>
);
