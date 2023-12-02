import { useEffect, useState } from "react";
import { imageCollection } from "./utils/Constants";

const App = () => {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage();
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeImg]);

  const nextImage = () => {
    setActiveImg(activeImg === imageCollection.length - 1 ? 0 : activeImg + 1);
  };

  const prevImage = () => {
    setActiveImg(activeImg === 0 ? imageCollection.length - 1 : activeImg - 1);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="border border-b-2 bg-purple-400 text-white py-2 px-4 m-2"
        onClick={prevImage}
      >
        Prev
      </button>
      {imageCollection.map((url, i) => (
        <img
          className={"w-[500px] " + (activeImg === i ? "block" : "hidden")}
          src={url}
          alt="wallpaper.js"
          key={url}
        />
      ))}

      <button
        className="border border-b-2 bg-purple-400 text-white py-2 px-4 m-2"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
};

export default App;
