import { useState } from "react";
import Demo2 from "./Demo2";
import Header from "./Header";
import Header2 from "./Header2";

function App2() {
  const ob = { name: "Demo", age: "25", occupation: "Software Engineer" };
  const [name, setName] = useState("Katrina");
  let name2 = "Ranbir";
  const changeName = () => {
    setName(name === "Deepika" ? "Katrina" : "Deepika");
  };
  const changeName2 = () => {
    if (name2 === "Ranbir") {
      name2 = "Ranveer";
    } else {
      name2 = "Ranbir";
    }
    console.log(name2);
  };
  return (
    <div>
      <Header place={"Bangalore"} game={"Football"} />
      <Header2 name={name} />
      <button className="border border-b-2 bg-red-200" onClick={changeName}>
        Change name
      </button>
      <button
        className="border border-b-2 bg-fuchsia-200"
        onClick={changeName2}
      >
        Change name 2
      </button>
      {console.log(name)}
      {console.log(name2)}
      <Demo2 {...ob} />
      <h3>Name 2 is {name2}</h3>
    </div>
  );
}

export default App2;
