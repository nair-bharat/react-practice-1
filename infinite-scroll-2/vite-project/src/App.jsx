import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const getCardInfo = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=9&_page=" + page
    );

    //console.log(data);
    const json = await data.json();
    console.log(json);
    setCard((prev) => [...prev, ...json]);
  };
  useEffect(() => {
    getCardInfo();
  }, [page]);

  const handelInfiniteScroll = async () => {
    console.log("scrollHeight" + document.documentElement.scrollHeight);
    console.log("scrollTop" + document.documentElement.scrollTop);
    console.log("innerHeight" + window.innerHeight);

    if (
      document.documentElement.scrollTop + window.innerHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
      console.log(page);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
    //console.log("handle the logic here");
  }, []);
  //it the height at which the scroll bar touches the bottom of the document.
  //console.log(document.documentElement.scrollHeight);

  //number of pixels the document has been scrolled
  //console.log(document.documentElement.scrollTop);

  //This gives the height of the viewable height
  //console.log(window.innerHeight);

  return (
    <div className="">
      <h1>LIST OF CARDS</h1>
      <div className="m-20">
        <Movies moviesinfo={card} />;
      </div>
    </div>
  );

  //const [count, setCount] = useState(0)

  /*
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Bharat + None</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Header />
    </>
  )
  */
}

export default App;
