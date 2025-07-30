import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((result) => setData(result.message));
  }, []);

  return <h1>{data}</h1>;
}

export default App;
