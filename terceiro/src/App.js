import { useState } from "react";
function App() {
  const [n, setN] = useState(1);

  return (
    <div>
      <p> {n} </p>
      <button onClick={() => setN(n + 1)}>clique</button>
    </div>
  );
}

export default App;
