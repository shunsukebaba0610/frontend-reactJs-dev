import React from "react";
import { useRef, useState } from "react";
import "./App.css";
import ImageGallery from "./ImageGallery";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  //const [inputText, setInputText] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //setInputText(ref.current.value);

    //APIURL
    const endpointURL = `https://pixabay.com/api/?key=${API_KEY}&q=${ref.current.value}&image_type=photo&pretty=true`;
    //APIをたたく
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h1>Pixabay</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
