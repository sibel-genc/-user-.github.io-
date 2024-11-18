import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Zähler: {count}</h1>
      <button onClick={increase}>Erhöhen</button>
      <button onClick={decrease}>Verringern</button>
    </div>
  );
};

export default App;

