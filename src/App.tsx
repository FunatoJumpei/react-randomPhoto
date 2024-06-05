import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [photoUrl, setPhotoUrl] = useState("");

  const onClickFeatchPhoto = () => {
    axios.get("https://source.unsplash.com/random").then((res) => {
      setPhotoUrl(res.request.responseURL);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFeatchPhoto}>クリック</button>
      <br />
      <img src={photoUrl} />
    </div>
  );
}

export default App;
