import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Signup from "./src/components/Signup";
import Login from "./src/components/Login";

const App = () => {
  const [page, setPage] = useState("signup");

  return <div>{page !== "signup" ? <Signup /> : <Login />}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

//credits @PoojeshShetty
