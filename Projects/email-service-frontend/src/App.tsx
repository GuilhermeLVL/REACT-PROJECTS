import { useState } from "react";

import "./App.css";
import PrimaryInput from "./components/input/PrimaryInput";

function App() {
  const [email, setEmail] = useState("");

  return (
    <>
      <PrimaryInput
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        name="email"
      />
    </>
  );
}

export default App;
