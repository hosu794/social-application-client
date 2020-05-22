import React, { useEffect } from "react";
import axios from "axios";

function App() {
  function fetchAll() {
    axios
      .get("https://the-writers-mind.herokuapp.com/api/stories?page=1")
      .then((reponse) => console.log(reponse));
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
